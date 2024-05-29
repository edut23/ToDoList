import axios from "axios";

import { responseInterceptor, errorInterceptor } from "./interceptor"

const Api = axios.create({
    baseURL: "https://todo-mosaicq-api.vercel.app/api"
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);

export {Api}