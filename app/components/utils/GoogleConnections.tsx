export async function GoogleConnections(formData: any) {
  const CONNECTIONS: {
    id: number;
    name: string;
    origin: string;
    type: google.maps.TravelMode;
  }[] = [
    {
      id: 1,
      name: "public_current_workplace",
      origin: formData.points.current_residence?.geometry.location,
      type: google.maps.TravelMode.TRANSIT,
    },
    {
      id: 2,
      name: "car_current_workplace",
      origin: formData.points.current_residence?.geometry.location,
      type: google.maps.TravelMode.DRIVING,
    },
    {
      id: 3,
      name: "public_planned_workplace",
      origin: formData.points.planned_residence?.geometry.location,
      type: google.maps.TravelMode.TRANSIT,
    },
    {
      id: 4,
      name: "car_planned_workplace",
      origin: formData.points.planned_residence?.geometry.location,
      type: google.maps.TravelMode.DRIVING,
    },
  ];
  const googlePlace = new google.maps.DirectionsService();

  const createConnections = async () => {
    const results = await Promise.all(
      CONNECTIONS.map(async ({ name, origin, type }) => {
        try {
          let route;
          await googlePlace.route(
            {
              origin: origin,
              destination: formData.points.workplace?.geometry.location,
              travelMode: type,
            },
            (result, status) => {
              if (status === window.google.maps.DirectionsStatus.ZERO_RESULTS) {
                console.warn("Nepodařilo se najít trasu mezi těmito body.");
                route = "";
              } else if (status !== window.google.maps.DirectionsStatus.OK) {
                console.error(`Chyba při hledání trasy: ${status}`);
                route = "";
              } else if (status === window.google.maps.DirectionsStatus.OK) {
                route = result;
              }
            }
          );
          return {
            [name]: route,
          };

        } catch (error) {
          console.error(`Chyba v nalezení spojení: ${error}`);
          let route = "";
          return {
            [name]: route,
          };
        }
      })
    );

    const connections = Object.assign([], ...results);

    return connections;
  };

  let connections = createConnections();

  return connections;
}
