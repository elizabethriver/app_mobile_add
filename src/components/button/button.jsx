import React from "react";

export const Button = ({type, children, onclick}) => {
  return (
    <button onClick={onclick} type={type} className="btn btn-primary d-flex align-items-center">
        {children}
    </button>
  );
};
