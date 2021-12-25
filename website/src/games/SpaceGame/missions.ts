import { Mission, MissionType } from '../../models/Mission';

export const missions: Record<MissionType, Mission> = {
  [MissionType.AbandonedShip]: {
    title: 'Abandoned Ship',
    type: MissionType.AbandonedShip,
    description: 'abandoned ship',
    logo: '',
    map: null,
  },
  [MissionType.Asteroid]: {
    title: 'Asteroid',
    type: MissionType.Asteroid,
    description: 'asteroid',
    logo: '',
    map: null,
  },
  [MissionType.MiningOutpost]: {
    title: 'Mining Outpost',
    type: MissionType.MiningOutpost,
    description: 'mining outpost',
    logo: '',
    map: null,
  },
  [MissionType.Satellite]: {
    title: 'Satellite',
    type: MissionType.Satellite,
    description: 'satellite',
    logo: '',
    map: null,
  },
};
export default missions;
