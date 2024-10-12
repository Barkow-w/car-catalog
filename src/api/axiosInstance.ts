import axios from "axios";

export const getCars = axios.create({
    baseURL: 'https://am111.05.testing.place/api/v1'
});