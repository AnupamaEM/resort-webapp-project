export type BookingStatus = "pending" | "confirmed" | "cancelled";

export interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  roomType: "Standard" | "Deluxe" | "Suite" | "Villa";
}

export interface Booking extends BookingPayload {
  _id: string;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;
}

