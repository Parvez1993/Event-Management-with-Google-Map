import React from "react";
import { MapMarker, GMap } from "react-rainbow-components";

function GoogleMap({ latitude, longitude }) {
  let key = process.env.REACT_APP_GOOGLE_API_KEY
  console.log("key", process.env.REACT_APP_FIREBASE_APP_ID)
  return (
    <GMap
      apiKey={`${key}`}
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
    </GMap >
  );
}

export default GoogleMap;
