import Router, { Route } from '../../services/Router';

export function launchGame(route: Route, event: Event) {
  event.preventDefault();

  Router.changeRoute(route);
}
