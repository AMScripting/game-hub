import { TemplateResult } from 'lit';

import CharacterRoute from '../pages/Character/routes';
import GameRoute from '../pages/Game/routes';
import HubRoute from '../pages/Hub/routes';
import MainMenuRoute from '../pages/MainMenu/routes';
import MissionRoute from '../pages/Mission/routes';
import MissionRecapRoute from '../pages/MissionRecap/routes';
import MissionSelectRoute from '../pages/MissionSelect/routes';
import SettingsRoute from '../pages/Settings/routes';

export interface Route {
  visible?: { footer?: boolean; header?: boolean; sidebar?: boolean };
  module: () => Promise<unknown>;
  path: string;
  pattern: RegExp;
  render: TemplateResult;
  title: string;
}
export default Route;

export const Routes = [
  CharacterRoute,
  GameRoute,
  HubRoute,
  MainMenuRoute,
  MissionRoute,
  MissionRecapRoute,
  MissionSelectRoute,
  SettingsRoute,
];
