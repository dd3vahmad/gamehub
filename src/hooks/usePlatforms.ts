import ms from "ms";
import platforms from "../data/platforms";
import useFetchData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useFetchData<Platform>("/platforms/lists/parents", {}, ms("24h"), platforms);

export default usePlatforms;
