import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { summary } from '../../games/SpaceGame';
import { MainMenuPage } from './MainMenu';
import '.';

describe('MainMenuPage', () => {
  let element: MainMenuPage;
  beforeEach(async () => {
    element = await fixture(
      html` <main-menu-page .summary=${summary}></main-menu-page> `,
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
