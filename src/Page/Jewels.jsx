import React from 'react';
import BannerCanChoice from '../component/BannerCanChoice/BannerCanChoice';
import Footer from '../component/Footer/Footer';
import JewelContainer from '../component/JewelContainer/JewelsContainer';
import NavBar from '../component/NavBar/NavBar';

const Jewels = () => {
    return (
        <div>
            <NavBar/>
            <BannerCanChoice link1={'https://www.dongho5sao.com/wp-content/uploads/2016/09/danielwellington-daniel-wellington-watch-bracelet-classic-cuff-1-1140x445.jpg'} link2={'https://www.dongho5sao.com/wp-content/uploads/2016/09/danielwellington-daniel-wellington-watch-bracelet-classic-cuff-1-1140x445.jpg'}/>
            <JewelContainer/>
            <Footer/>
        </div>
    );
};

export default Jewels;