import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

//  this.app.use('/fotos/', fotoRoutes);
router.post('/', loginRequired, fotoController.store);

export default router;
