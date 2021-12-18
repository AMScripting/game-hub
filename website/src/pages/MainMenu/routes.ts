import { html } from 'lit';
import { Route } from '../../models/Route';
import SpaceGame from '../../games/SpaceGame/summary';

export const route: Route = {
  module: () => import('./MainMenu'),
  path: `/${SpaceGame.name}`,
  render: html`<main-menu-page .summary=${SpaceGame}></main-menu-page>`,
  title: SpaceGame.name,
};

export default route;
