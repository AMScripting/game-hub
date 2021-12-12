import GameHubRoute from '../../pages/GameHub/routes';
import { Route, Routes } from './models';
import UUID from '../../utils/UUID';

type Callback = (route: Route) => void;

let currentRoute: Route;
const callbacks: Record<string, Callback> = {};

/**
 * Changes the current route to the newly provided route.  Additionally imports that route dynamically.
 * @param route
 */
export async function changeRoute(route: Route) {
  currentRoute = route;

  try {
    const promise = route.module();
    document.title = route.title;
    await promise;
    window.history.pushState({}, route.title, route.path);
  } catch {
    // Bounce the user back to the home page when the route is improperly parsed
    changeRoute(GameHubRoute);
  }
}
/**
 * Checks a given route to see if it matches the current route.
 * @param route
 * @returns
 */
export function checkRoute({ path }: Route): boolean {
  const { pathname } = window.location;
  return pathname === path;
}
/**
 * Fetches the route objects based on a given path
 * @param _path
 * @returns
 */
export function lookupRoute(_path: string): Route | null {
  return Object.values(Routes).find(({ path }) => path === _path) || null;
}
/**
 * Allows watching for changes to the currently loaded route.
 * @param callback
 * @returns
 */
export function watch(callback: Callback): () => void {
  callback(currentRoute);
  const key = UUID();
  callbacks[key] = callback;

  return () => {
    delete callbacks[key];
  };
}

export const Router = {
  changeRoute,
  checkRoute,
  watch,
};
export default Router;

// Initialize the route the app was loaded on, and establish the watcher logic
currentRoute = new Proxy(
  lookupRoute(window.location.pathname) || GameHubRoute,
  {
    set(obj: Route, prop: keyof Route, value) {
      if (prop === 'name') {
        // Route was changed, notify watchers
        // TODO: notify watchers
      }

      // Default setter logic
      // eslint-disable-next-line no-param-reassign
      obj[prop] = value;
      return true;
    },
  }
);
currentRoute.module();
document.title = currentRoute.title;
