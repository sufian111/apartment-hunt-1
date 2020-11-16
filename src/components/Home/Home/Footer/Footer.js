import React from 'react';
import map from '../../../../images/logos/map-marker-alt-solid 1.png';
import facebook from '../../../../images/logos/Vector.png';
import instagram from '../../../../images/logos/Vector-1.png';
import linkedIn from '../../../../images/logos/Vector-2.png';
import youtube from '../../../../images/logos/Vector-3.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#275A53" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 p-5">
                        <div className="d-flex justify-content-around">
                            <div>
                                <img height="20px" src={map} alt="" />
                            </div>
                            <div className="text-light">
                                <ul className="list-unstyled">
                                    <li>H#340 (4th Floor), Road #24,</li>
                                    <li>New DOHS, Mohakhali, Dhaka, Bangladesh</li>
                                    <li>Phone: 018XXXXXXXX</li>
                                    <li>E-mail: info@company.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2  text-light p-4">
                        <h4>Company</h4>
                        <ul className="list-unstyled">
                            <Link className="text-white"><li>About</li></Link>
                            <Link className="text-white"><li>Site Map</li></Link>
                            <Link className="text-white"><li>Support Center</li></Link>
                            <Link className="text-white"><li>Terms Conditions</li></Link>
                            <Link className="text-white"><li>Submit Listing</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-2 text-light p-4">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <Link className="text-white"><li>Quick Links</li></Link>
                            <Link className="text-white"><li>Rentals</li></Link>
                            <Link className="text-white"><li>Sales</li></Link>
                            <Link className="text-white"><li>Contact</li></Link>
                            <Link className="text-white"><li>Terms Conditions</li></Link>
                            <Link className="text-white"><li>Our blog</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-3 text-light p-4">
                        <h4>About us</h4>
                        <ul className="list-unstyled">
                            <li>We are the top real estate </li>
                            <li>agency in Sydney, with agents </li>
                            <li>available to answer any </li>
                            <li>question 24/7.</li>
                        </ul>
                        <div className="d-flex justify-content-between">
                            <a href="#" className="text-white"><img height="40px" src={facebook} alt="" /></a>
                            <a href="#" className="text-white"><img height="40px" src={instagram} alt="" /></a>
                            <a href="#" className="text-white"><img height="40px" src={linkedIn} alt="" /></a>
                            <a href="#" className="text-white"><img height="40px" src={youtube} alt="" /></a>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Footer;