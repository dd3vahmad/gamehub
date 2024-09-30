import { Screenshot } from "../entities/Screenshot";
import useFetchData from "./useData";
import ms from "ms";

const useGameScreenshots = (id: number) => {
  return useFetchData<Screenshot>(`/games/${id}/screenshots`, {}, ms("24h"));
};

export default useGameScreenshots;
