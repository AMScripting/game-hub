import { html } from 'lit';
import { Route } from '../../models/Route';

const route: Route = {
  title: 'Game Hub',
  path: '/',
  render: html` <game-hub></game-hub> `,
  module: () => import('./GameHub'),
  visible: { footer: true },
};

export default route;
