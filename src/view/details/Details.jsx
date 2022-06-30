import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaPhoneAlt, FaSave } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { EditMode } from "../../editor";
import { Button } from './../../components/button/button';


export const Details = (item) => {
  let params = useParams();
  const [inputsForm, setInputsForm] = useState({
    firstName: "",
    lastName: "",
    phoneMobile: "",
  });
  const onChangeInputsForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputsForm({ ...inputsForm, [name]: value });
    console.log(inputsForm);
  };
  const { editState, editMode, removeEditMode } = EditMode();
//   const submitAddContact = (e) => {
//     e.preventDefault();
//     postContact(
//       inputsForm.firstName,
//       inputsForm.lastName,
//       inputsForm.phoneMobile
//     )
//       .then((result) => {
//         document.getElementById("mssg").innerHTML = result.data.message;
//       })
//       .catch((err) => {
//         document.getElementById("mssg").innerHTML = err.response.data.message;
//       });
//   };

  return (
    <>
    {editState ? (
      <form  removeEditMode={removeEditMode}>
      <fieldset>
        <label htmlFor="staticName">
          First Name
          <input
            type="text"
            className="form-control form-control-sm"
            id="firstName"
            value={inputsForm.firstName}
            onChange={onChangeInputsForm}
            name="firstName"
          />
        </label>
        <label htmlFor="staticLastName">
          Last Name
          <input
            type="text"
            className="form-control form-control-sm"
            id="lastName"
            value={inputsForm.lastName}
            onChange={onChangeInputsForm}
            name="lastName"
          />
        </label>
        <label htmlFor="inputMobile">
          Telephone mobile
          <input
            type="text"
            className="form-control form-control-sm"
            id="phoneMobile"
            value={inputsForm.phoneMobile}
            onChange={onChangeInputsForm}
            name="phoneMobile"
          />
        </label>
        <div className="col">
          <Button
            type="submit"
            // onclick={submitAddContact}
            children={
              <>
                <FaSave className="pr-2" />
                <small>Save</small>
              </>
            }
          ></Button>
        </div>
      </fieldset>
    </form>
    ) : (
      <Card editMode={editMode} style={{ width: "auto" }}>
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
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
    )}
  </>
  );
};
