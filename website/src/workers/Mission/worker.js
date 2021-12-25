// eslint-disable-next-line no-restricted-globals
const ctx = self;

function generateMap(mission) {
  return {
    ...mission,
    map: [],
  };
}

ctx.addEventListener('message', ({ data }) => {
  const [task, ...parameters] = data;
  let response;

  switch (task) {
    case 'generate-map':
      response = generateMap(parameters[0]);
      break;
    default:
  }
  ctx.postMessage([task, response]);
});
