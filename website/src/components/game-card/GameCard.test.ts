import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { GameCard } from './GameCard';
import '.';

describe('GameCard', () => {
  let element: GameCard;
  beforeEach(async () => {
    element = await fixture(html`
      <game-card .game=${{ description: 'desc', title: 'title' }}></game-card>
    `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
