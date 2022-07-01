import React from "react";

export const Button = ({ type, children, onclick, btnPrimary }) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`btn ${btnPrimary} d-flex align-items-center`}
    >
      {children}
    </button>
  );
};
