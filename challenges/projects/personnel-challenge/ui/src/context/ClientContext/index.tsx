'use client'; // Required for client-side hooks

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ReferenceContextType = {
  referenceValue: string | null;
  setReferenceValue: (value: string | null) => void;
};

const ReferenceContext = createContext<ReferenceContextType | undefined>(undefined);

export const ReferenceProvider = ({ children }: { children: ReactNode }) => {
  const [referenceValue, setReferenceValue] = useState<string | null>(null);

  return (
    <ReferenceContext.Provider value={{ referenceValue, setReferenceValue }}>
      {children}
    </ReferenceContext.Provider>
  );
};

export const useReferenceContext = () => {
  const context = useContext(ReferenceContext);
  if (!context) {
    throw new Error('useReferenceContext must be used within a ReferenceProvider');
  }
  return context;
};
