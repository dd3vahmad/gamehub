import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

const controller = new AbortController();

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, {
        signal: controller.signal,
        ...config,
      })
      .then((res) => res.data);
  };

  get = async () => {
    return axiosInstance
      .get<T>(this.endpoint, {
        signal: controller.signal,
      })
      .then((res) => res.data);
  };
}

export { CanceledError };

export default APIClient;
