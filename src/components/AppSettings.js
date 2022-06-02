import React, { useState } from "react";
import { Col, Form, Offcanvas, Row } from "react-bootstrap";
import { useStore } from "../Contextapi";
import "../css/AppSettings.css";
import InviteModal from "./InviteCodeModal";

import PasswordModal from "./PasswordModal";

function AppSettings({ show, handleClose }) {
  // //toggle waitlist

  const [passwordToggle, setPasswordToggle] = useState(false);
  const [inviteToggle, setEventPrivate] = useState(false);

  //for modal

  const {
    isWaitingList,
    setIsWaitingList,
    setLimit,
    setPassword,
    setInviteCode,
    setGuestList,
  } = useStore();

  const [view, setView] = useState(false);

  const handleModalClose = () => setView(false);
  const handleModalShow = () => setView(true);

  const [view2, setView2] = useState(false);
  const handleModalClose2 = () => setView2(false);
  const handleModalShow2 = () => setView2(true);

  //Open the password modal when user clicks

  const handlePasswordToggle = () => {
    setPassword("");
    setPasswordToggle(!passwordToggle);
    handleModalShow();
  };

  const handleInviteToggle = () => {
    setInviteCode("");
    setEventPrivate(!inviteToggle);
    handleModalShow2();
  };

  return (
    <>
      {passwordToggle ? (
        <PasswordModal
          show={view}
          handleClose={handleModalClose}
          setPasswordToggle={setPasswordToggle}
        />
      ) : (
        ""
      )}

      {inviteToggle ? (
        <InviteModal
          show={view2}
          handleClose={handleModalClose2}
          setInviteToggle={setEventPrivate}
        />
      ) : (
        ""
      )}

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="offcanvas"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 className="text-white">Event Settings</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row className="align-items-center">
            {/* EVENT PRIVACY */}
            <Col xs={8} className="my-4">
              <h4 className="text-white">Make Event Private</h4>
              <p>
                Make event public (default) or private. If private, create an
                invite code and recieve a shareable link. If public, the event
                will appear in app upon approval.
              </p>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <div
                onClick={handleInviteToggle}
                className={!inviteToggle ? "toggle" : "toggle active"}
              />
            </Col>

            {/* //max capacity */}
            {/* <Col xs={8}>
              <h4 className="text-white">Max Capacity</h4>
              <p>
                Limit the number of guests (including +1s) who can RSVP “Going”.
                Leave empty for unlimited
              </p>
            </Col>
            <Col xs={4}>
              <input
                type="number"
                placeholder="None"
                className="offcanvas_input"
                value={capacity}
                onChange={(e) => setcapacity(e.target.value)}
              />
            </Col> */}

            {/* Enable WaitList */}
            <Col xs={8} className="my-4">
              <h4 className="text-white">Enable Waitlist</h4>
              <p>
                Allow guests to join a waitlist once max capacity is reached &
                automatically notify them + update their RSVPs if spots open
              </p>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <div
                onClick={() => setIsWaitingList(!isWaitingList)}
                className={!isWaitingList ? "toggle" : "toggle active"}
              />
            </Col>

            {/* Limit +1s */}
            <Col xs={8} className="my-4">
              <h4 className="text-white">Limit +1s</h4>
              <p>Set how many additional persons each guest may bring</p>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="text-uppercase text-black"
                defaultValue={"Up to 5"}
                onChange={(e) => setLimit(e.target.value)}
              >
                <option value="no +1s">No +1s</option>
                <option value="Up to 1">Up to 1</option>
                <option value="Up to 2">Up to 2</option>
                <option value="Up to 3">Up to 3</option>
                <option value="Up to 5">Up to 5</option>
                <option value="Unlimited">Unlimited addl guests</option>
              </Form.Select>
            </Col>

            {/* Enable Password */}
            <Col xs={8} className="my-4">
              <h4 className="text-white">Password Protection</h4>
              <p>
                Require a password to view the event, scan barcodes. Potential
                attendees will need an invite code
              </p>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <div
                onClick={handlePasswordToggle}
                className={!passwordToggle ? "toggle" : "toggle active"}
              />
            </Col>

            {/* Mask Mandate
            <Col xs={8} className="my-4">
              <h4 className="text-white">Event requires mask</h4>
              <p>Guests are required to bring and wear mask to enter & attend event</p>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="text-uppercase text-black"
              >
                <option value="no +1s" selected>NO</option>
                <option value="Up to 1">YES</option>
              </Form.Select>
            </Col>

            {/* Vax Mandate */}
            {/* <Col xs={8} className="my-4">
            <h4 className="text-white">Event requires vaccination</h4>
              <p>Guests are required to show proof of full Covid-19 vaccination (Vax Report Card)</p>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="text-uppercase text-black"
              >
               <option value="no +1s" selected>NO</option>
               <option value="Up to 1">YES</option>
              </Form.Select>
            </Col> */}

            {/* Show Guestlist */}
            <Col xs={8} className="my-4">
              <h4 className="text-white">Show Guest List</h4>
              <p>
                Allow potential attendees to view the guest list in app or via
                web link. Disable to use password protection.
              </p>
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="text-uppercase text-black"
                onClick={(e) => setGuestList(e.target.value)}
                default={"HIDE"}
              >
                <option value="HIDE">HIDE</option>
                <option value="SHOW">SHOW</option>
              </Form.Select>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AppSettings;
