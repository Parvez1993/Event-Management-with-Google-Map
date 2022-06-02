import React, { useContext, useState } from "react";

//step 1

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  //image
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/alta-events.appspot.com/o/defaultCover%2Fcovergiv.gif?alt=media&token=43a04c9c-dbad-4bad-b41c-707c6d5de831&fbclid=IwAR2MZPpVhxp6CgdDKccDncox_njmBLq7iWObBkyaDEhJykg9CN1tsx3sehA"
  );

  //longitude, //latitude
  const [longitude, setLongitude] = useState(-73.935242);
  const [latitude, setLatitude] = useState(40.73061);

  //form information

  //title
  const [title, setTitle] = useState("");

  //start date
  const [startDate, setStartDate] = useState({
    value: new Date(),
    locale: { name: "en-US", label: "English (US)" },
  });

  //end date
  const [endDate, setEndDate] = useState({
    value: new Date(),
    locale: { name: "en-US", label: "English (US)" },
  });

  //dj host name
  const [dj, setDj] = useState("");

  //location

  const [address, setAddress] = useState({});

  //spots

  const [spots, setSpots] = useState();

  //price
  const [price, setPrice] = useState("");

  //password
  const [password, setPassword] = useState("");

  //descriptions
  const [description, setDescription] = useState("");

  //set  Reload
  const [reload, setReload] = useState(false);

  //mask required
  const [isMaskRequired, setIsMaskRequired] = useState(false);
  const [isVaccineRequired, setIsVaccineRequired] = useState(false);

  //code required

  const [inviteCode, setInviteCode] = useState("");

  //waitingList

  const [isWaitingList, setIsWaitingList] = useState(false);

  //limit
  const [limit, setLimit] = useState("Up to 5");

  //show guest list
  const [guestList, setGuestList] = useState("HIDE");

  //capacity
  const [capacity, setcapacity] = useState("");

  //firebase image and gif. This will go directly to the firebase database
  const [jpg, setjpg] = useState("");
  const [gif, setGif] = useState(true);

  const value = {
    image,
    setImage,
    password,
    setPassword,
    longitude,
    setLongitude,
    latitude,
    setLatitude,
    title,
    setTitle,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    dj,
    setDj,
    address,
    setAddress,
    spots,
    setSpots,
    price,
    setPrice,
    description,
    setDescription,
    reload,
    setReload,
    isMaskRequired,
    setIsMaskRequired,
    isVaccineRequired,
    setIsVaccineRequired,
    isWaitingList,
    setIsWaitingList,
    limit,
    setLimit,
    guestList,
    setGuestList,
    inviteCode,
    setInviteCode,
    capacity,
    setcapacity,
    jpg,
    setjpg,
    gif,
    setGif,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export function useStore() {
  return useContext(StoreContext);
}
