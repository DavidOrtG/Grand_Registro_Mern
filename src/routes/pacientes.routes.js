import {Router} from 'express';
import {authRequired} from '../middlewares/validateToken.js';
import {
        getPacientes,
        getPaciente,
        createPaciente,
        updatePaciente,
        deletePaciente,

} from '../controllers/pacientes.controller.js';
import { createPacienteSchema } from '../schemas/paciente.schema.js';
import { validateSchema } from '../middlewares/validator.middleware.js';

const router = Router();

router.get('/pacientes', authRequired, getPacientes);
router.get('/pacientes/:id', authRequired, getPaciente);
router.post('/pacientes', authRequired, validateSchema(createPacienteSchema),createPaciente);
router.delete('/pacientes/:id', authRequired, deletePaciente);
router.put('/pacientes/:id', authRequired, updatePaciente);

export default router;