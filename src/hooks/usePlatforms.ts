import useFetchData from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () => useFetchData<Platform>("/platforms/lists/parents");

export default usePlatforms;
