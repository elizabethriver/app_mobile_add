import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import './Header.css'

export const Header = () => {
  return (
    <>
      <header className="App-header">
        <div className="header-title-container">
          <FaMobileAlt />
          <h1>Phone Book App</h1>
        </div>
      </header>
    </>
  );
};
