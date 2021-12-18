import { TemplateResult } from 'lit';
import GameHubRoute from '../pages/GameHub/routes';
import MainMenuRoute from '../pages/MainMenu/routes';
import SettingsRoute from '../pages/Settings/routes';

export interface Route {
  visible?: { footer?: boolean; header?: boolean; sidebar?: boolean };
  module: () => Promise<unknown>;
  path: string;
  render: TemplateResult;
  title: string;
}
export default Route;

export const Routes = [GameHubRoute, MainMenuRoute, SettingsRoute];
