// eslint-disable-next-line no-restricted-globals
const ctx = self;

ctx.addEventListener('message', () => {
  ctx.postMessage('test 2');
});
