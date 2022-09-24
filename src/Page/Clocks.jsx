import React from 'react';
import clockpc from '../access/Img/bannerClock.png';
import clockmb from '../access/Img/bannerclockmobile.png';
import BannerCanChoice from '../component/BannerCanChoice/BannerCanChoice';
import ClockContainer from '../component/ClockContainer/ClockContainer';
import Footer from '../component/Footer/Footer';
import NavBar from '../component/NavBar/NavBar';


const Clocks = () => {
    return (
        <div>
            <NavBar/>
            <BannerCanChoice link1={clockpc} link2={clockmb}/>
            <ClockContainer/>
            <Footer/>
        </div>
    );
};

export default Clocks;