import "dotenv/config";

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

import bookingRoutes from "./routes/bookingRoutes.js";

const PORT = Number(process.env.PORT) || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const ALLOWED_ORIGIN = process.env.FRONTEND_ORIGIN ?? "*";

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI. Please set it in the environment variables.");
  process.exit(1);
}

const app = express();

app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/bookings", bookingRoutes);

const start = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`API server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

void start();

