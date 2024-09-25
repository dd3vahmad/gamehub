import useFetchData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
  useFetchData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
