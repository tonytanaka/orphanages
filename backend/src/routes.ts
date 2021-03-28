import { Router } from 'express';
import multer = require('multer');

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController'


const routes = Router();
const upload = multer(uploadConfig);

// METHODS: index, show, create, update, delete 
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
// routes.post('/orphanages', OrphanagesController.create);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;