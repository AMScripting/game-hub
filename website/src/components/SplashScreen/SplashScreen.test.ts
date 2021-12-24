import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { summary } from '../../games/SpaceGame';
import { SplashScreen } from './SplashScreen';
import '.';

describe('SplashScreen', () => {
  let element: SplashScreen;
  beforeEach(async () => {
    element = await fixture(
      html` <splash-screen .summary=${summary}></splash-screen> `,
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
