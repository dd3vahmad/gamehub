import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "57035cca89754822a0c5ceb322bf714c",
  },
});

export { CanceledError };
