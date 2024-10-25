import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { FaUserSecret } from "react-icons/fa";
import "../css/CostModal.css";
import { useStore } from "../Contextapi";
function PasswordModal({ show, handleClose, setPasswordToggle }) {
  const { password, setPassword } = useStore("");

  const [alert, setAlert] = useState(false);
  //modal

  const handlePasswordSubmit = () => {
    if (!password) {
      setPassword("");
      setAlert(true);
    } else {
      setAlert(false);
      // setPasswordToggle(false);
      handleClose();
    }
  };

  //close password modal

  const closePasswordModal = () => {
    setPassword("");
    setAlert(false);
    setPasswordToggle(false);
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
            Create a passcode for this event:
          </h3>
          <p className="text-white" style={{ fontSize: "30px", opacity: ".5" }}>
            This will be used to unlock guest lists and the barcode scanner
          </p>

          <Col lg={7}>
            <div
              className="modal-input d-flex my-2"
              style={{ fontSize: "30px" }}
            >
              <label>
                <div className="modal_font">
                  <FaUserSecret style={{ fontSize: "30px", marginRight: 8 }} />
                </div>
              </label>
              <input
                className="price"
                placeholder="Enter passcode"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {alert ? (
              <h5 className="text-danger">Cannot save empty password</h5>
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
            onClick={handlePasswordSubmit}
            className="model_btn3"
          >
            SAVE
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default PasswordModal;
