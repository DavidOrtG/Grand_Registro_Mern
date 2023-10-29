import axios from './axios'

export const getHistorias = () => axios.get('/historias');

export const getHistoria= (id) => axios.get(`/historias/${id}`);

export const createHistoria = (task) => axios.post('/historias', task);

export const updateHistoria = (id, task) => axios.put(`/historias/${id}`, task);

export const deleteHistoria = (id) => axios.delete(`/historias/${id}`);