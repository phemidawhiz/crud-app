import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { userKey } from "../utils/data";
import { getAccessToken } from "../utils/helpers";
import { baseUrl } from "./config";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

// https://dev.to/charlintosh/setting-up-axios-interceptors-react-js-typescript-12k5
// This adds a token before all the requests.
// https://stackoverflow.com/questions/57251719/acquiring-a-new-token-with-axios-interceptors
const onRequest = (request: AxiosRequestConfig): AxiosRequestConfig => {
  const user = getAccessToken(userKey);
  request.headers!.Authorization = `Bearer ${user.accessToken}` || "";
  return request;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError) => {
  const user: any = getAccessToken(userKey);

  const statusCode = error.response!.status;
  const originalRequest: any = error.config;
  if (statusCode === 403 && user) {
    // const { data }: any = await getAccessToken();

    // const newData = { ...user, access: data.access };

    // localStorage.setItem("user", JSON.stringify(newData));

    return axiosInstance(originalRequest);
  }
  return Promise.reject(error);
};

// https://axios-http.com/docs/interceptors
axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
