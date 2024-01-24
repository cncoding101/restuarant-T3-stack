import { useMemo } from "react";
import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";
import { env } from "~/env.mjs";

const Map: React.FC = () => {
  const center = useMemo(
    () => ({
      lat: 27.672932021393862,
      lng: 85.31184012689732,
    }),
    [],
  );

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    [],
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  return (
    isLoaded && (
      <GoogleMap
        zoom={14}
        center={center}
        options={options}
        mapContainerStyle={{ width: "200px", height: "200px" }}
      >
        <MarkerF position={center}></MarkerF>
      </GoogleMap>
    )
  );
};

export default Map;
