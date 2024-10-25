import React, { useEffect, useRef } from "react";
import { useStore } from "../Contextapi";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY

const mapApiJs = "https://maps.googleapis.com/maps/api/js";

const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";

// load google map api js

function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");

    Object.assign(script, {
      type: "text/javascript",

      async: true,

      src,
    });

    script.addEventListener("load", () => resolve(script));

    document.head.appendChild(script);
  });
}

function Map() {
  const searchInput = useRef(null);

  const { setAddress, setLatitude, setLongitude, setReload } = useStore();

  // init gmap script

  const initMapScript = () => {
    // if script already loaded

    if (window.google) {
      return Promise.resolve();
    }

    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;

    return loadAsyncScript(src);
  };

  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    let components = {};
    place.address_components.forEach((addressComponent) => {
      addressComponent.types.forEach((type) => {
        components[type] = addressComponent.long_name;
      });
    });

    var formatedLocation = place.formatted_address;

    var latitude = place.geometry.location.lat();
    var longitude = place.geometry.location.lng();

    setLatitude(latitude);
    setLongitude(longitude);

    setAddress(formatedLocation);
    setReload(true);
  };

  // init autocomplete

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );

    autocomplete.addListener("place_changed", () =>
      onChangeAddress(autocomplete)
    );
  };

  const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;

    searchInput.current.value = "Getting your location...";

    fetch(url).then((response) => response.json());
  };

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(position.coords);
      });
    }
  };

  // load map script after mounted

  useEffect(() => {
    initMapScript().then(() => initAutocomplete());
  }, [initAutocomplete]);

  return (
    <>
      <input
        id="location"
        className="location"
        ref={searchInput}
        type="text"
        placeholder=" Enter event location / address"
        name="location"
      />

      <button onClick={findMyLocation} className="d-none">
        GP Fixed
      </button>
    </>
  );
}

export default Map;
