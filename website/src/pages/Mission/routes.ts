import { html } from 'lit';
import { Route } from '../../models/Route';
import SpaceGame from '../../games/SpaceGame/summary';

export const route: Route = {
  module: () => import('./Mission'),
  path: `/${SpaceGame.name}/mission`,
  render: html`<mission-page .summary=${SpaceGame}></mission-page>`,
  title: `Mission - ${SpaceGame.name}`,
};

export default route;
