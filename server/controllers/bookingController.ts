import type { Request, Response } from "express";

import { BookingModel } from "../models/Booking.js";
import type { BookingPayload } from "../types/index.js";

export const createBooking = async (req: Request<unknown, unknown, BookingPayload>, res: Response) => {
  try {
    const booking = await BookingModel.create(req.body);
    return res.status(201).json(booking);
  } catch (error) {
    console.error("Failed to create booking", error);
    return res.status(500).json({ message: "Failed to create booking" });
  }
};

export const getBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await BookingModel.find().sort({ createdAt: -1 });
    return res.status(200).json(bookings);
  } catch (error) {
    console.error("Failed to fetch bookings", error);
    return res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

