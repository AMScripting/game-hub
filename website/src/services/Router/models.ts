import { TemplateResult } from 'lit';
import GameHubRoute from '../../pages/GameHub/routes';
import SpaceGameRoute from '../../pages/SpaceGame/routes';

export interface Route {
  name: string;
  title: string;
  path: string;
  render: TemplateResult;
  module: () => Promise<unknown>;
}
export default Route;

export const Routes = {
  [GameHubRoute.name]: GameHubRoute,
  [SpaceGameRoute.name]: SpaceGameRoute,
};
