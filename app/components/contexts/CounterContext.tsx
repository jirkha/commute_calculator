"use client";
import React, { createContext, useState } from "react";

interface Points {
  residence: "" | google.maps.places.PlaceResult;
  workplace: "" | google.maps.places.PlaceResult;
  other: "" | Record<number, google.maps.places.PlaceResult>;
  counter: number;
};
interface Connections {
  connections_list: [] |"" | any;
  total_time: number;
  modes: object;
};
interface Times {
  start_work: number;
  end_work: number;
  morning_preparation: number;
  travel_time: number | string;
  sleep_time: number;
  wakeup_time: number;
  free_time: number;
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
      start_work: 0,
      end_work: 0,
      morning_preparation: 0,
      travel_time: 0,
      sleep_time: 0,
      wakeup_time: 0,
      free_time: 0,
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
      start_work: 0,
      end_work: 0,
      morning_preparation: 0,
      travel_time: 0,
      sleep_time: 0,
      wakeup_time: 0,
      free_time: 0,
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
