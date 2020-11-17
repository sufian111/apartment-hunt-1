import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../Sidebar/Sidebar';
import InputedItem from './InputedItem';

const AddHouse = () => {
    const { userData } = useContext(UserContext);
    const [user, setUser] = userData;
    return (
        <div className="row container-fluid">
            <div className=" col-md-2 py-5 px-4 col-sm-12 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12 pt-5">
                <div className="d-flex justify-content-between">
                    <h1>Add Rent House</h1>
                    <h1 >{user.name}</h1>
                </div>
                <div className="p-4" style={{ backgroundColor: "#E5E5E5" }}>
                    <InputedItem></InputedItem>
                </div>
            </div>
        </div>
    );
};

export default AddHouse;






    //                     </div >
    // <div className="col-md-6 col-sm-12">

    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         
    //     </form>