import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import APIClient from "../services/api-client";

const useFetchSingleData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  staleTime: number = 10 * 1000,
) => {
  const apiClient = new APIClient<T>(endpoint);

  return useQuery<T, Error>({
    queryKey: [endpoint, requestConfig],
    queryFn: apiClient.get,
    staleTime,
  });
};

export default useFetchSingleData;
