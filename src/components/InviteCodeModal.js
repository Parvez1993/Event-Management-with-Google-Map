import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { FaEnvelopeOpen } from "react-icons/fa";
import "../css/CostModal.css";
import { useStore } from "../Contextapi";
function InviteModal({ show, handleClose, setInviteToggle }) {
  const { inviteCode, setInviteCode } = useStore("");
  const [alert, setAlert] = useState(false);
  //modal

  const handleInviteCodeSubmit = () => {
    if (!inviteCode) {
      setInviteCode("");
      setAlert(true);
    } else {
      setAlert(false);
      handleClose();
    }
  };

  //close password modal

  const closePasswordModal = () => {
    setInviteCode("");
    setAlert(false);
    setInviteToggle(false);
    handleClose();
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="modal"
      backdrop="static"
      centered
      size="lg"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Row className="align-items-center">
          <h3 className="text-white" style={{ fontSize: "40px" }}>
            Create a invite code for this event:
          </h3>
          <p className="text-white" style={{ fontSize: "30px", opacity: ".5" }}>
            This will be used to unlock the event for potential guests
          </p>

          <Col lg={7}>
            <div
              className="modal-input d-flex my-2"
              style={{ fontSize: "30px" }}
            >
              <label>
                <div className="modal_font">
                  <FaEnvelopeOpen
                    style={{ fontSize: "30px", marginRight: 8 }}
                  />
                </div>
              </label>
              <input
                className="price"
                placeholder="Enter event Invite Code"
                type="text"
                name="inviteCode"
                onChange={(e) => setInviteCode(e.target.value)}
              />
            </div>
            {alert ? (
              <h5 className="text-danger">Cannot save empty invite code</h5>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex">
          <button
            variant="secondary"
            onClick={closePasswordModal}
            className="model_btn"
          >
            CANCEL
          </button>
          <button
            variant="primary"
            onClick={handleInviteCodeSubmit}
            className="model_btn3"
          >
            SAVE
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default InviteModal;
