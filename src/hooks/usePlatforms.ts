import platforms from "../data/platforms";
import useFetchData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useFetchData<Platform>(
    "/platforms/lists/parents",
    {},
    24 * 60 * 60 * 1000,
    platforms
  );

export default usePlatforms;
