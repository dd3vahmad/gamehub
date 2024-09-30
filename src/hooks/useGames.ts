import ms from "ms";
import useFetchInfiniteData from "./useInfiniteData";
import useGameQueryStore from "../stores/gameStore";
import { Game } from "../entities/Game";

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
