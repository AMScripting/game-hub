import Router from '../../services/Router';

export function hrefInterceptor(event: Event) {
  const path = (
    event
      .composedPath()
      ?.find((el) => (el as HTMLElement).hasAttribute?.('href')) as HTMLElement
  )?.getAttribute?.('href');

  if (!path) return;

  event.preventDefault();
  Router.changeRoute(path);
}
