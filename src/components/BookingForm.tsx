import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createBooking } from "@/services/api";
import type { BookingPayload } from "@/types/booking";
import { useToast } from "@/hooks/use-toast";

const bookingFormSchema = z
  .object({
    name: z.string().min(2, "Please enter your full name"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(6, "Please enter a valid phone number"),
    checkInDate: z.string().min(1, "Select your check-in date"),
    checkOutDate: z.string().min(1, "Select your check-out date"),
    numberOfGuests: z.coerce.number().int().min(1).max(20),
    roomType: z.enum(["Standard", "Deluxe", "Suite", "Villa"]),
  })
  .refine((data) => new Date(data.checkOutDate) > new Date(data.checkInDate), {
    path: ["checkOutDate"],
    message: "Check-out must be after check-in",
  });

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const roomTypes: BookingPayload["roomType"][] = ["Standard", "Deluxe", "Suite", "Villa"];

interface BookingFormProps {
  onSuccess?: () => void;
}

const BookingForm = ({ onSuccess }: BookingFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkInDate: "",
      checkOutDate: "",
      numberOfGuests: 2,
      roomType: "Deluxe",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });

  const onSubmit = async (values: BookingFormValues) => {
    try {
      await mutateAsync(values);
      toast({
        title: "Reservation received",
        description: "Our concierge will reach out to confirm the details shortly.",
      });
      reset();
      onSuccess?.();
    } catch (error) {
      console.error(error);
      toast({
        title: "Unable to submit booking",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-cream/80">Full Name</span>
          <input
            type="text"
            {...register("name")}
            className="w-full rounded-lg border border-cream/20 bg-charcoal/40 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            placeholder="Adrian Laurent"
          />
          {errors.name && <p className="text-sm text-red-300">{errors.name.message}</p>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-cream/80">Email</span>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-lg border border-cream/20 bg-charcoal/40 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            placeholder="guest@serenity.com"
          />
          {errors.email && <p className="text-sm text-red-300">{errors.email.message}</p>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-cream/80">Phone</span>
          <input
            type="tel"
            {...register("phone")}
            className="w-full rounded-lg border border-cream/20 bg-charcoal/40 px-4 py-3 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            placeholder="+1 555 123 9876"
          />
          {errors.phone && <p className="text-sm text-red-300">{errors.phone.message}</p>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-cream/80">Room Type</span>
          <select
            {...register("roomType")}
            className="w-full rounded-lg border border-cream/20 bg-charcoal/40 px-4 py-3 text-cream focus:border-gold focus:outline-none"
          >
            {roomTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.roomType && <p className="text-sm text-red-300">{errors.roomType.message}</p>}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-cream/80">Check-In</span>
          <input
            type="date"
            {...register("checkInDate")}
            className="w-full rounded-lg border border-cream/20 bg-charcoal/40 px-4 py-3 text-cream focus:border-gold focus:outline-none"
          />
          {errors.checkInDate && <p className="text-sm text-red-300">{errors.checkInDate.message}</p>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-cream/80">Check-Out</span>
          <input
            type="date"
            {...register("checkOutDate")}
            className="w-full rounded-lg border border-cream/20 bg-charcoal/40 px-4 py-3 text-cream focus:border-gold focus:outline-none"
          />
          {errors.checkOutDate && <p className="text-sm text-red-300">{errors.checkOutDate.message}</p>}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-cream/80">Guests</span>
          <input
            type="number"
            min={1}
            max={20}
            {...register("numberOfGuests", { valueAsNumber: true })}
            className="w-full rounded-lg border border-cream/20 bg-charcoal/40 px-4 py-3 text-cream focus:border-gold focus:outline-none"
          />
          {errors.numberOfGuests && <p className="text-sm text-red-300">{errors.numberOfGuests.message}</p>}
        </label>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-gold px-6 py-3 font-semibold uppercase tracking-[0.2em] text-charcoal transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Securing your stay..." : "Confirm Reservation"}
      </button>
    </form>
  );
};

export default BookingForm;

