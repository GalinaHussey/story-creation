"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type TemplateContextValue = {
  isShowing: boolean; // State to track if the modal is shown
  setIsShowing: Dispatch<SetStateAction<boolean>>; // Function to toggle modal visibility
};

type TemplateContextProviderProps = {
  children: ReactNode; // Child components
};

const TemplateContext = createContext<TemplateContextValue | undefined>(
  undefined
);

// Context provider for managing modal visibility state
function TemplateProvider({ children }: TemplateContextProviderProps) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <TemplateContext.Provider value={{ isShowing, setIsShowing }}>
      {children}
    </TemplateContext.Provider>
  );
}

// Hook to use the context in components
function useTemplateContext() {
  const context = useContext(TemplateContext);
  if (context === undefined) {
    throw new Error(
      "useTemplateContext must be used within a TemplateProvider"
    );
  }
  return context;
}

export { TemplateProvider, useTemplateContext };
