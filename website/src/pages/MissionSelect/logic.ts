import GameSummary from '../../models/GameSummary';
import { MissionType } from '../../models/Mission';
import Router from '../../services/Router';
import MissionWorker from '../../workers/Mission';

export function cancel({ name }: GameSummary) {
  Router.changeRoute(`/${name}`);
}
export function startMission(mission: MissionType, { name }: GameSummary) {
  MissionWorker.setActiveMission(mission);
  Router.changeRoute(`/${name}/mission`);
}
