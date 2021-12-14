import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { GameScreen, SplashLogo } from './models';
import styles from './styles';
import route from './routes';

import '../../components/SplashScreen';

const { title } = route;

@customElement('space-game')
export class SpaceGame extends LitElement {
  static readonly styles = [styles];

  @state() private loading: { assets: Promise<unknown>[]; complete: number };
  @state() private screen: typeof GameScreen[keyof typeof GameScreen] =
    GameScreen.Splash;

  constructor() {
    super();

    // TODO: this works the progress bar, tie it into the asset loader
    this.loading = {
      assets: [],
      complete: 0,
    };
    setTimeout(() => {
      this.loading = {
        assets: [Promise.resolve()],
        complete: 1,
      };
    }, 3000);
  }

  render() {
    const {
      loading: { assets, complete },
      screen,
    } = this;

    switch (screen) {
      case GameScreen.MainMenu:
        return html`main menu`;
      case GameScreen.Splash:
      default:
        return html`<splash-screen
          logo=${SplashLogo}
          title=${title}
          .loading=${{ complete, total: assets.length }}
        ></splash-screen>`;
    }
  }
}
