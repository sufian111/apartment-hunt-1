import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../Sidebar/Sidebar';
import RentTable from './RentTable';

const MyRent = () => {
    const { userData } = useContext(UserContext);
    const [user, setUser] = userData;
    console.log(user);
    return (
        <div>
            <div className="row container-fluid">
                <div className=" col-md-2 py-5 px-4 col-sm-12 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 pt-5">
                    <div className="d-flex justify-content-between">
                        <h1>Booking List</h1>
                        <h1 >{user.name}</h1>
                    </div>
                    <div className="p-4" style={{ backgroundColor: "#E5E5E5", height: "100vh" }}>
                        <RentTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRent;