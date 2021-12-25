import { DBSchema } from 'idb';
import Mission, { MissionType } from '../models/Mission';

export enum ObjectStore {
  AvailableMissions = 'available-missions',
  Missions = 'missions',
}
export interface MissionSchema extends DBSchema {
  [ObjectStore.AvailableMissions]: {
    key: string;
    value: MissionType;
  };
  [ObjectStore.Missions]: {
    key: Date;
    value: Mission;
    indexes: {
      startDate: Date;
      status: string;
      type: string;
    };
  };
}
export default MissionSchema;
