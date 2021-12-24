import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { HubPage } from './Hub';
import '.';

describe('HubPage', () => {
  let element: HubPage;
  beforeEach(async () => {
    element = await fixture(html` <hub-page></hub-page> `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
