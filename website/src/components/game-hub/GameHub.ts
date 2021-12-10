import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../game-card/GameCard';

const logo = new URL('/assets/open-wc-logo.svg', import.meta.url).href;

@customElement('game-hub')
export class GameHub extends LitElement {
  @property({ type: String })
  title = 'Game Hub';

  @property({ type: Array })
  games = [
    {
      title: 'Space',
      description: 'lorem ipsum',
      image: {
        href: logo,
        alt: '',
      },
      href: '',
    },
  ];

  static styles = css`
    :host {
      position: relative;
      background-color: var(--surface1);
      padding: var(--size-9) var(--size-3) var(--size-10) var(--size-3);
      /** sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 */
    }

    h1 {
      font-family: var(--font-sans);
      color: var(--text1);
      /** text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl */
    }

    .container {
      position: relative;
      max-width: 80rem; /** max-w-7xl */
      margin: 0 auto;
      text-align: center;
    }

    .header {
    }

    .description {
      margin: 0 auto;
      margin-top: var(--size-2);
      max-width: 42rem; /** max-w-2xl */
      color: var(--text-2);
      /** sm:mt-4 */
    }

    .card-body {
      margin: 0 auto;
      margin-top: var(--size-8);
      display: grid;
      gap: var(--size-4);
      max-width: var(--size-15);
      /* lg:grid-cols-3 lg:max-w-none */
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <main class="container">
        <h1 class="header">${this.title}</h1>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
        <div class="card-body">
          ${this.games.map(
            game => html` <game-card .game=${game}></game-card> `
          )}
        </div>
      </main>

      <p class="app-footer">
        Made with love by
        <a target="_blank" rel="noopener noreferrer" href="#/">AMScripting</a>.
      </p>
    `;
  }
}
