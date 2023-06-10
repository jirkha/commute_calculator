import { FormData as MyFormData } from "../contexts/CounterContext";
import { freeTimeCounter } from "../utils/FreeTimeCounter";
import { GoogleConnections } from "../utils/GoogleConnections";

export const submitForm = async (
  formData: MyFormData,
  notify: any,
  setFormData: React.Dispatch<React.SetStateAction<MyFormData>>,
  e: any
) => {
  //console.log("event", e);
  //console.log("formData", formData);
  if (
    formData.current.points.residence !== "" &&
    formData.planned.points.residence !== "" &&
    formData.current.points.workplace !== "" &&
    formData.planned.points.workplace !== ""
  ) {
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData };
      updatedFormData.current.connections.connections_list = [];
      updatedFormData.planned.connections.connections_list = [];
      return updatedFormData;
    });

    const connections: { [key: string]: any } = await GoogleConnections(
      formData
    );
    console.log("connections", connections);

    setFormData((prevFormData) => {
      let updatedFormData: MyFormData = { ...prevFormData };
      Object.keys(connections).forEach((key) => {
        const connection = connections[key];
        const type: string = connection.name;

        const existingConnections =
          updatedFormData[type as keyof Omit<typeof updatedFormData, "general">]
            .connections.connections_list;
        const connectionExists = existingConnections.some(
          (existingConnection: any) => existingConnection.id === connection.id
        );

        if (!connectionExists) {
          updatedFormData[
            type as keyof Omit<typeof updatedFormData, "general">
          ].connections.connections_list.push(connection);
        }
      });

      // Výpočet celkové doby spojení
      const current_travel_time = Object.values(connections).reduce(
        (accumulator, connection) => {
          if (connection.name === "current") {
            return (
              accumulator +
              connection.response.routes[0].legs[0].duration.value / 60
            );
          }
          return accumulator;
        },
        0
      );

      const planned_travel_time = Object.values(connections).reduce(
        (accumulator, connection) => {
          if (connection.name === "planned") {
            return (
              accumulator +
              connection.response.routes[0].legs[0].duration.value / 60
            );
          }
          return accumulator;
        },
        0
      );

      updatedFormData.current.connections.total_time = current_travel_time;
      updatedFormData.planned.connections.total_time = planned_travel_time;

      //currentTotalTime
      //   let hours = Math.floor(current_travel_time / 3600);
      //   let minutes = Math.floor((current_travel_time % 3600) / 60);
      //   const travel_time_current = `${hours
      //     .toString()
      //     .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

      //plannedTotalTime
      //   hours = Math.floor(planned_travel_time / 3600);
      //   minutes = Math.floor((planned_travel_time % 3600) / 60);
      //   const travel_time_planned = `${hours
      //     .toString()
      //     .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

      // Převod minut zpět na hodiny a minuty ve formátu hh:mm
      let resultHours = Math.floor(current_travel_time / 60);
      let resultMinutesFormatted = current_travel_time % 60;

      // Sestavení výsledného času ve formátu hh:mm
      const travel_time_current = `${resultHours
        .toString()
        .padStart(2, "0")
        .slice(0, 5)}:${resultMinutesFormatted
        .toString()
        .padStart(2, "0")
        .slice(0, 2)}`;

      resultHours = Math.floor(planned_travel_time / 60);
      resultMinutesFormatted = planned_travel_time % 60;

      // Sestavení výsledného času ve formátu hh:mm
      const travel_time_planned = `${resultHours
        .toString()
        .padStart(2, "0")
        .slice(0, 5)}:${resultMinutesFormatted
        .toString()
        .padStart(2, "0")
        .slice(0, 2)}`;

      updatedFormData.current.times.travel_time = travel_time_current;
      updatedFormData.planned.times.travel_time = travel_time_planned;

      freeTimeCounter(updatedFormData, e);

      return updatedFormData;
    });
  } else {
    console.warn("Nejsou vyplněna všechna pole!");
    notify();
  }
  console.log("formData", formData);
};
