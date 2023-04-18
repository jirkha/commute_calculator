import React, { createContext, useState } from "react";

export const CounterContext = createContext({});

export const CounterContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [formData, setFormData] = useState({
    current_residence: "",
    planned_residence: "",
    workplace: ""
  });

  return (
    <CounterContext.Provider value={{ formData, setFormData }}>
      {children}
    </CounterContext.Provider>
  );
};
