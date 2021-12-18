/**
 * Creates a promise that lasts for a given duration, defaulting to 300ms
 * @param timeout
 */
export async function wait(duration = 300) {
  await new Promise((res) => {
    setTimeout(res, duration);
  });
}
