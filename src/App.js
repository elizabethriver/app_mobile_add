import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { FaMobileAlt, FaSearch, FaTrashAlt, FaPhoneAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { ModalComponent } from "./components/modal/modal";
import { Card } from "react-bootstrap";
import { dashboard, deleteContactByID } from "./api";
import { NotFound } from "./view/notFound/notFound";
import { Details } from "./view/details/Details";
import { Dashboard } from "./view/dashboard/Dashboard";

function App() {
  // const [show, setShow] = useState(false);
  // const [contactList, setContactList] = useState([]);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const deleteUser = (id) => {
  //   console.log("delete");
  //   deleteContactByID(id)
  //     .then((resp) => console.log(resp.data))
  //     .catch((error) => console.error(error));
  // };

  // useEffect(() => {
  //   dashboard()
  //     .then((resp) => setContactList(resp.data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title-container">
          <FaMobileAlt />
          <h1>Phone Book App</h1>
        </div>
      </header>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="contact/:contactId" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <main>
        <Dashboard/>
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
            {contactList.map((item) => {
              return (
                <li
                  className="list-group-item"
                  id={`${item.contactid}`}
                  key={item.contactid}
                >
                  <Card style={{ width: "auto" }}>
                    <Card.Body className="d-flex align-items-center justify-content-between">
                      <div>
                        <Card.Title>
                          {item.firstname}
                          {""}
                          {item.lastname}
                        </Card.Title>
                        <Card.Subtitle className=" text-muted">
                          <FaPhoneAlt className="me-2" />
                          {item.numberphone}
                        </Card.Subtitle>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={deleteUser}
                          id={`${item.contactid}`}
                        >
                          <FaTrashAlt className="me-2" />
                          <small>Delete</small>
                        </button>
                      </div>
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </main> */}
    </div>
  );
}

export default App;
