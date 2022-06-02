import React from "react";
import { MapMarker, GMap } from "react-rainbow-components";

function GoogleMap({ latitude, longitude }) {
  return (
    <GMap
      apiKey={"AIzaSyB4JL7NKnX6WJ53odwyx3u-wC79M3CJ2s4"}
      zoom={15}
      latitude={latitude}
      longitude={longitude}
    >
      <MapMarker
        latitude={latitude}
        longitude={longitude}
        // label="Botany Bay"  UPDATE MARKER WITH INPUTTED LOCATION
        // description=" Botany, New South Wales, Australia"
      />
    </GMap>
  );
}

export default GoogleMap;
