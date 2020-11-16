import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Logo.png'

const Topbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/home">
                    <img height="50px" width="100px" src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto font-weight-bold">
                        <li className="nav-item mr-4">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link className="nav-link" to="/dashboard">Concerns</Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link className="nav-link" to="/event">Event</Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link to='/login'><button className="btn button btn-success">Login</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Topbar;