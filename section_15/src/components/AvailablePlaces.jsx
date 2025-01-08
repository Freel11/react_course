import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);

      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        setErrorState({
          message:
            error.message || "Could not fetch places, please try again later.",
        });
        setIsLoading(false);
      }
    }

    fetchPlaces();
  }, []);

  if (errorState) {
    return (
      <ErrorPage title="An error occurred!" message={errorState.message} />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
