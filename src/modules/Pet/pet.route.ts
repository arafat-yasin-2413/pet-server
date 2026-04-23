import express from 'express';
import { PetController } from './pet.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();
router.get("/", PetController.getAllPets);
router.get("/myPets", auth(UserRole.OWNER), PetController.getMyPets);
router.get("/pet-details/:id", PetController.getSinglePet);
router.post("/", auth(UserRole.OWNER), PetController.createPet);

export const PetRoutes = router;
