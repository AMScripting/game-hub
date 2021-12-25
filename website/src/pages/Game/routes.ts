import { html } from 'lit';
import { Route } from '../../models/Route';
import SpaceGame from '../../games/SpaceGame/summary';

export const route: Route = {
  module: () => import('./Game'),
  path: `/${SpaceGame.name}`,
  pattern: /^\/[a-zA-Z0-9]+[/]?$/,
  render: html`<game-page .summary=${SpaceGame}></game-page>`,
  title: `${SpaceGame.name}`,
};

export default route;
