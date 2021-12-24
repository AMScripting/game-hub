import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { missions } from '../../games/SpaceGame';
import { MissionCard } from './MissionCard';
import '.';
import { MissionType } from '../../models/Mission';

describe('MissionCard', () => {
  let element: MissionCard;
  beforeEach(async () => {
    element = await fixture(
      html`
        <mission-card
          .mission=${missions[MissionType.AbandonedShip]}
        ></mission-card>
      `,
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
