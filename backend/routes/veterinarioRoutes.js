import express from 'express';
const router = express.Router();
import { registrar, perfil, confirmar, autenticar} from '../controllers/veterinariosController.js';

router.post("/", registrar )
router.get("/perfil", perfil );
router.get("/confirmar/:token", confirmar);
router.post('/login', autenticar)

export default router;