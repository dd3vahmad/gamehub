import ms from "ms";
import genres from "../data/genres.ts";
import useFetchData from "./useData.ts";
import { Genre } from "../entities/Genre.ts";

const useGenres = () => useFetchData<Genre>("/genres", {}, ms("24h"), genres);

export default useGenres;
