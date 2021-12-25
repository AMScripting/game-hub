export enum WorkerTask {
  GenerateMap = 'generate-map',
}

export interface WorkerSchema extends Array<Object> {
  0: WorkerTask;
}
export default WorkerSchema;
