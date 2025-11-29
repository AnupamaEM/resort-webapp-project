import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const bookingSchema = z
  .object({
    name: z.string().min(2).max(80),
    email: z.string().email(),
    phone: z.string().min(6).max(20),
    checkInDate: z.coerce.date(),
    checkOutDate: z.coerce.date(),
    numberOfGuests: z.coerce.number().int().min(1).max(20),
    roomType: z.enum(["Standard", "Deluxe", "Suite", "Villa"]),
    status: z.enum(["pending", "confirmed", "cancelled"]).optional(),
  })
  .refine((data) => data.checkOutDate > data.checkInDate, {
    message: "Check-out date must be after check-in date",
    path: ["checkOutDate"],
  });

export const validateRequest =
  <T>(schema: z.ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid request payload",
        errors: parsed.error.flatten(),
      });
    }

    req.body = parsed.data;
    return next();
  };

