import React from 'react';
import Topbar from '../../Shared/Topbar/Topbar';
import ApartmentDescripton from './ApartmentDescripton/ApartmentDescripton';
import ApartmentHeader from './ApartmentHeader/ApartmentHeader';
import ApartmentInfo from './ApartmentInfo/ApartmentInfo';

const apartmentDetail = () => {
    return (
        <div>
            <Topbar />
            <ApartmentHeader />
            <ApartmentInfo />
            <ApartmentDescripton />
        </div>
    );
};

export default apartmentDetail;