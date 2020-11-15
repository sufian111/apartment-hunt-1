import React, { useState } from 'react';
import FakeData from '../../../Shared/FakeData/HotelData';
import Hotels from '../Hotels/Hotels';
import './Body.css';

const Body = () => {
    const [hotels, setHotels] = useState(FakeData);
    return (
        <div className="container mt-4">
            <div className="text-center mb-3">
                <small style={{ color: "#275A53" }}>House Rent</small>
                <h1 className="font-weight-bold" style={{ color: "#275A53" }}>Discover the latest Rent <br />
                    available today
                </h1>
            </div>
            <div className="row">
                {
                    hotels.map(hotel => <Hotels key={Math.random() + 1} hotel={hotel}></Hotels>)
                }
            </div>
        </div>
    );
};

export default Body;