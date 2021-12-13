import { GameSummary } from '../../components/GameCard/model';
import SpaceGameRoute from '../SpaceGame/routes';

export const GameList: GameSummary[] = [
  {
    title: SpaceGameRoute.title,
    description: 'lorem ipsum',
    logo: new URL('../../../assets/open-wc-logo.svg', import.meta.url).href,
    route: SpaceGameRoute,
  },
];
