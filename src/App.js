import React, { useState } from "react";
import "./App.css";
import { FaMobileAlt, FaSearch, FaTrashAlt, FaPhoneAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { ModalComponent } from "./components/modal/modal";
import { Card } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteUser = () => {
    console.log('delete')
  }

  const dataMock ={
    name: "Pedro",
    numero: 222
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title-container">
          <FaMobileAlt />
          <h1>Phone Book App</h1>
        </div>
      </header>
      <main>
        <div className="contact-section-add-container">
          <h2>Contacts</h2>
          <Button variant="primary" onClick={handleShow}>
            + Add Contact
          </Button>
          <ModalComponent show={show} handleClose={handleClose} />
        </div>
        <div className="contact-section-search-container">
          <form className="d-flex align-items-center justify-content-evenly">
            <FaSearch />
            <input type="text" id="staticEmail2" />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
        <div>
          <ul className="list-group">
            <li className="list-group-item">
              <Card style={{ width: "auto" }}>
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <div>
                    <Card.Title>{dataMock.name}</Card.Title>
                    <Card.Subtitle className=" text-muted">
                      <FaPhoneAlt className="me-2"/>
                      {dataMock.numero}
                    </Card.Subtitle>
                  </div>
                  <div>
                    <button type="button" className="btn btn-danger" onClick={deleteUser}>
                      <FaTrashAlt className="me-2"/>
                      <small>Delete</small>
                    </button>
                  </div>
                </Card.Body>
                <Card.Footer></Card.Footer>
              </Card>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
