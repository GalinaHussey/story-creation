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
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
};

type TemplateContextProviderProps = {
  children: ReactNode;
};

const TemplateContext = createContext<TemplateContextValue | undefined>(
  undefined
);

function TemplateProvider({ children }: TemplateContextProviderProps) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <TemplateContext.Provider value={{ isShowing, setIsShowing }}>
      {children}
    </TemplateContext.Provider>
  );
}

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
