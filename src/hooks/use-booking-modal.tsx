import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface BookingModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | undefined>(undefined);

export const BookingModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      isOpen,
      openModal,
      closeModal,
    }),
    [isOpen, openModal, closeModal],
  );

  return <BookingModalContext.Provider value={value}>{children}</BookingModalContext.Provider>;
};

/* eslint-disable-next-line react-refresh/only-export-components */
export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
};

