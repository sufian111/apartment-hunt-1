import React from 'react';
import error from '../../images/logos/error.gif';
import Topbar from '../Shared/Topbar/Topbar';

const NotFound = () => {
    return (
        <>
            <Topbar />
            <div style={{ paddingBottom: "15vh", backgroundColor: "#E5E5E5" }} className="w-100 text-center">
                <div>
                    <h2 className="pt-5 text-danger font-weight-bold">404! ERROR</h2>
                    <h3 className="text-danger font-weight-bold">PAGE NOT FOUND!</h3>
                    <img className="w-25" src={error} alt="" />
                </div>
            </div>
        </>
    );
};

export default NotFound;