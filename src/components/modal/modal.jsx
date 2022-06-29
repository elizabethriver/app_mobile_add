import React from "react";
import { Modal } from "react-bootstrap";
import { FaSave } from "react-icons/fa";

export const ModalComponent = ({ show, handleClose}) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add your contact!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="row">
          <div className="col">
            <label htmlFor="staticName" className="p-2">
              Name
              <input
                type="text"
                className="form-control form-control-sm"
                id="staticName"
              />
            </label>
            <label htmlFor="inputMobile" className="p-2">
              Telephone mobile
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputMobile"
              />
            </label>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="col">
          <button
            type="submit"
            className="btn btn-primary d-flex align-items-center"
          >
            <FaSave className="pr-2" />
            <small>Save</small>
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
