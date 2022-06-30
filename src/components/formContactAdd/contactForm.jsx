import React, { useState } from "react";
import { Button } from "./../button/button";
import { FaSave } from "react-icons/fa";
import { dashboard, postContact } from "../../api";

export const ContactForm = () => {
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

  const submitAddContact = (e) => {
    e.preventDefault();
    postContact(
      inputsForm.firstName,
      inputsForm.lastName,
      inputsForm.phoneMobile
    )
      .then((result) => {
        document.getElementById("mssg").innerHTML = result.data.message;
        window.location.reload("false");
      })
      .catch((err) => {
        document.getElementById("mssg").innerHTML = err.response.data.message;
      });
  };
  
  return (
    <>
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
          <div className="col">
            <Button
              type="submit"
              onclick={submitAddContact}
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
      <small id="mssg"></small>
    </>
  );
};
