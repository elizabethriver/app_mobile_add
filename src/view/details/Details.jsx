import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { updateContactByID } from "../../api";
import { Button } from "./../../components/button/button";

export const Details = () => {
  let navigate = useNavigate();
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
  };

  const cancelUpdatedContact = () => {
    navigate("/");
  };
  
  const submitUpdate = (e) => {
    e.preventDefault();
    updateContactByID(
      params.contactId,
      inputsForm.firstName,
      inputsForm.lastName,
      inputsForm.phoneMobile
    )
      .then((result) => {
        document.getElementById("mssg").innerHTML = result.data.message;
        navigate("/");
      })
      .catch((err) => {
        document.getElementById("mssg").innerHTML =
          "This number telephone is duplicated";
        setTimeout(() => {
          document.getElementById("mssg").innerHTML = "";
        }, 5000);
      });
  };

  return (
    <main>
      <form>
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
          <div className="buttons_container">
            <Button
              type="submit"
              onclick={cancelUpdatedContact}
              children={
                <>
                  <FaSave className="pr-2" />
                  <small>Cancel</small>
                </>
              }
            />
            <Button
              type="submit"
              onclick={submitUpdate}
              children={
                <>
                  <FaSave className="pr-2" />
                  <small>Save</small>
                </>
              }
            />
          </div>
        </fieldset>
      </form>
      <small id="mssg"></small>
    </main>
  );
};
