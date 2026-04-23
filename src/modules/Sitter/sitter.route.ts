import express from 'express';
import auth, { UserRole } from '../../middlewares/auth';
import { SitterController } from './sitter.controller';

const router = express.Router();
router.get("/all-sitter", auth(UserRole.ADMIN, UserRole.OWNER), SitterController.getAllSitter);
router.get("/sitter-profile",auth(UserRole.SITTER), SitterController.getSingleSitter);
router.post("/", auth(UserRole.SITTER), SitterController.createSitter);

export const SitterRoute = router;
