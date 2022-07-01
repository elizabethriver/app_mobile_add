import React, { useState } from "react";
import { Button } from "./../button/button";
import { MdDone } from "react-icons/md";
import { postContact } from "../../api";

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
      <form onSubmit={submitAddContact}>
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
              required
              pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
              title="Just type letters is allowed"
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
              required
              pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
              title="Just type letters is allowed"
            />
          </label>
          <label htmlFor="inputMobile">
            Telephone mobile
            <input
              type="tel"
              className="form-control form-control-sm"
              id="phoneMobile"
              value={inputsForm.phoneMobile}
              onChange={onChangeInputsForm}
              name="phoneMobile"
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="Just type numbers are allowed"
            />
            <small>Format: 123-456-7890</small>
          </label>
          <div className="align-items-end m-3">
            <Button
              type="submit"
              size="sm"
              btnPrimary="btn-success"
              children={
                <>
                  <MdDone className="pr-2" />
                  <small>Save</small>
                </>
              }
            />
          </div>
        </fieldset>
      </form>
      <small id="mssg"></small>
    </>
  );
};
