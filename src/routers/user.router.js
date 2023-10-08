import { AddUser } from '../controller/user.controller';
import express from 'express';

import { Authenticate } from '../helpers/token.helper';

const router = express.Router();
router.use(express.json());

// Agrega el registro de un nuevo usuario
router.post('/user/add', AddUser);

export default router;