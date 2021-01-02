import axios from 'axios';
import {API} from '../enum/api';

export const createFilm = async (film) => {
    return axios.post(API.createFilm,film);
}

export const getAllFilm = async (page=1) => {
    const url = `${API.getAllFim}?page=${page}`;
    return axios.get(url);
}