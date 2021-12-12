import { html } from 'lit';
import { Route } from '../../services/Router';

const route: Route = {
  name: 'GameHub',
  title: 'Game Hub',
  path: '/',
  render: html`<game-hub></game-hub>`,
  module: () => import('./GameHub'),
};

export default route;
