import useFetchData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => useFetchData<Genre>("/genres");

export default useGenres;
