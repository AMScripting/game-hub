import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { summary } from '../../games/SpaceGame';
import { SettingsPage } from './Settings';
import '.';

describe('SettingsPage', () => {
  let element: SettingsPage;
  beforeEach(async () => {
    element = await fixture(
      html` <settings-page .summary=${summary}></settings-page> `,
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
