import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { summary } from '../../games/SpaceGame';
import { CharacterPage } from './Character';
import '.';

describe('CharacterPage', () => {
  let element: CharacterPage;
  beforeEach(async () => {
    element = await fixture(
      html` <character-page .summary=${summary}></character-page> `,
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
