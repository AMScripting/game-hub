import GameSummary from '../../models/GameSummary';
import Mission, { MissionStatus } from '../../models/Mission';
import Router from '../../services/Router';
import MissionWorker from '../../workers/Mission';

export async function abandonMission(
  mission: Mission | null,
  { name }: GameSummary,
) {
  if (mission)
    await MissionWorker.completeMission(mission, MissionStatus.Abandoned);
  Router.changeRoute(`/${name}`);
}
export async function completeMission(
  mission: Promise<Mission | null>,
  { name }: GameSummary,
) {
  await MissionWorker.completeMission((await mission)!);
  Router.changeRoute(`/${name}/mission/recap`);
}
