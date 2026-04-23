import express from 'express';
import auth, { UserRole } from '../../middlewares/auth';
import { SitterController } from './sitter.controller';

const router = express.Router();
// router.get("/", PetController.getAllPets);
// router.get("/myPets", auth(UserRole.OWNER), PetController.getMyPets);
// router.get("/pet-details/:id", PetController.getSinglePet);
router.post("/", auth(UserRole.SITTER), SitterController.createSitter);

export const SitterRoute = router;
