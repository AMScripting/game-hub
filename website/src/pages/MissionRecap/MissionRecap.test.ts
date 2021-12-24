import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { summary } from '../../games/SpaceGame';
import { MissionRecapPage } from './MissionRecap';
import '.';

describe('MissionRecapPage', () => {
  let element: MissionRecapPage;
  beforeEach(async () => {
    element = await fixture(
      html` <mission-recap-page .summary=${summary}></mission-recap-page> `,
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
