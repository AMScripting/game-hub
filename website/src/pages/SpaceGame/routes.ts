import { html } from 'lit';
import { Route } from '../../services/Router';

export const route: Route = {
  name: 'SpaceGame',
  title: 'Space Game',
  path: '/space-game',
  render: html`<space-game></space-game>`,
  module: () => import('./SpaceGame'),
};

export default route;
