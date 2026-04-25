import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { bookingController } from "./booking.controller";

const router = express.Router();

router.post("/", auth(UserRole.OWNER), bookingController.createBooking);
router.get("/all", bookingController.getAllBookings);

export const bookingRoute = router;
