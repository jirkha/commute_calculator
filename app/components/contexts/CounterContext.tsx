"use client";
import React, { createContext, useState } from "react";

interface Points {
  current_residence: "" | google.maps.places.PlaceResult;
  planned_residence: "" | google.maps.places.PlaceResult;
  workplace: "" | google.maps.places.PlaceResult;
}

interface Point {
  [key: string]: string | object;
}

interface Center {
  lat: number;
  lng: number;
}

interface FormData {
  points: Points;
  other_points: Point;
  actual_point: Center | google.maps.LatLng | undefined;
  connections: any;
}

interface CounterContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const defaultFormData: FormData = {
  points: {
    current_residence: "",
    planned_residence: "",
    workplace: "",
  },
  other_points: {},
  actual_point: {
    lat: 50.0879,
    lng: 14.4205,
  },
  connections: "",
};

export const CounterContext = createContext<CounterContextType>({
  formData: defaultFormData,
  setFormData: () => {},
});

export const CounterContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  return (
    <CounterContext.Provider value={{ formData, setFormData }}>
      {children}
    </CounterContext.Provider>
  );
};
