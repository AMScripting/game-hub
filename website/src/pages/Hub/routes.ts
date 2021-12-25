import { html } from 'lit';
import { Route } from '../../models/Route';

const route: Route = {
  title: 'Games',
  path: '/',
  pattern: /^[/]?$/,
  render: html` <hub-page></hub-page> `,
  module: () => import('./Hub'),
  visible: { footer: true },
};

export default route;
