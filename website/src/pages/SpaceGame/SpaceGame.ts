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

  @state() private screen: typeof GameScreen[keyof typeof GameScreen];

  render() {
    const { screen } = this;

    switch (screen) {
      case GameScreen.MainMenu:
        return html`main menu`;
      case GameScreen.Splash:
      default:
        return html`<splash-screen
          logo=${SplashLogo}
          title=${title}
        ></splash-screen>`;
    }
  }
}
