import ms from "ms";
import { Game } from "./useGames.ts";
import useFetchSingleData from "./useSingleData.ts";

export interface GameDetails extends Game {
  description: string;
  description_raw: string;
}

const useGameDetails = (slug: string) =>
  useFetchSingleData<GameDetails>(`/games/${slug}`, {}, ms("24h"));

export default useGameDetails;
