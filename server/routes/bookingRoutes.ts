import { Router } from "express";

import { createBooking, getBookings } from "../controllers/bookingController.js";
import { bookingSchema, validateRequest } from "../middleware/validation.js";

const router = Router();

router.post("/", validateRequest(bookingSchema), createBooking);
router.get("/", getBookings);

export default router;

