import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { FaDollarSign } from "react-icons/fa";
import "../css/CostModal.css";
function CostModal({ show, handleClose, setPrice, price }) {
  //modal

  const closeModal = () => {
    setPrice(0);
    handleClose();
  };

  const openModal = () => {
    if (price === 0) {
      setPrice(0);
      handleClose();
    } else {
      handleClose();
    }
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
          <Col lg={8}>
            <h3 className="text-white" style={{ fontSize: "40px" }}>
              Cost Per Person
            </h3>
            <p
              className="text-white"
              style={{ fontSize: "30px", opacity: ".5" }}
            >
              The amount that guests should pay to attend (USD)
            </p>
          </Col>
          <Col lg={4}>
            <div
              className="modal-input d-flex my-2"
              style={{ fontSize: "30px" }}
            >
              <label>
                <div className="modal_font">
                  <FaDollarSign style={{ fontSize: "30px" }} />
                </div>
              </label>
              <input
                id="price"
                className="price"
                placeholder="0"
                type="number"
                name="email"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex">
          <button
            variant="secondary"
            onClick={closeModal}
            className="model_btn"
          >
            MARK AS "FREE"
          </button>
          <button variant="primary" onClick={openModal} className="model_btn3">
            Save Settings
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default CostModal;
