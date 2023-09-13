import {Router} from 'express';
import {authRequired} from '../middlewares/validateToken.js';
import {
        getPacientes,
        getPaciente,
        createPaciente,
        updatePaciente,
        deletePaciente,

} from '../controllers/pacientes.controller.js';

const router = Router();

router.get('/pacientes', authRequired, getPacientes);
router.get('/pacientes/:id', authRequired, getPaciente);
router.post('/pacientes', authRequired, createPaciente);
router.delete('/pacientes/:id', authRequired, deletePaciente);
router.put('/pacientes/:id', authRequired, updatePaciente);

export default router;