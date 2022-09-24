import React from 'react';
import './style.css';
const BannerCanChoice = ({link1,link2}) => {
    return (
        <div className='bannerCanChoice'>
            <img src={link1} alt="" className='bannerCC__item1' />
            <img src={link2} alt="" className='bannerCC__item2' />
        </div>
    );
};

export default BannerCanChoice;