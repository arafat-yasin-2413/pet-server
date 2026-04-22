import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { PetRoutes } from "../modules/Pet/pet.route";

const router = Router();

// router.use("/auth", AuthRoutes);
// router.use("/pet", PetRoutes);

const routerManager = [
    {
        path: "/auth",
        route: AuthRoutes,
    },
    {
        path: "/pet",
        route: PetRoutes,
    },
];

routerManager.forEach((r) => router.use(r.path, r.route));

export default router;
