import { html } from 'lit';
import { Route } from '../../models/Route';

export const route: Route = {
  title: 'Game Hub',
  path: '/',
  pattern: /^\/$/,
  render: html` <game-hub></game-hub> `,
  module: () => import('./GameHub'),
  visible: { footer: true },
};
export default route;
