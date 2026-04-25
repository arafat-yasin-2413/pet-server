import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { PetRoutes } from "../modules/pet/pet.route";
import { SitterRoute } from "../modules/sitter/sitter.route";
import { serviceRoute } from "../modules/service/service.route";
import { bookingRoute } from "../modules/Booking/booking.route";

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
    {
        path: "/sitter",
        route: SitterRoute,
    },
    {
        path: "/service",
        route: serviceRoute,
    },
    {
        path: "/booking",
        route: bookingRoute,
    },
];

routerManager.forEach((r) => router.use(r.path, r.route));

export default router;
