"use client";
import React, { createContext, useState } from "react";

interface Points {
  residence: google.maps.places.PlaceResult | any;
  workplace: google.maps.places.PlaceResult | any;
  other: "" | Record<number, google.maps.places.PlaceResult>;
  counter: number;
};
interface Connections {
  connections_list: [] | "" | any;
  total_time: string;
  modes: object;
};
interface Times {
  start_work: number;
  end_work: number;
  morning_preparation: number;
  travel_time: number;
  sleep_time: number;
  wakeup_time: number;
  free_time: number;
  work_duration: number
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
    result: boolean;
    free_time_difference: number;
  };
}

export interface CounterContextType {
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
      total_time: "",
      modes: {},
    },
    times: {
      start_work: 510,
      end_work: 0,
      morning_preparation: 0,
      travel_time: 0,
      sleep_time: 0,
      wakeup_time: 0,
      free_time: 0,
      work_duration: 0,
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
      total_time: "",
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
      work_duration: 0,
    },
  },
  general: {
    actual_point: undefined,
    detail_level: "quick",
    result: false,
    free_time_difference: 0,
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
console.log(formData.general)
  return (
    <CounterContext.Provider value={{ formData, setFormData }}>
      {children}
    </CounterContext.Provider>
  );
};
