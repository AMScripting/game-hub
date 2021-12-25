import { html } from 'lit';
import { Route } from '../../models/Route';
import SpaceGame from '../../games/SpaceGame/summary';

export const route: Route = {
  module: () => import('./MissionRecap'),
  path: `/${SpaceGame.name}/mission/recap`,
  pattern: /^\/[a-zA-Z0-9]+\/mission\/recap[/]?$/,
  render: html`<mission-recap-page .summary=${SpaceGame}></mission-recap-page>`,
  title: `Mission Recap - ${SpaceGame.name}`,
};

export default route;
