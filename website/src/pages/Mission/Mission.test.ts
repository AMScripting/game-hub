import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { summary } from '../../games/SpaceGame';
import { MissionPage } from './Mission';
import '.';

describe('MissionPage', () => {
  let element: MissionPage;
  beforeEach(async () => {
    element = await fixture(
      html` <mission-page .summary=${summary}></mission-page> `,
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
