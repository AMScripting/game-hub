import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { AppShell } from './AppShell';
import '.';

describe('AppShell', () => {
  let element: AppShell;
  beforeEach(async () => {
    element = await fixture(html` <app-shell></app-shell> `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
