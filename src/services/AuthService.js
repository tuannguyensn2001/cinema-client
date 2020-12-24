import axios from 'axios';
import {API} from "../enum/api";

export const attempt = async (email,password) => {
    return axios.post(API.login, {
        email,
        password,
    });
}

export const me = async () => {
    return axios.post(API.me);
}