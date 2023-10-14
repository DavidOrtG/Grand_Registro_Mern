import axios from './axios';

export const getHistorias = () => axios.get("/historias");

export const getHistoria = (id) => axios.get(`/historias/${id}`);

export const createHistoria = (task) => axios.post("/historias", task);

export const updateHistoria = (historia) => axios.put(`/historias/${historia._id}`, historia);

export const deleteHistoria = (id) => axios.delete(`/historias/${id}`);