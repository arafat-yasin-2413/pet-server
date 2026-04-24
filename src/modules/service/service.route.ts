import express from 'express';
import auth, { UserRole } from '../../middlewares/auth';
import { serviceController } from './service.controller';

const router = express.Router();

router.post("/", auth(UserRole.SITTER),serviceController.createService);

export const serviceRoute = router;
