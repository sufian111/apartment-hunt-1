import React from 'react';
import './Sidebar.css';
import server from '../../../../images/logos/map-marker-alt-solid 1.png';
import plus from '../../../../images/logos/plus 1.png';
import house from '../../../../images/logos/Group 33351.png';
import logo from '../../../../images/logos/Logo.png';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <div className="pb-5">
                    <img height="50px" width="100px" src={logo} alt="" />
                </div>
                <li>
                    <Link to="/bookingList">
                        <img height="20px" src={server} alt="" />  <span>Booking list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addHouse" >
                        <img height="20px" src={plus} alt="" /> <span>Add Rent House</span>
                    </Link>
                </li>
                <li>
                    <Link to="/myRent">
                        <img height="20px" src={house} alt="" /> <span>My Rent</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;