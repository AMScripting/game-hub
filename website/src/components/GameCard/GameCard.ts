import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { GameSummary } from './model';
import { launchGame } from './logic';

@customElement('game-card')
export class GameCard extends LitElement {
  @property() game: GameSummary;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      border-radius: var(--size-2);
      box-shadow: var(--shadow-2);
      overflow: hidden;
      background-color: var(--surface2);
    }

    .image-container {
      flex-shrink: 0;
    }

    img {
      width: 100%;
      object-fit: cover;
      height: var(--size-12);
    }

    .card-body {
      flex: 1;
      background-color: var(--surface2);
      /* display: flex;
      flex-direction: column;
      justify-content: space-between; */
      padding: var(--size-5);
    }
    .game-title {
      font-weight: var(--font-weight-6);
      color: var(--text1);
      font-size: var(--font-size-3);
      line-height: var(--font-lineheight-4);
    }
    .game-description {
      margin-top: var(--size-2);
      color: var(--text2);
      font-size: var(--font-size-1);
      line-height: var(--font-lineheight-3);
    }
  `;

  render() {
    const { description, logo, route, title } = this.game;

    return html`
      <a
        href="${route.path}"
        class="block mt-2"
        @click=${(e: Event) => launchGame(route, e)}
      >
        <div class="image-container">
          <img src=${logo} alt=${title} />
        </div>
        <div class="card-body">
          <p class="game-title">${title}</p>
          <p class="game-description">${description}</p>
        </div>
      </a>
    `;
  }
}
