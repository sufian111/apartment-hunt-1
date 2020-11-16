import React from 'react';

const ApartmentDescripton = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="mt-4">
                        <div className="d-flex font-weight-bold justify-content-between">
                            <h1 style={{ color: "#16322E!important" }}>Family Apartment Three</h1>
                            <h1 style={{ color: "#16322E!important" }}>$256</h1>
                        </div>
                        <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                    </div>
                    <div className="mt-5">
                        <h3 className="font-weight-bold" style={{ color: "#16322E!important" }}>Price Details-</h3>
                        <p>
                            Rent/Month: $550 (negotiable)
                            Service Charge : 8,000/= Tk per month, subject to change
                            Security Deposit : 3 month’s rent
                            Flat Release Policy : 3 months earlier notice required
                        </p>
                    </div>
                    <div className="mt-5 mb-5">
                        <h3 className="font-weight-bold" style={{ color: "#16322E!important" }}>Property Details-</h3>
                        <p>
                            Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                            Flat Size : 3000 Sq Feet.
                            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDescripton;