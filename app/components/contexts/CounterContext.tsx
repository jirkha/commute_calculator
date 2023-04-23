"use client";
import React, { createContext, useState } from "react";

export type CounterContextType = {
  formData: {
    current_residence: any;
    planned_residence: any;
    workplace: any;
    connections: any;
    // public_current_workplace: any;
    // car_current_workplace: any;
    // public_planned_workplace: any;
    // car_planned_workplace: any;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      current_residence: any;
      planned_residence: any;
      workplace: any;
      connections: any;
      // public_current_workplace: any;
      // car_current_workplace: any;
      // public_planned_workplace: any;
      // car_planned_workplace: any;
    }>
  >;
};

export const CounterContext = createContext<CounterContextType>({
  formData: {
    current_residence: "",
    planned_residence: "",
    workplace: "",
    connections: []
    // public_current_workplace: "",
    // car_current_workplace: "",
    // public_planned_workplace: "",
    // car_planned_workplace: ""
  },
  setFormData: () => {},
});

export const CounterContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [formData, setFormData] = useState({
    current_residence: "",
    planned_residence: "",
    workplace: "",
    connections: []
    // public_current_workplace: "",
    // car_current_workplace: "",
    // public_planned_workplace: "",
    // car_planned_workplace: "",
  });

  return (
    <CounterContext.Provider value={{ formData, setFormData }}>
      {children}
    </CounterContext.Provider>
  );
};
