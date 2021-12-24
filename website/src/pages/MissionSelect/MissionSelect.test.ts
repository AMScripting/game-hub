import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { summary } from '../../games/SpaceGame';
import { MissionSelectPage } from './MissionSelect';
import '.';

describe('MissionSelectPage', () => {
  let element: MissionSelectPage;
  beforeEach(async () => {
    element = await fixture(
      html` <mission-select-page .summary=${summary}></mission-select-page> `,
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
