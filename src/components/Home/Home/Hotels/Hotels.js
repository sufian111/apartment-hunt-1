import React from 'react';
import bed1 from '../../../../images/logos/bed 1.png';
import bath1 from '../../../../images/logos/bath 1.png';
import mapMarker from '../../../../images/logos/map-marker-alt-solid 1.png';

const Hotels = ({ hotel }) => {
    const { img, name, location, bed, bath, price } = hotel;
    return (
        <div className="col-md-4 col-sm-12 mt-2 mb-2">
            <div className="card-deck">
                <div className="card">
                    <img src={img} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 style={{ color: "#16322E!important" }} class="card-title font-weight-bold">{name}</h4>
                        <small className="card-text text-muted"><strong><img height="20px" src={mapMarker} alt="" />  {location}</strong></small>
                        <div className="d-flex justify-content-between">
                            <small className="card-text text-muted"><strong><img height="20px" src={bed1} alt="" /> {bed}</strong></small>
                            <small className="card-text text-muted"><strong><img height="20px" src={bath1} alt="" /> {bath}</strong></small>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="d-flex justify-content-between">
                            <h4 className="font-weight-bold" style={{ color: "#16322E!important" }}>${price}</h4>
                            <button className="btn button">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;