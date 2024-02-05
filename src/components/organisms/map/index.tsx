import { useMemo } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  // ZoomControl,
} from "@react-google-maps/api";
import { env } from "~/env.mjs";

import Loading from "~/components/molecules/Loading";

type Icon = "parking";

interface IPosition {
  lat: number;
  lng: number;
}

interface IMarker {
  icon: Icon;
  position: IPosition;
}

interface IProps {
  location: IPosition;
  markers?: IMarker[];
}

const Map: React.FC<IProps> = ({ location, markers }) => {
  const center = useMemo(() => location, [location]);
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      zoomControl: true,
    }),
    [],
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <Loading />;
  return (
    <GoogleMap
      zoom={14}
      center={center}
      options={options}
      mapContainerStyle={{
        width: "100%",
        height: "300px",
      }}
    >
      <MarkerF icon="/logo_head.png" position={center}></MarkerF>;
      {markers?.map((marker, index) => (
        <MarkerF
          icon={{
            url: `/${marker.icon}.png`,
            scaledSize: new window.google.maps.Size(30, 30),
          }}
          position={marker.position}
          key={index}
        ></MarkerF>
      ))}
      {/* <ZoomControl position={window.google.maps.ControlPosition.RIGHT_CENTER} /> */}
    </GoogleMap>
  );
};

export default Map;
