import GameSummary from '../../models/GameSummary';

const name = 'SpaceGame';

export const summary: GameSummary = {
  name,
  title: 'Space Game',
  description: 'lorem ipsum',
  logo: new URL('../../../assets/open-wc-logo.svg', import.meta.url).href,
  route: `/${name}/menu`,
  splash: new URL('../../../assets/open-wc-logo.svg', import.meta.url).href,
};
export default summary;
