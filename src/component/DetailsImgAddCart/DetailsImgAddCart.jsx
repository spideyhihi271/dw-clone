import React, { useEffect } from 'react';
import DetailsImg from '../DetailsImg/DetailsImg';
import InfoDetails from '../InfoDetails/InfoDetails';
import addWishList from '../../features/wishList/addWishList';
import removeWishList from '../../features/wishList/removeWishList';
import checkWishList from '../../features/wishList/checkInWishList';
import './style.css';

const DetailsImgAddCart = ({product}) => {
    let imgs = [];
    imgs = imgs.concat(product.img1, product.img2, product.img3);

    let remove = false;
    const addWishListPage = (e) => {
        addWishList(e);
    }
    const removeWishListPage = (e) => {
        removeWishList(e);
    }
    const addOrRemove = (e) => {
        if(remove){
            removeWishListPage(e);
            remove = false;
        }else{
            addWishListPage(e);
            remove = true;
        }
    }
    useEffect(() => {
       let isExits = checkWishList(product);
        if(isExits){
            remove = true;
        }else{
            remove = false;
        }
    },[])
    return (
        <>
            <div className='details__img-addcart'>
                <div className="details__img">
                <DetailsImg imgList={imgs}/>
                <button className="detail__addwishlist" idpro={product.id}><i onClick={addOrRemove} class="fa-thin fa-heart wishList__child"></i></button>
                </div>
                <div className="details__addcart">
                    <InfoDetails product={product} />
                </div>
            </div>
        </>
       
    );
};

export default DetailsImgAddCart;