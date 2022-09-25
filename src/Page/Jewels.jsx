import React from 'react';
import BannerCanChoice from '../component/BannerCanChoice/BannerCanChoice';
import Footer from '../component/Footer/Footer';
import JewelContainer from '../component/JewelContainer/JewelsContainer';
import NavBar from '../component/NavBar/NavBar';

const Jewels = () => {
    return (
        <div>
            <NavBar/>
            <BannerCanChoice link1={'https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/3k39f1hPS7MdOfzz1n2TXv/2d4ccee0b87779225eba40f2729568a3/bracelets-desk-hero.jpg'} link2={'https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/3k39f1hPS7MdOfzz1n2TXv/2d4ccee0b87779225eba40f2729568a3/bracelets-desk-hero.jpg'}/>
            <JewelContainer/>
            <Footer/>
        </div>
    );
};

export default Jewels;