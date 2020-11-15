import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Logo.png'

const Topbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a class="navbar-brand" href="#">
                    <img height="50px" width="100px" src={logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto font-weight-bold">
                        <li class="nav-item mr-4">
                            <Link class="nav-link" to="/home">Home</Link>
                        </li>
                        <li class="nav-item mr-4">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item mr-4">
                            <Link class="nav-link" to="/services">Services</Link>
                        </li>
                        <li class="nav-item mr-4">
                            <Link class="nav-link" to="/concern">Concerns</Link>
                        </li>
                        <li class="nav-item mr-4">
                            <Link class="nav-link" to="/event">Event</Link>
                        </li>
                        <li class="nav-item mr-4">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item mr-4">
                            <button className="btn button btn-success">Login</button>
                        </li>
                    </ul>
                </div>

            </div>
        </nav >
    );
};

export default Topbar;