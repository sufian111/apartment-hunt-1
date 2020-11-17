import React, { useEffect, useState } from "react";
import apartment from "../../../../images/images/Rectangle 396.png";
import apartment2 from "../../../../images/images/Rectangle 398.png";
import apartment3 from "../../../../images/images/Rectangle 403.png";
import apartment4 from "../../../../images/images/Rectangle 404.png";
import apartment5 from "../../../../images/images/Rectangle 405.png";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ApartmentInfo = () => {
  const [hotel, setHotel] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadData()
  }, [id])

  const loadData = async () => {
    await fetch('https://hunt-apartment.herokuapp.com/bookings/' + id)
      .then(res => res.json())
      .then(data => setHotel(data))
  }
  const { img } = hotel;


  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch("https://hunt-apartment.herokuapp.com/rents", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="w-100">
            <img height="350px" width="730px" src={img || "https://www.businessobserverfl.com/sites/default/files/201679_standard.jpeg"} alt="" />
          </div>
          <div className="d-flex justify-content-between w-100 mt-4">
            <img height="110px" width="170px" src={apartment2} alt="" />
            <img height="110px" width="170px" src={apartment3} alt="" />
            <img height="110px" width="170px" src={apartment4} alt="" />
            <img height="110px" width="170px" src={apartment5} alt="" />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <form
            className="p-4"
            style={{ backgroundColor: "#F4F4F4" }}
            onSubmit={handleSubmit(onSubmit)}
          >

            <input
              className="form-control"
              name="userName"
              placeholder="Full Name"
              required
              ref={register({ required: true })}
            />
            <br />

            <input
              className="form-control"
              name="phone"
              placeholder="Phone No."
              required
              ref={register({ required: true })}
            />
            <br />

            <input
              className="form-control"
              name="email"
              placeholder="Email Address"
              required
              ref={register({ required: true })}
            />
            <br />

            <textarea
              className="form-control"
              name="message"
              placeholder="Message..."
              cols="30"
              rows="7"
              massage="true"
              required
              ref={register({ required: true })}
            />
            <br />

            <input
              className="btn button w-100"
              type="submit"
              value="Request Booking"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
