import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer/Footer';
import NavBar from '../component/NavBar/NavBar';
import RenderWishList from '../component/RenderWishList/RenderWishList';

const WishList = () => {
    return (
        <div>
            <NavBar/>
            <RenderWishList/>
            <Footer/>
        </div>
    );
};

export default WishList;