import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsImgAddCart from '../component/DetailsImgAddCart/DetailsImgAddCart';
import DetailsSpecitial from '../component/DetailsSpectial/DetailsSpecitial';
import NavBar from '../component/NavBar/NavBar';
import RecomendContainer from '../component/RecomendContainer/RecomendContainer';
import clockList from '../data/clock';
import glassList from '../data/glass';
import jewelsList from '../data/jewels';
import strapList from '../data/strap';
import BackToTop from '../features/backToTop/BackToTop';
import getDataProduct from '../features/getDataProduct/getDataProduct';
import getRandom from '../features/getRandom/getRandom';
import Footer from '../component/Footer/Footer';



const Details = () => {
    const {id} =useParams();
    let data = getDataProduct;
    let product = data.getDataProduct(id);
    let renderList = [];
    renderList = getRandom(renderList.concat(clockList,jewelsList,strapList,glassList));
    renderList = renderList.splice(0,4);
    useEffect(() => {
        BackToTop()
    })
    return (
        <div>
            <NavBar/>
            <DetailsImgAddCart product={product}/>
            <DetailsSpecitial product={product}/>
            <RecomendContainer msg={'SẢN PHẨM PHÙ HỢP'} renderList={renderList}/>
            <Footer/>
        </div>
    );
};

export default Details;