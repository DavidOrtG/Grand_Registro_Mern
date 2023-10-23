import axios from './axios'

export const getPacientes = () => axios.get('/pacientes');

export const getPaciente = (id) => axios.get(`/pacientes/${id}`);

export const createPaciente = (task) => axios.post('/pacientes', task);

export const updatePaciente = (task) => axios.put(`/pacientes/${task._id}`, task);

export const deletePaciente = (id) => axios.delete(`/pacientes/${id}`);