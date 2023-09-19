import {Router} from 'express';
import {authRequired} from '../middlewares/validateToken.js';
import {
        getEspecialidades,
        getEspecialidad,
        createEspecialidad,
        updateEspecialidad,
        deleteEspecialidad,

} from '../controllers/especialidades.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createEspecialidadSchema } from '../schemas/especialidad.schema.js';

const router = Router();

router.get('/especialidades', authRequired, getEspecialidades);
router.get('/especialidades/:id', authRequired, getEspecialidad);
router.post('/especialidades', authRequired, validateSchema(createEspecialidadSchema), createEspecialidad);
router.delete('/especialidades/:id', authRequired, deleteEspecialidad);
router.put('/especialidades/:id', authRequired, updateEspecialidad);

export default router;