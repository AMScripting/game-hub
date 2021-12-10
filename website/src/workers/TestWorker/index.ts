import { DataWorker } from '../DataWorkerClass.js';

export default class TestWorker extends DataWorker<Object, Object> {
  constructor() {
    super('game-data', '/src/workers/TestWorker/worker.js');
  }

  protected messageResponse(event: unknown) {
    console.log('TestWorker', event, this);
  }
}
