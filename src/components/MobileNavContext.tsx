"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const MobileNavContext = createContext<{
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
}>({
  mobileNavOpen: false,
  setMobileNavOpen: () => {},
});

export function MobileNavProvider({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <MobileNavContext.Provider value={{ mobileNavOpen, setMobileNavOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
}

export function useMobileNav() {
  return useContext(MobileNavContext);
}
