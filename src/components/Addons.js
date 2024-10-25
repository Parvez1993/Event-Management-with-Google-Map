import React, { useState } from "react";
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import "../css/Addons.css";
import { AiOutlinePlus, AiOutlineUserAdd } from "react-icons/ai";
import { BsClockFill, BsListCheck } from "react-icons/bs";

import { RiLock2Fill, RiSurgicalMaskLine } from "react-icons/ri";
import { FaSyringe } from "react-icons/fa";
import { useStore } from "../Contextapi";

let tempArr = [];

function Addons() {
  const {
    setIsMaskRequired,

    setIsVaccineRequired,
  } = useStore();
  //main options

  const [add, setAdd] = useState([
    // { id: 1, name: "+ENABLE WAITLIST" },
    // { id: 2, name: "+ALLOW +1s" },
    { id: 3, name: "+REQUIRE MASKS" },
    { id: 4, name: "+REQUIRE VAX CARD" },
    // { id: 5, name: "+MAKE EVENT PRIVATE" },
    // { id: 6, name: "+HIDE GUEST LIST" },
  ]);

  //Prevent

  const [preEvent, setPrevent] = useState([
    { id: 1, name: "ENABLE WAITLIST", status: true },
    { id: 2, name: "DISABLE WAITLIST", status: false },
  ]);

  //+REQUIRE TESTING
  const [testRequired, setTestRequired] = useState([
    { id: 1, name: "ALLOW +1", status: true },
    { id: 2, name: "ALLOW +2", status: false },
    { id: 3, name: "ALLOW UP TO +5", status: false },
    { id: 4, name: "ALLOW UNLIMITED ADDL GUESTS", status: false },
    { id: 5, name: "DO NOT ALLOW ADDL GUESTS WITH RSVP", status: false },
  ]);

  // REQUIRE MASKS
  const [maskRequired, setMaskRequired] = useState([
    { id: 1, name: "Mask Required", status: true },
    { id: 2, name: "Not Required", status: false },
  ]);

  //Require Vaccinated
  const [vaccineRequire, setVaccineRequired] = useState([
    { id: 1, name: "Must show proof of full vaccination", status: true },
    { id: 2, name: "Not Required", status: false },
  ]);

  const [eventVisibility, setEventVisibility] = useState([
    { id: 1, name: "MARK EVENT PRIVATE", status: true },
    { id: 2, name: "MARK EVENT PUBLIC", status: false },
  ]);

  const [guestListVisibility, setGuestListVisibility] = useState([
    { id: 1, name: "HIDE GUEST LIST", status: true },
    { id: 2, name: "ENABLE PUBLIC GUEST LIST", status: false },
  ]);

  const [selected, setSelected] = useState("");

  const deleteMain = (id, name) => {
    if (name === "+REQUIRE VAX CARD") {
      setIsVaccineRequired(true);
    }

    if (name === "+REQUIRE MASKS") {
      setIsMaskRequired(true);
    }
    tempArr.push(name);
    let temp = add.filter((i) => i.id !== id);
    setAdd(temp);
    setSelected(tempArr);
  };

  // handlePreventEvent

  //when option no 1 (preEvent) is removed run this function

  const addPreEventOption = () => {
    let tempAddArr = add.map((i) => i);
    let tempArrSelect = { id: 1, name: "+ENABLE WAITLIST" };
    tempAddArr.push(tempArrSelect);

    // Remove the item from the array if the preevent quarantine option is unselected

    let tempSelect = tempArr.filter((i) => i !== "+ENABLE WAITLIST");
    tempArr = tempSelect;
    setSelected(tempSelect);

    tempAddArr.sort(function (a, b) {
      return a.id - b.id;
    });
    setAdd(tempAddArr);
  };
  const handlePreEvent = (id, item) => {
    if (id === 1) {
      let temp = selected.filter((i) => i !== "+ENABLE WAITLIST");
      setSelected(temp);
      addPreEventOption();
    }
    const data = {
      id: item.id,
      name: item.name,
      status: true,
    };

    setPrevent([
      { id: 1, name: "ENABLE WAITLIST", status: true },
      { id: 2, name: "DO NOT ALLOW WAITLIST", status: false },
    ]);

    let temp = [
      { id: 1, name: "ENABLE WAITLIST", status: true },
      { id: 2, name: "DO NOT ALLOW WAITLIST", status: false },
    ];

    temp[id] = data;

    setPrevent(temp);
  };

  //handle Testing Required

  const addTestRequired = () => {
    let tempAddArr = add.map((i) => i);
    let tempArrSelect = { id: 2, name: "+ALLOW +1s" };
    tempAddArr.push(tempArrSelect);

    // Remove the item from the array if the preevent quarantine option is unselected

    let tempSelect = tempArr.filter((i) => i !== "+ALLOW +1s");
    tempArr = tempSelect;
    setSelected(tempSelect);

    tempAddArr.sort(function (a, b) {
      return a.id - b.id;
    });
    setAdd(tempAddArr);
  };

  const testRequiredFunc = (id, item) => {
    if (id === 4) {
      let temp = selected.filter((i) => i !== "+ALLOW +1s");
      setSelected(temp);
      addTestRequired();
    }
    const data = {
      id: item.id,
      name: item.name,
      status: true,
    };

    setTestRequired([
      { id: 1, name: "ALLOW +1", status: false },
      { id: 2, name: "ALLOW +2", status: false },
      { id: 3, name: "ALLOW UP TO +5", status: false },
      { id: 4, name: "ALLOW UNLIMITED ADDL GUESTS", status: false },
      { id: 5, name: "DO NOT ALLOW ADDL GUESTS WITH RSVP", status: false },
    ]);

    let temp = [
      { id: 1, name: "ALLOW +1", status: false },
      { id: 2, name: "ALLOW +2", status: false },
      { id: 3, name: "ALLOW UP TO +5", status: false },
      { id: 4, name: "ALLOW UNLIMITED ADDL GUESTS", status: false },
      { id: 5, name: "DO NOT ALLOW ADDL GUESTS WITH RSVP", status: false },
    ];

    temp[id] = data;

    setTestRequired(temp);
  };

  //handle mask required

  const addMaskRequired = () => {
    let tempAddArr = add.map((i) => i);
    let tempArrSelect = { id: 3, name: "+REQUIRE MASKS" };
    tempAddArr.push(tempArrSelect);

    // Remove the item from the array if the preevent quarantine option is unselected

    let tempSelect = tempArr.filter((i) => i !== "+REQUIRE MASKS");
    tempArr = tempSelect;
    setSelected(tempSelect);

    tempAddArr.sort(function (a, b) {
      return a.id - b.id;
    });
    setAdd(tempAddArr);
  };

  const maskRequiredFunc = (id, item) => {
    setIsMaskRequired(false);
    if (id === 1) {
      let temp = selected.filter((i) => i !== "+REQUIRE MASKS");
      setSelected(temp);
      addMaskRequired();
    }

    const data = {
      id: item.id,
      name: item.name,
      status: true,
    };

    setMaskRequired([
      { id: 1, name: "Mask Required", status: false },
      { id: 2, name: "Not Required", status: false },
    ]);

    let temp = [
      { id: 1, name: "Mask Required", status: true },
      { id: 2, name: "Not Required", status: false },
    ];

    temp[id] = data;
    setMaskRequired(temp);
  };

  //handle vaccine required

  const addvaccineRequired = () => {
    let tempAddArr = add.map((i) => i);
    let tempArrSelect = { id: 4, name: "+REQUIRE VAX CARD" };
    tempAddArr.push(tempArrSelect);

    // Remove the item from the array if the preevent quarantine option is unselected

    let tempSelect = tempArr.filter((i) => i !== "+REQUIRE VAX CARD");
    tempArr = tempSelect;
    setSelected(tempSelect);

    tempAddArr.sort(function (a, b) {
      return a.id - b.id;
    });
    setAdd(tempAddArr);
  };

  const vaccineRequiredFunc = (index, item) => {
    setIsVaccineRequired(false);
    if (index === 1) {
      let temp = selected.filter((i) => i !== "+REQUIRE VAX CARD");
      setSelected(temp);
      addvaccineRequired();
    } else {
      const data = {
        id: item.id,
        name: item.name,
        status: true,
      };

      setVaccineRequired([
        { id: 1, name: "Must show proof of full vaccination", status: false },
        { id: 2, name: "Not Required", status: false },
      ]);

      let temp = [
        { id: 1, name: "Must show proof of full vaccination", status: true },
        { id: 2, name: "Not Required", status: false },
      ];

      temp[index] = data;

      setVaccineRequired(temp);
    }
  };

  const markEventVisibility = () => {
    let tempAddArr = add.map((i) => i);
    let tempArrSelect = { id: 5, name: "+MAKE EVENT PRIVATE" };
    tempAddArr.push(tempArrSelect);

    // Remove the item from the array if the preevent quarantine option is unselected

    let tempSelect = tempArr.filter((i) => i !== "+MAKE EVENT PRIVATE");
    tempArr = tempSelect;
    setSelected(tempSelect);

    tempAddArr.sort(function (a, b) {
      return a.id - b.id;
    });
    setAdd(tempAddArr);
  };

  const eventVisibilityFunc = (index, item) => {
    if (index === 1) {
      let temp = selected.filter((i) => i !== "+MAKE EVENT PRIVATE");
      setSelected(temp);
      markEventVisibility();
    }
    const data = {
      id: item.id,
      name: item.name,
      status: true,
    };

    setEventVisibility([
      { id: 1, name: "MAKE EVENT PRIVATE", status: false },
      { id: 2, name: "MAKE EVENT PUBLIC", status: false },
    ]);

    let temp = [
      { id: 1, name: "MAKE EVENT PRIVATE", status: true },
      { id: 2, name: "MAKE EVENT PUBLIC", status: false },
    ];

    temp[index] = data;

    setEventVisibility(temp);
  };

  const markGuestListVisibility = () => {
    let tempAddArr = add.map((i) => i);
    let tempArrSelect = { id: 6, name: "+HIDE GUEST LIST" };
    tempAddArr.push(tempArrSelect);

    // Remove the item from the array if the preevent quarantine option is unselected

    let tempSelect = tempArr.filter((i) => i !== "+HIDE GUEST LIST");
    tempArr = tempSelect;
    setSelected(tempSelect);

    tempAddArr.sort(function (a, b) {
      return a.id - b.id;
    });
    setAdd(tempAddArr);
  };

  const guestListFunc = (index, item) => {
    if (index === 1) {
      let temp = selected.filter((i) => i !== "+HIDE GUEST LIST");
      setSelected(temp);
      markGuestListVisibility();
    }
    const data = {
      id: item.id,
      name: item.name,
      status: true,
    };

    setGuestListVisibility([
      { id: 1, name: "HIDE GUEST LIST", status: false },
      { id: 2, name: "ENABLE PUBLIC GUEST LIST", status: false },
    ]);

    let temp = [
      { id: 1, name: "HIDE GUEST LIST", status: true },
      { id: 2, name: "ENABLE PUBLIC GUEST LIST", status: false },
    ];

    temp[index] = data;

    setGuestListVisibility(temp);
  };

  //   overlays
  const [show, setShow] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <h3>EDIT COVID SETTINGS</h3>
        <ListGroup>
          {add.map((item, k) => {
            return (
              <ListGroupItem
                className={
                  item.status
                    ? "border-0 listItems active"
                    : "border-0 listItems"
                }
                key={k}
                onClick={() => deleteMain(item.id, item.name)}
              >
                {item.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Popover.Body>
    </Popover>
  );

  const popover2 = (
    <Popover id="popover2">
      <Popover.Body>
        <h3>CAPACITY SETTINGS</h3>
        <ListGroup>
          {preEvent.map((item, k) => {
            return (
              <ListGroupItem
                className={
                  item.status
                    ? "border-0 listItems active"
                    : "border-0 listItems"
                }
                key={k}
                onClick={() => handlePreEvent(k, item)}
              >
                {item.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Popover.Body>
    </Popover>
  );

  const popover3 = (
    <Popover id="popover3">
      <Popover.Body>
        <h3>ADDITIONAL GUESTS</h3>
        <ListGroup>
          {testRequired.map((item, k) => {
            return (
              <ListGroupItem
                className={
                  item.status
                    ? "border-0 listItems active"
                    : "border-0 listItems"
                }
                key={k}
                onClick={() => testRequiredFunc(k, item)}
              >
                {item.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Popover.Body>
    </Popover>
  );

  const popover4 = (
    <Popover id="popover4">
      <Popover.Body>
        <h3>MASK REQUIREMENT</h3>
        <ListGroup>
          {maskRequired.map((item, k) => {
            return (
              <ListGroupItem
                className={
                  item.status
                    ? "border-0 listItems active"
                    : "border-0 listItems"
                }
                key={k}
                onClick={() => maskRequiredFunc(k, item)}
              >
                {item.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Popover.Body>
    </Popover>
  );

  const popover5 = (
    <Popover id="popover5">
      <Popover.Body>
        <h3>VAX REQUIREMENT</h3>
        <ListGroup>
          {vaccineRequire.map((item, k) => {
            return (
              <ListGroupItem
                key={k}
                onClick={() => {
                  vaccineRequiredFunc(k, item);
                }}
                className={
                  item.status
                    ? "border-0 listItems active"
                    : "border-0 listItems"
                }
              >
                {item.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Popover.Body>
    </Popover>
  );

  const popover6 = (
    <Popover id="popover6">
      <Popover.Body>
        <h3>EVENT VISIBILITY</h3>
        <ListGroup>
          {eventVisibility.map((item, k) => {
            return (
              <ListGroupItem
                key={k}
                onClick={() => eventVisibilityFunc(k, item)}
                className={
                  item.status
                    ? "border-0 listItems active"
                    : "border-0 listItems"
                }
              >
                {item.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Popover.Body>
    </Popover>
  );

  const popover7 = (
    <Popover id="popover7">
      <Popover.Body>
        <h3>GUEST LIST</h3>
        <ListGroup>
          {eventVisibility.map((item, k) => {
            return (
              <ListGroupItem
                key={k}
                onClick={() => guestListFunc(k, item)}
                className={
                  item.status
                    ? "border-0 listItems active"
                    : "border-0 listItems"
                }
              >
                {item.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Popover.Body>
    </Popover>
  );

  return (
    <Container>
      <div className="addons">
        <Row>
          <Col lg={8}>
            <OverlayTrigger
              trigger="click"
              placement="top"
              rootClose
              overlay={popover}
              onClick={() => setShow(!show)}
            >
              <div className="d-inline">
                <AiOutlinePlus className="plus" />
              </div>
            </OverlayTrigger>

            {selected ? (
              selected.find((i) => i === "+ENABLE WAITLIST") ? (
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={popover2}
                  id="popover2"
                  rootClose
                >
                  <div className="d-inline">
                    <BsClockFill className="plus" style />
                  </div>
                </OverlayTrigger>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            {selected ? (
              selected.find((i) => i === "+ALLOW +1s") ? (
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={popover3}
                  id="popover2"
                >
                  <div className="d-inline">
                    <AiOutlineUserAdd className="plus" />
                  </div>
                </OverlayTrigger>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            {selected ? (
              selected.find((i) => i === "+REQUIRE VAX CARD") ? (
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={popover5}
                  id="popover"
                >
                  <div className="d-inline">
                    <FaSyringe className="plus" />
                  </div>
                </OverlayTrigger>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            {selected ? (
              selected.find((i) => i === "+REQUIRE MASKS") ? (
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={popover4}
                  id="popover2"
                >
                  <div className="d-inline">
                    <RiSurgicalMaskLine className="plus" />
                  </div>
                </OverlayTrigger>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            {selected ? (
              selected.find((i) => i === "+MAKE EVENT PRIVATE") ? (
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={popover6}
                  id="popover5"
                >
                  <div className="d-inline">
                    <RiLock2Fill className="plus" />
                  </div>
                </OverlayTrigger>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {/* IF EVENT IS PRIVATE IT SHOULD PROMPT USER TO CREATE A PASSCODE, GENERATE A SHAREABLE LINK AND INVITE CODE -> INVITE CODE LOGIC TODO */}

            {selected ? (
              selected.find((i) => i === "+HIDE GUEST LIST") ? (
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={popover7}
                  id="popover6"
                >
                  <div className="d-inline">
                    <BsListCheck className="plus" />
                  </div>
                </OverlayTrigger>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
      <br></br>
    </Container>
  );
}

export default Addons;
