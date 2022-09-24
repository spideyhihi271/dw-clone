import React, { useState } from 'react';
import Banner from '../component/Banner/Banner';
import BannerSecond from '../component/BannerSecond/bannerSecond';
import GetTheLock from '../component/GetTheLook/GetTheLock';
import NavBar from '../component/NavBar/NavBar';
import ProductList from '../component/ProductList/ProductList';
import clockList from '../data/clock';
import Loader from '../component/Loader/Loader';
import Footer from '../component/Footer/Footer';
const Home = () => {
    const [loader, setLoader] = useState(false);
    let count = clockList.length;
    let renderList = clockList;
    useState(() => {
        setLoader(true);
        setInterval(() => {
            setLoader(false)
        },2000)
    },[])
    return (
        <>
            {loader && <Loader/>}
            {loader === false && 
                <div>
                    <NavBar/>
                    <Banner/>
                    <ProductList productList={renderList} />
                    <BannerSecond/>
                    <GetTheLock/>
                    <Footer/>
                </div>
            }
            
        </>
        
    );
};

export default Home;