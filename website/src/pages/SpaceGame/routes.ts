import { html } from 'lit';
import { Route } from '../../services/Router';

export const route: Route = {
  module: () => import('./SpaceGame'),
  name: 'SpaceGame',
  path: '/space-game',
  render: html`<space-game></space-game>`,
  title: 'Space Game',
};

export default route;
