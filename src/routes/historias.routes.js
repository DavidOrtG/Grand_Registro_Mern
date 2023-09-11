import {Router} from 'express';
import {authRequired} from '../middlewares/validateToken.js';
import {
        getHistorias,
        getHistoria,
        createHistoria,
        updateHistoria,
        deleteHistoria,

} from '../controllers/historias.controller.js';

const router = Router();

router.get('/historias', authRequired, getHistorias);
router.get('/historias/:id', authRequired, getHistoria);
router.post('/historias', authRequired, createHistoria);
router.delete('/historias/:id', authRequired, deleteHistoria);
router.put('/historias/:id', authRequired, updateHistoria);

export default router;