import React, { useEffect, useState } from 'react';
import NavBar from '../component/NavBar/NavBar';
import RenderWishList from '../component/RenderWishList/RenderWishList';

const WishList = () => {
    return (
        <div>
            <NavBar/>
            <RenderWishList/>
        </div>
    );
};

export default WishList;