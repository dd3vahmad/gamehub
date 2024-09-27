import { AxiosRequestConfig } from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { GameQuery } from "../App";

const useFetchInfiniteData = <T>(
  endpoint: string,
  requestConfig: AxiosRequestConfig,
  staleTime: number = 10 * 1000,
  deps: GameQuery
) => {
  const apiClient = new APIClient<T>(endpoint);

  return useInfiniteQuery<FetchResponse<T>, Error>({
    queryKey: [endpoint, deps],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        ...requestConfig,
        params: { ...requestConfig.params, page: pageParam },
      }),
    staleTime,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useFetchInfiniteData;
