import React from 'react';

const BodyFooterItem = ({ service }) => {
    const { serviceName, serviceDetail, img } = service;
    return (
        <div>
            <div className="col-md-4 col-sm-12">
                <div className="card text-center" style={{ width: "18rem" }}>
                    <div className="d-flex justify-content-center pt-3">
                        <img height="90px" width="90px" src={img} alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="font-weight-bold" style={{ color: "#16322E" }}>{serviceName}</h5>
                        <p className="text-muted">
                            {serviceDetail}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyFooterItem;