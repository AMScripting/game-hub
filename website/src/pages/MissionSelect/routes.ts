import { html } from 'lit';
import { Route } from '../../models/Route';
import SpaceGame from '../../games/SpaceGame/summary';

export const route: Route = {
  module: () => import('./MissionSelect'),
  path: `/${SpaceGame.name}/mission/select`,
  render: html`<mission-select-page
    .summary=${SpaceGame}
  ></mission-select-page>`,
  title: `Mission Select - ${SpaceGame.name}`,
};

export default route;
