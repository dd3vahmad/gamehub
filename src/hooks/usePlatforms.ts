import useFetchData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useFetchData<Platform>("/platforms/lists/parents");

export default usePlatforms;
