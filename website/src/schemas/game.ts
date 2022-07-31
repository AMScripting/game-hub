import { DBSchema } from 'idb';

export enum GameStore {
  SpaceGame = 'space-game',
}
export interface GameSchema extends DBSchema {
  [GameStore.SpaceGame]: {
    key: string;
    value: string;
  };
}
export default GameSchema;
