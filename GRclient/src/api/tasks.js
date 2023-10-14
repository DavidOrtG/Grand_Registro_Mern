import axios from './axios';

export const getTasksRequest = () => axios.get("/historias");

export const getTaskRequest = (id) => axios.get(`/historias/${id}`);

export const createTaskRequest = (task) => axios.post("/historias", task);

export const updateTaskRequest = (task) => axios.put(`/historias/${task._id}`, task);

export const deleteTaskRequest = (id) => axios.delete(`/historias/${id}`);