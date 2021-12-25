import { html } from 'lit';
import { Route } from '../../models/Route';
import SpaceGame from '../../games/SpaceGame/summary';

export const route: Route = {
  module: () => import('./Settings'),
  path: `/${SpaceGame.name}/menu/settings`,
  pattern: /^\/[a-zA-Z0-9]+\/menu\/settings[/]?/,
  render: html`<settings-page .summary=${SpaceGame}></settings-page>`,
  title: `Settings - ${SpaceGame.name}`,
};

export default route;
