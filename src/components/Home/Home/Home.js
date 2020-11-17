import React from 'react';
import Topbar from '../../Shared/Topbar/Topbar';
import Body from './Body/Body';
import BodyFooter from './BodyFooter/BodyFooter';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Topbar />
            <Header />
            <Body />
            <BodyFooter />
            <Footer />
        </div>
    );
};

export default Home;