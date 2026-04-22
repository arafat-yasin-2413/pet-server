import express from 'express';
import { PetController } from './pet.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();
router.post("/", auth(UserRole.OWNER), PetController.createPet);

export const PetRoutes = router;
