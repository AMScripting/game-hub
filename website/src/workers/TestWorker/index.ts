// eslint-disable-next-line import/no-unresolved
import { DataWorker } from '../DataWorkerClass.js';

export default class TestWorker extends DataWorker<string, string> {
  constructor() {
    super('game-data', '/src/workers/TestWorker/worker.js');
  }

  protected messageResponse(event: unknown) {
    // eslint-disable-next-line no-console
    console.log('TestWorker', event, this);
  }
}
