import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    return (
        <div className="row container">
            <div className=" col-md-2 py-5 px-4 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-6 col-12">
                <div className="d-flex justify-content-between">
                    <h1>Booking List</h1>
                    <h1 >User</h1>
                </div>
                <div>

                </div>
            </div>
        </div>

    );
};

export default BookingList;