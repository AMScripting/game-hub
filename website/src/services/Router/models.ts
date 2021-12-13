import { TemplateResult } from 'lit';
import GameHubRoute from '../../pages/GameHub/routes';
import SpaceGameRoute from '../../pages/SpaceGame/routes';

export interface Route {
  visible?: { footer?: boolean; header?: boolean; sidebar?: boolean };
  module: () => Promise<unknown>;
  name: string;
  path: string;
  render: TemplateResult;
  title: string;
}
export default Route;

export const Routes = {
  [GameHubRoute.name]: GameHubRoute,
  [SpaceGameRoute.name]: SpaceGameRoute,
};
