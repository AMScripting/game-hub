import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { summary } from '../../games/SpaceGame';
import { GamePage } from './Game';
import '.';

describe('GamePage', () => {
  let element: GamePage;
  beforeEach(async () => {
    element = await fixture(
      html` <game-page .summary=${summary}></game-page> `,
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
