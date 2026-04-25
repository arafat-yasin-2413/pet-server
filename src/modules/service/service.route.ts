import express from 'express';
import auth, { UserRole } from '../../middlewares/auth';
import { serviceController } from './service.controller';

const router = express.Router();

router.get("/my-services", auth(UserRole.SITTER), serviceController.getMyServices);
router.get("/all", serviceController.getAllServices);
router.post("/", auth(UserRole.SITTER),serviceController.createService);

export const serviceRoute = router;
