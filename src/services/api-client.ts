import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "57035cca89754822a0c5ceb322bf714c",
  },
});

const controller = new AbortController();

class APIClient<T> {
  endpoint: string;
  requestConfig: AxiosRequestConfig;

  constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
    this.endpoint = endpoint;
    this.requestConfig = requestConfig || {};
  }

  getAll = async () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, {
        signal: controller.signal,
        ...this.requestConfig,
      })
      .then((res) => res.data);
  };
}

export { CanceledError };

export default APIClient;
