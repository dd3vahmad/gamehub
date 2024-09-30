import ms from "ms";
import Trailer from "../entities/Trailer";
import useFetchData from "./useData";

const useGameTrailers = (id: number) =>
  useFetchData<Trailer>(`/games/${id}/movies`, {}, ms("24h"));

export default useGameTrailers;
