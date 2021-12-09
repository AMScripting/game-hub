import { openDB, IDBPDatabase } from 'idb';
import { GameSchema } from '@schemas/game';

let database: Promise<IDBPDatabase<GameSchema>>;

export async function initialize() {
  database = openDB<GameSchema>('game-data', 1, {
    upgrade(/* db */) {
      // db.createObjectStore('');
    },
  });
  await database;
}
