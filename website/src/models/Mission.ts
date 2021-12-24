export enum MissionType {
  AbandonedShip = 'AbandonedShip',
  Asteroid = 'Asteroid',
  MiningOutpost = 'MiningOutpost',
  Satellite = 'Satellite',
}
export interface Mission {
  type: MissionType;
  description: string;
  logo: string;
  map: unknown;
}
export default Mission;
