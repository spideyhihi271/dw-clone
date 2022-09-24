import React from 'react';
import formatMoney from '../../features/formatMoney/formatMoney';
import color from '../../features/color/color';
import './style.css';

const AddCartNotice = ({product,size}) => {
    return (
        <div className='addCartNotice' id={`addCartNotice__${product.id}`}>
            <div className="aCN__title">
                <i class="fa-thin fa-circle-check"></i>
                <p>Sản phẩm đã được thêm vào giỏ hàng</p>
                <button><i class="fa-thin fa-xmark"></i></button>
            </div>
            <div className="aCN__info">
                <div className="aCN__info-img">
                    <img src={product.img1} alt="" />
                </div>
                <div className="aCN__info-pro">
                    <p>{product.name}</p>
                    <p className='color__line' ><div className='colorDiv' style={{backgroundColor: color(product.Dialcolor)}}></div>{product.Dialcolor}</p>
                    <p className='aCN__info-proSize'></p>
                    <p>{formatMoney(product.price)}</p>
                </div>
            </div>
        </div>
    );
};

export default AddCartNotice;