import platforms from "../data/platforms";
import useFetchData from "./useData";

const usePlatforms = () =>
  useFetchData("/platforms/lists/parents", {}, 24 * 60 * 60 * 1000, platforms);

export default usePlatforms;
