import React from "react";
import { FaSearchLocation } from "react-icons/fa";

export const SearchItems = (searchItem, searchParms) => {
  return (
    <div>
      <form className="d-flex align-items-center justify-content-evenly">
        <FaSearchLocation />
        <input
          type="text"
          id="staticEmail2"
          value={searchItem}
          onChange={searchParms}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};
