import React from 'react';
import BannerCanChoice from '../component/BannerCanChoice/BannerCanChoice';
import Footer from '../component/Footer/Footer';
import NavBar from '../component/NavBar/NavBar';
import WatchStrapContainer from '../component/WatchStrapContainer/WatchStrapContainer'
const WatchStrap = () => {
    return (
        <div>
            <NavBar/>
            <BannerCanChoice link1={'https://i.ytimg.com/vi/Vp7jnuSh6Mc/maxresdefault.jpg'} link2={'https://i.ytimg.com/vi/Vp7jnuSh6Mc/maxresdefault.jpg'}/>
            <WatchStrapContainer />
            <Footer/>
        </div>
    );
};

export default WatchStrap;