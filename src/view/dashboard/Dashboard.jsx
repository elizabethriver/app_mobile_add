import React, { useState, useEffect } from "react";
import { FaMobileAlt, FaSearch, FaTrashAlt, FaPhoneAlt } from "react-icons/fa";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ModalComponent } from "../../components/modal/modal";
import { dashboard, deleteContactByID } from "../../api";
import { Details } from "../details/Details";

export const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [contactList, setContactList] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    dashboard()
      .then((resp) => setContactList(resp.data))
      .catch((error) => console.error(error));
  }, []);
  const deleteUser = (item) => {
    console.log("delete");
    console.log(item.contactid);
    const id = document.getElementById(`${this.id}`);
    console.log(id, "id");
    // deleteContactByID()
    //   .then((resp) => console.log(resp.data))
    //   .catch((error) => console.error(error));
  };
  const goDetails = () => {
    return <Details/>
  }
  return (
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
          {contactList.map((item) => {
            return (
              <li
                className="list-group-item"
                id={`${item.contactid}`}
                key={item.contactid}
              >
                {/* <NavLink
                  to={`contact/${item.contactid}`}
                  className={({ isActive }) =>
                    isActive ? "classNav_active" : "classNav_notActive"
                  }
                  data={item}
                // onClick={goDetails}
                > */}
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
                {/* </NavLink> */}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
