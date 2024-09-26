import genres from "../data/genres.ts";
import useFetchData from "./useData.ts";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () =>
  useFetchData<Genre>("/genres", {}, 24 * 60 * 60 * 1000, genres);

export default useGenres;
