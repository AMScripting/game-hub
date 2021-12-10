import { openDB, IDBPDatabase, OpenDBCallbacks } from 'idb';

export abstract class DataWorker<DBSchema, WorkerSchema> {
  protected database: Promise<IDBPDatabase<DBSchema>>;
  protected worker: Worker;

  constructor(
    storeName: string,
    workerPath: string,
    initializer?: OpenDBCallbacks<DBSchema>['upgrade']
  ) {
    this.database = openDB<DBSchema>(
      storeName,
      1,
      initializer ? { upgrade: initializer } : undefined
    );

    this.worker = new Worker(workerPath);
    this.worker.addEventListener('message', this.messageResponse);
  }

  protected abstract messageResponse(event: MessageEvent<WorkerSchema>): void;
}
