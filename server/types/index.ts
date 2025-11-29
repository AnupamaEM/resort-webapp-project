export type BookingStatus = "pending" | "confirmed" | "cancelled";

export interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfGuests: number;
  roomType: string;
  status?: BookingStatus;
}

