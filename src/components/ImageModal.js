import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import "../css/ImageModal.css";
import Giphy from "./Giphy";
function ImageModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Button
          variant="primary"
          className="imageUploadBtn"
          onClick={handleShow}
        >
          <FaPencilAlt></FaPencilAlt> Click to Edit Event Cover Art
        </Button>

        <Modal
          onClick={handleShow}
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Party Vibe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Giphy handleClose={handleClose} />
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <button
                variant="secondary"
                onClick={handleClose}
                className="model_btn"
              >
                Cancel
              </button>
              <button
                variant="primary"
                onClick={handleClose}
                className="model_btn2"
              >
                Save Settings
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ImageModal;
