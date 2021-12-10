import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('game-card')
export class GameCard extends LitElement {
  @property()
  game = {} as any;

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
    return html`
      <div class="image-container">
        <img src="${this.game.image.href}" alt="${this.game.image.alt}" />
      </div>
      <div class="card-body">
        <a href="${this.game.href}" class="block mt-2">
          <p class="game-title">${this.game.title}</p>
          <p class="game-description">${this.game.description}</p>
        </a>
      </div>
    `;
  }
}
