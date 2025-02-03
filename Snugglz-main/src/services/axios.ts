import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.mememall.tv:8443/render";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
  accept: "*/*",
};

export function fetchData(params: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    axios
      .request(params)
      .then((response: AxiosResponse) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  });
}
