import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { GameHub } from './GameHub';
import '.';

describe('GameHub', () => {
  let element: GameHub;
  beforeEach(async () => {
    element = await fixture(html` <game-hub></game-hub> `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
