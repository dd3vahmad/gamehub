import ms from "ms";
import genres from "../data/genres.ts";
import useFetchData from "./useData.ts";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => useFetchData<Genre>("/genres", {}, ms("24h"), genres);

export default useGenres;
