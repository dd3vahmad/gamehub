import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import APIClient, { FetchResponse } from "../services/api-client";

const useFetchData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  staleTime: number = 10 * 1000,
  initialData: T[] = []
) => {
  const apiClient = new APIClient<T>(endpoint);

  if (!initialData || !initialData.length)
    return useQuery<FetchResponse<T>, Error>({
      queryKey: [endpoint, requestConfig],
      queryFn: apiClient.getAll,
      staleTime,
    });

  return useQuery<FetchResponse<T>, Error>({
    queryKey: [endpoint, requestConfig],
    queryFn: apiClient.getAll,
    staleTime,
    initialData: { count: initialData.length, results: initialData },
  });
};

export default useFetchData;
