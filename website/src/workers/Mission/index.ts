import { ObjectStore, MissionSchema } from '../../schemas/mission';
import { WorkerTask, WorkerSchema } from './schema';

import { DataWorker } from '../DataWorkerClass';
import { Mission, MissionStatus, MissionType } from '../../models/Mission';
import { randomInt } from '../../utils/number';

import { missions } from '../../games/SpaceGame/missions';

export class MissionWorker extends DataWorker<MissionSchema, WorkerSchema> {
  constructor() {
    // TODO: make game reference dynamic
    super('SpaceGame-mission-data', '/src/workers/Mission/worker.js', (db) => {
      db.createObjectStore(ObjectStore.AvailableMissions, {
        autoIncrement: true,
      });
      const missionStore = db.createObjectStore(ObjectStore.Missions, {
        keyPath: 'startDate',
      });
      missionStore.createIndex('startDate', 'startDate', { unique: true });
      missionStore.createIndex('status', 'status');
      missionStore.createIndex('type', 'type');
    });
  }

  /**
   * Starts a mission by commiting the parsed logic into the database and notifying the watchers.
   * @param mission
   */
  private async startMission(mission: Mission) {
    const newMission = {
      startDate: new Date(),
      ...mission,
      status: MissionStatus.InProgress,
    };
    (await this.database)?.put(ObjectStore.Missions, newMission);
    // TODO: notify that a mission has started
  }
  /**
   * Parses messages from the associated worker, triggering the correct callback logic in the main thread.
   * @override
   * @param event
   */
  protected messageResponse({
    data: [task, ...parameters],
  }: MessageEvent<WorkerSchema>) {
    switch (task) {
      case WorkerTask.GenerateMap:
        this.startMission(parameters[0] as Mission);
        break;
      default:
    }
  }
  /**
   * Fetches a list of mission selections, if there are currently no selections available then a random number of
   * randomly selected missions from all available missions are generated, stored, then returned.
   * @returns
   */
  async availableMissions(): Promise<Mission[]> {
    const tx = (await this.database)?.transaction(
      ObjectStore.AvailableMissions,
      'readwrite',
    );
    let data: MissionType[] = [];

    try {
      const store = tx.objectStore(ObjectStore.AvailableMissions);
      data = await store.getAll();

      if (!data || !data.length) {
        const count = randomInt(2, 3); // TODO: make this flexible, and resiliant to a max mission limit
        const positions = new Set<number>();
        const items = Object.keys(missions) as MissionType[];
        const promises = [];
        data = [];

        while (positions.size < count) {
          positions.add(randomInt(0, items.length - 1));
        }
        for (const index of positions.values()) {
          const key = items[index];
          promises.push(store.add(key));
          data.push(key);
        }
        await Promise.all(promises);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('MissionWorker: availableMissions', e);
    }
    await tx.done;
    return data.map((type) => missions[type]);
  }
  /**
   * Checks to see if an active mission is in progress, returning the mission data or null if there are no active
   * missions.
   */
  async fetchActiveMission(): Promise<Mission | null> {
    let activeMission: Mission | null = null;

    try {
      const index = await (await this.database)
        ?.transaction(ObjectStore.Missions, 'readwrite')
        .store.index('status');
      for await (const cursor of index.iterate(
        IDBKeyRange.only(MissionStatus.InProgress),
        'prev',
      )) {
        if (!cursor) break;
        if (!activeMission) activeMission = { ...cursor.value };
        else
          cursor.update({ ...cursor.value, status: MissionStatus.Abandoned });
      }
    } catch (e) {
      console.error('MissionWorker: fetchActiveMission', e);
    }

    return activeMission;
  }
  /**
   * Updates the data store with the active mission and sets initial mission state.
   * @param mission
   */
  async setActiveMission(type: MissionType) {
    this.worker.postMessage([
      WorkerTask.GenerateMap,
      { ...missions[type], status: MissionStatus.Pending },
    ]);
  }
}
export default new MissionWorker();
