import React, { useState, useEffect } from "react";
import { FaSearch, FaTrashAlt, FaPhoneAlt } from "react-icons/fa";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ModalComponent } from "../../components/modal/modal";
import { dashboard, deleteContactByID } from "../../api";

export const Dashboard = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dashboard()
      .then((resp) => setContactList(resp.data))
      .catch((error) => {throw error});
  }, []);

  const deleteUser = (e) => {
    const id = e.currentTarget.id;
    deleteContactByID(id)
      .then((resp) => {
        window.location.reload("false");
      })
      .catch((error) => {throw error});
  };

  const UdpateUser = (e) => {
    const id = e.currentTarget.id;
    navigate(`/contact/${id}`, { replace: true });
  };

  const searchParms = (e) => {
    setSearchItem(e.target.value);
    if (searchItem !== "") {
      const filteredData = contactList.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(contactList);
    }
  };

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
        <form className="d-flex align-items-center justify-content-center">
          <FaSearch />
          <input
            type="search"
            value={searchItem}
            onChange={searchParms}
            placeholder="Filter your contact"
          />
        </form>
      </div>
      <div>
        <ul className="list-group">
          {searchItem.length > 1
            ? filteredResults.map((item) => {
                return (
                  <li
                    className="list-group-item"
                    id={`${item.contactid}`}
                    key={`${item.contactid}`}
                    name={`${item.contactid}`}
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
                        </div>
                      </Card.Body>
                    </Card>
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
                        </div>
                      </Card.Body>
                    </Card>
                  </li>
                );
              })}
        </ul>
      </div>
    </main>
  );
};
