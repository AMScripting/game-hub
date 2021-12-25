import { expect } from '@open-wc/testing';

import { randomInt } from '.';

describe('utils/number', () => {
  describe('randomInt', () => {
    it('should throw when missing properties', () => {
      expect((randomInt as any).bind(null, null, 2)).to.throw();
      expect((randomInt as any).bind(null, 1, null)).to.throw();
      expect((randomInt as any).bind(null, null, null)).to.throw();
    });
    it('should throw when max is less than min', () => {
      expect((randomInt as any).bind(null, 3, 1)).to.throw();
    });
    it('should throw when min or max are not numbers', () => {
      expect((randomInt as any).bind(null, '1', 3)).to.throw();
      expect((randomInt as any).bind(null, 1, '3')).to.throw();
    });
  });
});
