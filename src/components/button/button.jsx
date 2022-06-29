import React from "react";

export const Button = ({type, children}) => {
  return (
    <button type={type} className="btn btn-primary d-flex align-items-center">
        {children}
    </button>
  );
};
