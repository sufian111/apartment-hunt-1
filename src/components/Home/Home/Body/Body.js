import React, { useEffect, useState } from "react";
import Hotels from "../Hotels/Hotels";
import "./Body.css";
import { css } from "@emotion/core";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Body = () => {
  const [hotels, setHotels] = useState([]);
  // Data Loaded
  useEffect(() => {
    fetch("https://hunt-apartment.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, [hotels]);

  return (
    <div className="container mt-4">
      <div className="text-center mb-3">
        <small style={{ color: "#275A53" }}>House Rent</small>
        <h1 className="font-weight-bold" style={{ color: "#275A53" }}>
          Discover the latest Rent <br />
          available today
        </h1>
      </div>
      <div className="row">
        {hotels.length === 0 && (
          <RingLoader css={override} size={80} color={"#0f3057"} />
        )}
        {hotels.map((hotel) => (
          <Hotels key={Math.random() + 1} hotel={hotel}></Hotels>
        ))}
      </div>
    </div>
  );
};

export default Body;
