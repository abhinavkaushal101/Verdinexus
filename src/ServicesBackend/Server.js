import axios from "axios";
const BaseURL = process.env.REACT_BASE_URL

export const myAxios = axios.create({
    baseURL:BaseURL,
});
