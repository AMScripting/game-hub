import GameSummary from '../../models/GameSummary';
import Mission, { MissionStatus } from '../../models/Mission';
import Router from '../../services/Router';
import MissionWorker from '../../workers/Mission';

export async function abandonMission(
  mission: Mission | null,
  { name }: GameSummary,
) {
  if (mission)
    await MissionWorker.completeMission(mission, MissionStatus.Abandoned);
  Router.changeRoute(`/${name}`);
}
export async function completeMission(
  mission: Promise<Mission | null>,
  { name }: GameSummary,
) {
  const _m = await mission;
  if (!_m) throw new Error('Mission object was null');
  await MissionWorker.completeMission(_m);
  Router.changeRoute(`/${name}/mission/recap`);
}
