import React, { useState } from 'react';
import serviceData from '../../../Shared/FakeData/ServiceData';
import BodyFooterItem from '../BodyFooterItem/BodyFooterItem';

const BodyFooter = () => {
    const [service, setService] = useState(serviceData);
    return (
        <div className="container mt-4 mb-4">
            <div className="text-center mb-4">
                <small className="h6" style={{ color: "#16322E" }}>Service</small>
                <h1 className="font-weight-bold" style={{ color: "#16322E" }}>
                    We're an agency tailored to all <br />
                    clients' needs that always delivers
                </h1>
            </div>
            <div className="d-flex justify-content-center">
                {
                    service.map(service => <BodyFooterItem key={Math.random() + 1} service={service}></BodyFooterItem>)
                }
            </div>
        </div>
    );
};

export default BodyFooter;