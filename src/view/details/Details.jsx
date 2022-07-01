import React, { useState } from "react";
import { MdCancel, MdCheck } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { updateContactByID } from "../../api";
import { Button } from "./../../components/button/button";
import './Details.css'

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
      <form onSubmit={ submitUpdate} className='p-4'>
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
          <div className="buttons_container">
            <Button
              type="submit"
              onclick={cancelUpdatedContact}
              btnPrimary='btn-warning'
              children={
                <>
                  <MdCancel className="pr-2" />
                  <small>Cancel</small>
                </>
              }
            />
            <Button
              type="submit"
              btnPrimary='btn-success'
              children={
                <>
                  <MdCheck className="pr-2" />
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
