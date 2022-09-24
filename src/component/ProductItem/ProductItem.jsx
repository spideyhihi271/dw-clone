import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import color from '../../features/color/color';
import formatMoney from '../../features/formatMoney/formatMoney';
import addWishList from '../../features/wishList/addWishList';
import removeWishList from '../../features/wishList/removeWishList';
import checkWishList from '../../features/wishList/checkInWishList';
import './style.css';
const ProductItem = ({product,index}) => {
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
       let isExits = checkWishList(product,index);
        if(isExits){
            remove = true;
        }else{
            remove = false;
        }
    },[])
    return (
        <div className='product__item'>
            <div className="product__item-img">
                <img src={product.img1} alt="" />
                <label htmlFor="" className='product__item-btn' idpro={product.id}><i onClick={addOrRemove} class="fa-thin fa-heart wishList__child"></i></label>
                <div className="product__item-bg"></div>
            </div>
            <Link to={`/details/product=${product.id}`} className="product__item-info">
                <p className="item__name">{product.name}</p>
                <div className="item__color" style={{backgroundColor: color(product.Dialcolor)}}></div>
                <p className="item__nameColor">{product.Dialcolor}</p>
                <p className='item__price'>{formatMoney(product.price)}</p>
            </Link>
        </div>
    );
};

export default ProductItem;