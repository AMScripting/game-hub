import { html } from 'lit';
import { Route } from '../../models/Route';
import SpaceGame from '../../games/SpaceGame/summary';

export const route: Route = {
  module: () => import('./Character'),
  path: `/${SpaceGame.name}/character`,
  pattern: /^\/[a-zA-Z0-9]+\/character[/]?$/,
  render: html`<character-page .summary=${SpaceGame}></character-page>`,
  title: `Character - ${SpaceGame.name}`,
};
export default route;
