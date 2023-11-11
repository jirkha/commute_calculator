import { FormData } from "../contexts/CounterContext";
import { getDate } from "./GetDate";

export async function GoogleConnections(formData: FormData, e: any) {
  let CONNECTIONS: {
    id: number;
    name: string;
    origin: string;
    destination: string;
    type: google.maps.TravelMode;
    drivingOptions?: google.maps.DrivingOptions;
  }[] = [];

  Object.entries(formData)
    .filter(([key]) => key === "current" || key === "planned")
    .map(([key, value]) => {
      // Procházení atributů na stejné úrovni objektu
      if (typeof value === "object" && value !== null) {
        const name = key === "current" ? "current" : "planned";
        const connectionModes = value.connections.modes;
        const otherPoints = value.points.other || [];

        if (value.points.counter === 0) {
          CONNECTIONS.push({
            id: 1,
            name: name,
            origin: value.points.residence?.geometry.location,
            destination: value.points.workplace?.geometry.location,
            type: google.maps.TravelMode[
              connectionModes.residence as keyof typeof google.maps.TravelMode
            ],
          });
        } else if (value.points.counter === 1) {
          const connection1 = {
            id: 1,
            name: name,
            origin: value.points.residence?.geometry.location,
            destination: otherPoints[0]?.geometry.location,
            type: google.maps.TravelMode[
              connectionModes.residence as keyof typeof google.maps.TravelMode
            ],
          };

          const connection2 = {
            id: 2,
            name: name,
            origin: otherPoints[0]?.geometry.location,
            destination: value.points.workplace?.geometry.location,
            type: google.maps.TravelMode[
              connectionModes[0] as keyof typeof google.maps.TravelMode
            ],
          };

          CONNECTIONS.push(connection1, connection2);
        } else {
          const connection1 = {
            id: 1,
            name: name,
            origin: value.points.residence?.geometry.location,
            destination: otherPoints[0]?.geometry.location,
            type: google.maps.TravelMode[
              connectionModes.residence as keyof typeof google.maps.TravelMode
            ],
          };

          const connection2 = {
            id: value.points.counter + 1,
            name: name,
            origin: otherPoints[value.points.counter - 1]?.geometry.location,
            destination: value.points.workplace?.geometry.location,
            type: google.maps.TravelMode[
              connectionModes[
                value.points.counter - 1
              ] as keyof typeof google.maps.TravelMode
            ],
          };

          CONNECTIONS.push(connection1, connection2);

          for (let i = 1; i < value.points.counter; i++) {
            const connectionOther = {
              id: i + 1,
              name: name,
              origin: otherPoints[i - 1]?.geometry.location,
              destination: otherPoints[i]?.geometry.location,
              type: google.maps.TravelMode[
                connectionModes[i] as keyof typeof google.maps.TravelMode
              ],
            };
            CONNECTIONS.push(connectionOther);
          }
        }
      }
    });

  const directionsService = new google.maps.DirectionsService();
  const directionsRequests: Promise<any>[] = [];
  const work_time: string = e.target.elements.start_work.value;
  const date = getDate(work_time);

  for (const connection of CONNECTIONS) {
    const request = {
      origin: connection.origin,
      destination: connection.destination,
      travelMode: connection.type,
    };

    // Přidání specifického času odjezdu pro Travel Mode
    if (connection.type === google.maps.TravelMode.TRANSIT) {
      (request as any).transitOptions = {
        arrivalTime: new Date(date),
      };
    }
    if (connection.type === google.maps.TravelMode.DRIVING) {
      (request as any).drivingOptions = {
        departureTime: new Date(date),
        trafficModel: "pessimistic",
      };
    }

    directionsRequests.push(
      new Promise((resolve, reject) => {
        directionsService.route(request, (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            resolve(response);
          } else {
            reject(status);
          }
        });
      })
    );
  }

  try {
    const responses = await Promise.all(directionsRequests);

    const formattedConnections = responses.map((response, index) => {
      const connection = CONNECTIONS[index];
      return {
        id: connection.id,
        name: connection.name,
        origin: connection.origin,
        destination: connection.destination,
        type: connection.type,
        response: response,
      };
    });
    // console.log("formattedConnections", formattedConnections);
    return formattedConnections;
  } catch (error) {
    console.error("Error retrieving directions:", error);
    return [];
  }
}
