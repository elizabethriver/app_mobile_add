import React from "react";
import { Modal } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import { ContactForm } from "../formContactAdd/contactForm";

export const ModalComponent = ({ show, handleClose }) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add your contact!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm />
      </Modal.Body>
    </Modal>
  );
};
