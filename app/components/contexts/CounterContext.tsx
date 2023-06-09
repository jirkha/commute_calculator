"use client";
import React, { createContext, useState } from "react";

interface Points {
  residence: "" | google.maps.places.PlaceResult;
  workplace: "" | google.maps.places.PlaceResult;
  other: "" | Record<number, google.maps.places.PlaceResult>;
  counter: number;
};
interface Connections {
  connections_list: [] |"" //| google.maps.DirectionsResult;
  total_time: number;
  modes: object;
};
interface Times {
  start_work: string;
  end_work: string;
  morning_preparation: string;
  travel_time: string;
  sleep_time: string;
  wakeup_time: string;
  free_time: string;
};

interface Center {
  lat: number;
  lng: number;
}

export interface FormData {
  current: {
    points: Points;
    connections: Connections;
    times: Times;
  };
  planned: {
    points: Points;
    connections: Connections;
    times: Times;
  };
  general: {
    actual_point: Center | google.maps.LatLng | undefined;
    detail_level: string;
    free_time_difference: string;
  };
}

interface CounterContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const defaultFormData: FormData = {
  current: {
    points: {
      residence: "",
      workplace: "",
      other: "",
      counter: 0,
    },
    connections: {
      connections_list: "",
      total_time: 0,
      modes: {},
    },
    times: {
      start_work: "",
      end_work: "",
      morning_preparation: "",
      travel_time: "",
      sleep_time: "",
      wakeup_time: "",
      free_time: "",
    },
  },
  planned: {
    points: {
      residence: "",
      workplace: "",
      other: "",
      counter: 0,
    },
    connections: {
      connections_list: "",
      total_time: 0,
      modes: {},
    },
    times: {
      start_work: "",
      end_work: "",
      morning_preparation: "",
      travel_time: "",
      sleep_time: "",
      wakeup_time: "",
      free_time: "",
    },
  },
  general: {
    actual_point: undefined,
    detail_level: "",
    free_time_difference: "",
  },
  // actual_point: {
  //   lat: 50.0879,
  //   lng: 14.4205,
  // },
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
