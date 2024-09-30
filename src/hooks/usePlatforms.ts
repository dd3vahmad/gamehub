import ms from "ms";
import platforms from "../data/platforms";
import useFetchData from "./useData";
import Platform from "../entities/Platform";

const usePlatforms = () =>
  useFetchData<Platform>("/platforms/lists/parents", {}, ms("24h"), platforms);

export default usePlatforms;
