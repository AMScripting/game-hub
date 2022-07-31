export enum WorkerTask {
  GenerateMap = 'generate-map',
}

export interface WorkerSchema extends Array<WorkerTask> {
  0: WorkerTask;
}
export default WorkerSchema;
