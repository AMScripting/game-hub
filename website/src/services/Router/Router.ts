import { Route } from '../../models/Route';
import { UUID } from '../../utils/UUID';
import HubRoute from '../../pages/Hub/routes';
import Routes from './Routes';

type Callback = (route: Route) => void;

/**
 * Fetches the route objects based on a given path
 * TODO: need to eventually support routes with variables
 * @param _path
 * @returns
 */
export function lookupRoute(_path: string): Route | undefined {
  return Routes.find(({ pattern }) => pattern.exec(_path));
}
export class Router {
  private callbacks: Record<string, Callback> = {};
  private proxy: { currentRoute: Route };

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    // Initialize the route the app was loaded on, and establish the watcher logic
    this.proxy = new Proxy(
      { currentRoute: lookupRoute(window.location.pathname) || HubRoute },
      {
        set(obj: Router['proxy'], prop: keyof Router['proxy'], value) {
          if (prop === 'currentRoute') {
            Object.values(self.callbacks).forEach((callback) =>
              callback(value),
            );
          }

          // Default setter logic
          // eslint-disable-next-line no-param-reassign
          obj[prop] = value;
          return true;
        },
      },
    );
    this.proxy.currentRoute.module();
    document.title = this.proxy.currentRoute.title;

    // Registering the router for monitoring changes to the window state
    window.addEventListener('popstate', () => {
      this.changeRoute(window.location.pathname);
    });
  }

  /**
   * Changes the current route to the newly provided route.  Additionally imports that route dynamically.
   * @param route
   */
  async changeRoute(path: string) {
    const route = lookupRoute(path);
    if (!route) {
      this.changeRoute('/');
      return;
    }
    try {
      const promise = route.module();
      document.title = route.title;
      await promise;
      window.history.pushState({}, route.title, path);
      this.proxy.currentRoute = route;
    } catch {
      // Bounce the user back to the home page when the route is improperly parsed
      this.changeRoute(HubRoute.path);
    }
  }
  /**
   * Parses the current URL search parameter into an Object of key:value pairs, ignores any pairs that do not have a
   * non-empty string for both key and value.
   * @returns
   */
  getSearchFields(): Record<string, string> {
    return window.location.search
      .substring(1)
      .split('&')
      .reduce((acc, pair) => {
        const [key, value] = pair.split('=');
        if (key && value) acc[key] = value;
        return acc;
      }, {} as Record<string, string>);
  }
  /**
   * Allows watching for changes to the currently loaded route.
   * @param callback
   * @returns
   */
  watch(callback: Callback): () => void {
    callback(this.proxy.currentRoute);
    const key = UUID();
    this.callbacks[key] = callback;

    return () => {
      delete this.callbacks[key];
    };
  }
}
