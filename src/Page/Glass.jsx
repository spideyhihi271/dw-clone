import React from 'react';
import BannerCanChoice from '../component/BannerCanChoice/BannerCanChoice';
import GlassContainer from '../component/GlassContainer/GlassContainer';
import NavBar from '../component/NavBar/NavBar';

const Glass = () => {
    return (
        <div>
            <NavBar/>
            <BannerCanChoice link1={'https://static.wixstatic.com/media/65047e_4e4d4aed54904833885caae30eced6d8~mv2.jpg/v1/fill/w_1920,h_1080,al_c/65047e_4e4d4aed54904833885caae30eced6d8~mv2.jpg'} link2={'https://static.wixstatic.com/media/65047e_4e4d4aed54904833885caae30eced6d8~mv2.jpg/v1/fill/w_1920,h_1080,al_c/65047e_4e4d4aed54904833885caae30eced6d8~mv2.jpg'}/>
            <GlassContainer/>
        </div>
    );
};

export default Glass;