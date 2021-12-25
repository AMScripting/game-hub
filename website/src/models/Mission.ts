export enum MissionStatus {
  Pending = 'pending',
  InProgress = 'in-progress',
  Abandoned = 'abandoned',
  Completed = 'completed',
}
export enum MissionType {
  AbandonedShip = 'AbandonedShip',
  Asteroid = 'Asteroid',
  MiningOutpost = 'MiningOutpost',
  Satellite = 'Satellite',
}
export interface Mission {
  title: string;
  type: MissionType;
  description: string;
  endDate?: Date;
  logo: string;
  map?: unknown;
  status?: MissionStatus;
  startDate?: Date;
}
export default Mission;
