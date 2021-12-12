import { Route } from '../../services/Router/models';

export interface GameSummary {
  title: string;
  description: string;
  logo: string;
  route: Route;
  splashImage: string;
}
export default GameSummary;
