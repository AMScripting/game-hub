/**
 * Finds a random number within the given min/max range, inclusively.
 * @throws when min or max are not number, or when max is less than or equal to min
 *
 * @param min
 * @param max
 * @returns
 */
export function randomInt(min: number, max: number): number {
  if (typeof min !== 'number' || typeof max !== 'number')
    throw new Error('Min and Max values must both be numbers');
  if (max <= min) throw new Error('Max must be a larger value than Min');

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
