import { html } from 'lit';
import { Route } from '../../models/Route';
import SpaceGame from '../../games/SpaceGame/summary';

export const route: Route = {
  module: () => import('./Settings'),
  path: `/${SpaceGame.name}/settings`,
  render: html`<settings-page .summary=${SpaceGame}></settings-page>`,
  title: `${SpaceGame.name} - Settings`,
};

export default route;
