import type { Booking, BookingPayload } from "@/types/booking";

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5001";

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message = errorBody?.message ?? "Request failed";
    throw new Error(message);
  }
  return response.json() as Promise<T>;
}

export async function createBooking(payload: BookingPayload): Promise<Booking> {
  const response = await fetch(`${BASE_URL}/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse<Booking>(response);
}

export async function getBookings(): Promise<Booking[]> {
  const response = await fetch(`${BASE_URL}/api/bookings`);
  return handleResponse<Booking[]>(response);
}

