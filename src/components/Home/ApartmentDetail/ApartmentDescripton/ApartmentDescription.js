import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ApartmentDescription = () => {
    // const [hotel, setHotel] = useState([]);
    // const { id } = useParams();
    // const [eventId, setEventId] = useState()

    // console.log(eventId);

    // useEffect(() => {
    //     loadData()
    // }, [id])

    // const loadData = async () => {
    //     await fetch('https://hunt-apartment.herokuapp.com/bookings/' + id)
    //         .then(res => res.json())
    //         .then(data => setEventId(data))
    // }

    // const findService = eventId.filter(hotel => hotel._id == id);

    // const { bath, img, location, name, price, priceDetail, propertyDetail, shortDetail } = eventId ? eventId[0] : []

    // console.log(findService);
    // // const [] = findService;
    // console.log(findService.name);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="mt-4">
                        <div className="d-flex font-weight-bold justify-content-between">
                            <h1 style={{ color: "#16322E!important" }}>Name</h1>
                            <h1 style={{ color: "#16322E!important" }}>$254</h1>
                        </div>
                        <p>kaj kora lagbe</p>
                    </div>
                    <div className="mt-5">
                        <h3 className="font-weight-bold" style={{ color: "#16322E!important" }}>Price Details-</h3>
                        <p>
                            kaj kora lagbe
                        </p>
                    </div>
                    <div className="mt-5 mb-5">
                        <h3 className="font-weight-bold" style={{ color: "#16322E!important" }}>Property Details-</h3>
                        <p>
                            kaj kora lagbe
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDescription;