"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SwipeContextType = {
  isSwiping: boolean;
  setIsSwiping: (value: boolean) => void;
};

const SwipeContext = createContext<SwipeContextType | null>(null);

export function SwipeProvider({ children }: { children: ReactNode }) {
  const [isSwiping, setIsSwiping] = useState(false);
  return (
    <SwipeContext.Provider value={{ isSwiping, setIsSwiping }}>
      {children}
    </SwipeContext.Provider>
  );
}

export function useSwipe() {
  const ctx = useContext(SwipeContext);
  if (!ctx) throw new Error("useSwipe must be used within SwipeProvider");
  return ctx;
}