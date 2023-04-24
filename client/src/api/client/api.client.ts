import axios from "axios"
import queryString from "query-string"

const protocol = process.env.NODE_ENV === "production" ? "https://" : "http://";
const domain = process.env.NODE_ENV === "production" ? "example.com" : "localhost:5000";
const versionPath = "api/v1"

const baseURL: string = `${protocol}${domain}/${versionPath}`;

const apiClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: params => queryString.stringify(params)
    }
})

apiClient.interceptors.request.use(async config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    config.headers['Content-Type'] = "application/json";
        return config;
})

apiClient.interceptors.response.use((response) => {
    return response;

}, (err) => {
    console.log(err);
    throw err.response.data;
});

export default apiClient;