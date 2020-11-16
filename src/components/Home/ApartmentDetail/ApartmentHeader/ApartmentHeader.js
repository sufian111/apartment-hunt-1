import React from 'react';
import './ApartmentHeader.css';

const ApartmentHeader = () => {
    return (
        <div className="DetailBanner">
            <div className="DetailBanner2">
                <div style={{ display: "inline-block", overflow: "hidden" }} className="input-content m-auto">
                    <h1 className="text-light">Apartment</h1>
                </div>
            </div>
        </div>
    );
};

export default ApartmentHeader;