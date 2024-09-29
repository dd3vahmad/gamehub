import ms from "ms";
import useFetchInfiniteData from "./useInfiniteData";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../stores/gameStore";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useFetchInfiniteData<Game>(
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
};

export default useGames;
