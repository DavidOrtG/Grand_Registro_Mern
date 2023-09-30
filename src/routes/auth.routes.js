import { Router } from 'express';
import {
    login,
    register,
    logout,
    profile,
} from '../controllers/auth.controller.js';
import {authRequired} from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema} from '../schemas/auth.schema.js';

const router = Router();

/**Se comentan las rutas con validator temporalmente */

//router.post('/register', validateSchema(registerSchema),register);
router.post('/register',register);
//router.post('/login', validateSchema(loginSchema), login);
router.post('/login', login);

router.post('/logout', logout);
router.get("/profile", authRequired, profile);

export default router;