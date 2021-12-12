function part(length = 4) {
  return String(Math.floor(Math.random() * 10000)).padStart(length, '0');
}

/**
 * Creates a UUID using random numbers, defaults to 4 segments each with a length of 4 numbers which are then combined
 * into a single string using the - character.
 * @param [count = 4]
 * @param [partLength = 4]
 * @param [separator = '-']
 * @returns
 */
export function UUID(count = 4, partLength = 4, separator = '-'): string {
  return Array(count)
    .fill(null)
    .map(() => part(partLength))
    .join(separator);
}

export default UUID;
