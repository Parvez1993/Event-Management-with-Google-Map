import React, { useState } from "react";
import "../css/EnterForm.css";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillSmile } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { BsCalendar2DateFill, BsFillPersonFill } from "react-icons/bs";
import { GiTicket } from "react-icons/gi";
import Map from "./Map";
import CostModal from "./CostModal";

import { DateTimePicker } from "react-rainbow-components";
import { useStore } from "../Contextapi";

function EnterForm() {
  //import from context api

  const {
    setTitle,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setDj,
    setSpots,
    price,
    setPrice,
    setDescription,
  } = useStore();

  //spot
  const [width, setWidth] = useState(2);

  const changeHandler = (evt) => {
    setWidth(evt.target.value.length);
    setSpots(evt.target.value);
  };
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // const [state, setState] = useState({
  //   value: new Date(),
  //   locale: { name: "en-US", label: "English (US)" },
  // });

  const dateTimeStyles = {
    maxWidth: "40%",
  };

  return (
    <>
      <form>
        {/* // title */}
        <input
          type="text"
          name="title"
          className="title"
          placeholder="Untitled Event"
          required
          style={{ fontSize: "56px" }}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* // START TIME */}

        <div
          className="input-container d-flex my-3"
          style={{ fontSize: "30px" }}
        >
          <label>
            <div className="form_icons ">
              <BsCalendar2DateFill style={{ fontSize: "30px" }} />
              <span className="label_font" style={{ fontSize: "30px" }}>
                START TIME
              </span>
            </div>
          </label>
          <DateTimePicker
            formatStyle="small"
            value={startDate.value}
            // label="DateTimePicker Label"
            onChange={(value) => setStartDate({ value })}
            className="rainbow-m-around_small"
            style={dateTimeStyles}
          />
        </div>

        {/* // ENDTIME */}

        <div
          className="input-container d-flex my-3"
          style={{ fontSize: "30px" }}
        >
          <label>
            <div className="form_icons ">
              <BsCalendar2DateFill style={{ fontSize: "30px" }} />
              <span className="label_font" style={{ fontSize: "30px" }}>
                END TIME
              </span>
            </div>
          </label>
          <DateTimePicker
            formatStyle="small"
            value={endDate.value}
            // label="DateTimePicker Label"
            onChange={(value) => setEndDate({ value })}
            className="rainbow-m-around_small"
            style={dateTimeStyles}
          />
        </div>

        {/* //hosted by */}

        <div
          className="input-container d-flex my-3"
          style={{ fontSize: "30px" }}
        >
          <label>
            <div className="form_icons ">
              <AiFillSmile style={{ fontSize: "30px" }} />
              <span className="label_font" style={{ fontSize: "30px" }}>
                Host/DJ
              </span>
            </div>
          </label>
          <input
            id="HostName"
            className="hosted_by"
            type="text"
            placeholder="Enter Event Host / DJ Name"
            name="hostname"
            onChange={(e) => setDj(e.target.value)}
          />
        </div>

        {/* //location */}
        <div
          className="input-container d-flex my-2"
          style={{ fontSize: "30px" }}
        >
          <label>
            <div className="form_icons ">
              <FaLocationArrow style={{ fontSize: "30px" }} />
            </div>
          </label>
          <Map />
        </div>

        {/* //Unlimited Spots */}

        <div
          className="input-container d-flex my-2 align-items-center"
          style={{ fontSize: "30px" }}
        >
          <label>
            <div className="form_icons ">
              <BsFillPersonFill style={{ fontSize: "30px" }} />
            </div>
          </label>
          <label>
            <span className="form_icons my-2" style={{ fontSize: "30px" }}>
              # of spots (max)
            </span>
          </label>
          <input
            style={{ width: width + 0.5 + "ch" }}
            type="number"
            autoFocus
            onChange={changeHandler}
            className="spots"
            id="spots"
          />
        </div>

        {/* //costs per person */}
        <div
          className="input-container d-flex my-2 align-items-center"
          style={{ fontSize: "30px" }}
          onClick={handleShow}
        >
          <label>
            <div className="form_icons ">
              <GiTicket style={{ fontSize: "30px" }} />
            </div>
          </label>

          <label>
            <span className="form_icons m-2" style={{ fontSize: "30px" }}>
              + Cost Per Person : ${price}
            </span>
          </label>
        </div>

        {/* //add description*/}

        <textarea
          type="text"
          row="2"
          aria-multiline="true"
          placeholder=" Enter description about your event"
          className="input-container textarea"
          style={{ fontSize: "30px", autoFocus: true }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
      <CostModal
        show={show}
        handleClose={handleClose}
        setPrice={setPrice}
        price={price}
      />
    </>
  );
}

export default EnterForm;
