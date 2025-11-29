import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import BookingForm from "@/components/BookingForm";
import { useBookingModal } from "@/hooks/use-booking-modal";

const BookingModal = () => {
  const { isOpen, closeModal } = useBookingModal();

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => (!open ? closeModal() : undefined)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-cream/10 bg-charcoal/95 p-8 shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <Dialog.Title className="font-serif text-3xl text-cream">Reserve Your Escape</Dialog.Title>
              <Dialog.Description className="mt-2 text-sm uppercase tracking-[0.3em] text-cream/60">
                Serenity Haven · Private Concierge
              </Dialog.Description>
            </div>
            <button
              onClick={closeModal}
              className="rounded-full border border-cream/30 p-2 text-cream transition hover:border-gold hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <BookingForm onSuccess={closeModal} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BookingModal;

