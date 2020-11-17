import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ApartmentDescription.scss";

const ApartmentDescription = () => {
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

    const { name, price } = hotel;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="mt-4">
                        <div className="d-flex font-weight-bold justify-content-between">
                            <h1 className="font-weight-bold" style={{ color: "#16322E" }}>
                                {name}
                            </h1>
                            <h1 className="font-weight-bold" style={{ color: "#16322E" }}>
                                ${price}
                            </h1>
                        </div>
                        <p>
                            3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing
                            Apartment for Rent in Rangs Malancha, Melbourne.
                        </p>
                    </div>
                    <div className="mt-5">
                        <h3 className="font-weight-bold" style={{ color: "#16322E" }}>
                            Price Details-
                        </h3>
                        <ul className="list-unstyled">
                            <li>Rent/Month: $550 (negotiable)</li>
                            <li>Service Charge : 8,000/= Tk per month, subject to change</li>
                            <li>Security Deposit : 3 month’s rent</li>
                            <li>Flat Release Policy : 3 months earlier notice required</li>
                        </ul>
                    </div>
                    <div className="mt-5 mb-5">
                        <h3 className="font-weight-bold" style={{ color: "#16322E" }}>
                            Property Details-
                        </h3>
                        <ul className="list-unstyled">
                            <li>
                                Address & Area : Rangs Malancha, House-68, Road-6A (Dead End
                                Road), Dhanmondi Residential Area.
                            </li>
                            <li>Flat Size : 3000 Sq Feet.</li>
                            <li>
                                Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                            </li>
                            <li>
                                Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious
                                Drawing, Dining & Family Living Room, Highly Decorated Kitchen
                                with Store Room and Servant room with attached
                            </li>
                            <li>
                                Facilities : 1 Modern Lift, All Modern Amenities & Semi
                                Furnished.
                            </li>
                            <li>
                                Additional Facilities : a. Electricity with full generator load,
                                b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s
                                Accommodation, d. Community Conference Hall, e. Roof Top
                                Beautified Garden and Grassy Ground, f. Cloth Hanging facility
                                with CC camera
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDescription;
