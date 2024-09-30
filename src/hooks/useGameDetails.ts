import ms from "ms";
import useFetchSingleData from "./useSingleData.ts";
import { Game } from "../entities/Game.ts";

const useGameDetails = (slug: string) =>
  useFetchSingleData<Game>(`/games/${slug}`, {}, ms("24h"));

export default useGameDetails;
