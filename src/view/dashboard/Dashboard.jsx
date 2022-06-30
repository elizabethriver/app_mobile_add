import React, { useState, useEffect } from "react";
import { FaMobileAlt, FaSearch, FaTrashAlt, FaPhoneAlt } from "react-icons/fa";
import { Button, Card, Toast } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ModalComponent } from "../../components/modal/modal";
import { dashboard, deleteContactByID } from "../../api";
import { Alert } from "bootstrap";
import { ToastBox } from "./../../components/toast/Toast";
// import { EditMode } from "../../editor";
import { Details } from "./../details/Details";

export const Dashboard = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showEx, setShowEx] = useState(false);
  const [contactList, setContactList] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEx = () => setShow(false);
  const handleShowEx = () => setShowEx(true);
  const [q, setQ] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  useEffect(() => {
    dashboard()
      .then((resp) => setContactList(resp.data))
      .catch((error) => console.error(error));
  }, []);
  const deleteUser = (e) => {
    console.log(e.currentTarget.id);
    const id = e.currentTarget.id;
    console.log(id, "id");

    deleteContactByID(id)
      .then((resp) => {
        window.location.reload("false");
      })
      .catch((error) => console.error(error));
  };
  //   const { editState, editMode, removeEditMode } = EditMode();
  const UdpateUser = (e) => {
    console.log(e.currentTarget.id);
    const id = e.currentTarget.id;
    console.log(id, "id");
    navigate(`/contact/${id}`, { replace: true });
  };

  //   const [searchParam] = useState();
  const searchParms = (e) => {
    setQ(e.target.value);
    console.log(q);
    if (q !== "") {
      const filteredData = contactList.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(q.toLowerCase());
      });
      console.log(filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(contactList);
    }
  };
  useEffect(() => {
    // our fetch codes
  }, []);
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
          <input
            type="text"
            id="staticEmail2"
            value={q}
            onChange={searchParms}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      <div>
        <ul className="list-group">
          {q.length > 1
            ? filteredResults.map((item) => {
                return (
                  <li
                    className="list-group-item"
                    id={`${item.contactid}`}
                    key={`${item.contactid}`}
                    name={`${item.contactid}`}
                  >
                    <NavLink
                      to={`contact/${item.contactid}`}
                      className={({ isActive }) =>
                        isActive ? "classNav_active" : "classNav_notActive"
                      }
                      data={item}
                      // onClick={goDetails}
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
                              <FaTrashAlt className="m-auto" />
                              <small>Delete</small>
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning"
                              onClick={UdpateUser}
                              id={`${item.contactid}`}
                            >
                              <FaTrashAlt className="m-auto" />
                              <small>Update</small>
                            </button>
                            <ModalComponent
                              showEx={showEx}
                              handleCloseEx={handleCloseEx}
                            />
                          </div>
                        </Card.Body>
                      </Card>
                    </NavLink>
                  </li>
                );
              })
            : contactList.map((item) => {
                return (
                  <li
                    className="list-group-item"
                    id={`${item.contactid}`}
                    key={`${item.contactid}`}
                    name={`${item.contactid}`}
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
                            <FaTrashAlt className="m-auto" />
                            <small>Delete</small>
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={UdpateUser}
                            id={`${item.contactid}`}
                          >
                            <FaTrashAlt className="m-auto" />
                            <small>Update</small>
                          </button>
                          <ModalComponent
                            showEx={showEx}
                            handleCloseEx={handleCloseEx}
                          />
                        </div>
                      </Card.Body>
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
