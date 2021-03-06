import React, { useState } from "react";
import "./Header.css";
import FakeData from "../../../Shared/FakeData/HotelData";

const Header = () => {
  return (
    <div className="banner">
      <div className="banner2">
        <div
          style={{ display: "inline-block", overflow: "hidden" }}
          className="input-content m-auto"
        >
          <h1 className="text-light">FIND YOUR HOUSE RENT</h1>
          <div className="d-flex mt-3">
            <input
              className="form-control w-75"
              type="text"
              placeholder="Search..."
            />
            <button className="btn button ml-3">Find Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
