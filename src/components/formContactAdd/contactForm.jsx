import React from "react";

export const ContactForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="staticName">
          First Name
          <input
            type="text"
            className="form-control form-control-sm"
            id="staticName"
          />
        </label>
        <label htmlFor="staticLastName">
          Last Name
          <input
            type="text"
            className="form-control form-control-sm"
            id="staticLastName"
          />
        </label>
        <label htmlFor="inputMobile">
          Telephone mobile
          <input
            type="text"
            className="form-control form-control-sm"
            id="inputMobile"
          />
        </label>
      </div>
    </form>
  );
};
