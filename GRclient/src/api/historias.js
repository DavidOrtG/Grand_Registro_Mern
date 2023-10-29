import axios from './axios'

export const getHistorias = () => axios.get('/historias');

export const getHistoria = (id) => axios.get(`/historias/${id}`);

export const createHistoria = (hist) => axios.post('/historias', hist);

export const updateHistoria = (id, hist) => axios.put(`/historias/${id}`, hist);

export const deleteHistoria = (id) => axios.delete(`/historias/${id}`);