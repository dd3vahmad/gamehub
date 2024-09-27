import ms from "ms";
import { GameQuery } from "../App";
import useFetchInfiniteData from "./useInfiniteData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useFetchInfiniteData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    ms("24h"),
    gameQuery
  );

export default useGames;
