import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import { getBookings } from "@/services/api";
import type { Booking } from "@/types/booking";
import { cn } from "@/lib/utils";

const statusStyles: Record<Booking["status"], string> = {
  pending: "bg-amber-100/10 text-amber-200 border border-amber-200/30",
  confirmed: "bg-emerald-100/10 text-emerald-200 border border-emerald-200/30",
  cancelled: "bg-red-100/10 text-red-200 border border-red-200/30",
};

const Admin = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-charcoal via-charcoal to-black text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-gold/80">Admin Console</p>
            <h1 className="font-serif text-4xl text-cream">Reservations Overview</h1>
          </div>
          <Link
            to="/"
            className="rounded-full border border-cream/20 px-6 py-2 text-sm uppercase tracking-[0.3em] text-cream transition hover:border-gold hover:text-gold"
          >
            Back to site
          </Link>
        </div>

        <section className="rounded-3xl border border-cream/10 bg-charcoal/60 p-6 shadow-2xl backdrop-blur-xl">
          {isLoading && <p className="text-center text-cream/80">Loading guest list...</p>}
          {isError && (
            <p className="text-center text-red-300">
              {error instanceof Error ? error.message : "We were unable to retrieve bookings."}
            </p>
          )}
          {!isLoading && !isError && data && data.length === 0 && (
            <p className="text-center text-cream/70">No bookings yet. Invite guests to reserve their stay.</p>
          )}

          {!isLoading && !isError && data && data.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-cream/10 text-cream/60">
                  <tr>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide">Guest</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide">Dates</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide">Guests</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide">Room</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((booking) => (
                    <tr key={booking._id} className="border-b border-cream/5 last:border-none">
                      <td className="px-4 py-4">
                        <p className="font-semibold">{booking.name}</p>
                        <p className="text-xs text-cream/60">{booking.email}</p>
                        <p className="text-xs text-cream/60">{booking.phone}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p>
                          {format(new Date(booking.checkInDate), "MMM d")} – {format(new Date(booking.checkOutDate), "MMM d, yyyy")}
                        </p>
                        <p className="text-xs text-cream/60">
                          Added {format(new Date(booking.createdAt), "MMM d, yyyy · hh:mm a")}
                        </p>
                      </td>
                      <td className="px-4 py-4">{booking.numberOfGuests}</td>
                      <td className="px-4 py-4">{booking.roomType}</td>
                      <td className="px-4 py-4">
                        <span className={cn("rounded-full px-3 py-1 text-xs uppercase tracking-widest", statusStyles[booking.status])}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Admin;

