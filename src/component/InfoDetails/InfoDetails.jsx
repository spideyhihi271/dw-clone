import React, { useState, useEffect } from 'react';
import './style.css';
import color from '../../features/color/color'
import addCart from '../../features/cart/addCart';
import AddCartNotice from '../AddCartNotice/AddCartNotice';
import formatMoney from '../../features/formatMoney/formatMoney';

const InfoDetails = ({product}) => {
    let size = product.size[0];
    // Chọn size mặc định
    useEffect(() => {
        let sizeStart = () => {
            document.getElementsByClassName('size__item')[0].classList.add('active');
        }
        sizeStart()
    },[])
    // Set lại size
    const getSize = (e) =>{
        let sizeInput = e.target.getAttribute('value');
        size = sizeInput;
        console.log("size now",size);
        // Set tất cả unactive
        let list = document.getElementsByClassName('size__item');
        list = Object.values(list);
        list.map(item => {
            item.classList.remove('active');
        })
        // Set class active
        e.target.parentElement.classList.add('active');
    }
    // AddCart
    const handelAddCart = () => {
        addCart(product,size);
        let container = document.getElementById(`addCartNotice__${product.id}`);
        container.getElementsByClassName('aCN__info-proSize')[0].innerHTML = `Size: ${size}`;
        container.classList.toggle('active');
        setTimeout(()=>{
            container.classList.toggle('active');
        },1000)
    }

    return (
        <div className='detailInfo__container'>
            <div className="details__img-addcart-tag">
                <p>NEW</p>
            </div>
            <div className="detainInfo__container-item">
                <p className="container__item-name">{product.name}</p>
                <p className="container__item-price">{formatMoney(product.price)}</p>
            </div>
            <div className="detailInfo__colorSizeHow">
                <div className="detailInfo__colorSizeHow-color">
                    <p>MÀU SẮC</p>
                    <div style={{backgroundColor: color(product.Dialcolor)}}></div>
                </div>
                <div className="detailInfo__colorSizeHow-size">
                    <p>KÍCH THƯỚC</p>
                    <div className='size__list'>
                        {product.size.map((size,index) => 
                                <div className='size__item' key={index}>
                                    <label htmlFor={size} className="size__item-label" onClick={getSize}  value={size}>{size}</label>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="detailInfo__colorSizeHow-how">
                    <p>VỀ SIZE CỦA BẠN</p>
                </div>
            </div>
            <div className="detail__container-addcart">
                <button onClick={handelAddCart}> THÊM VÀO GIỎ HÀNG </button>
            </div>
            <div className="detail__container-service">
                <ul>
                    <li>- FREESHIP</li>
                    <li>- HOÀN TRẢ MIỄN PHÍ</li>
                    <li>- Thuế và lệ phí hải quan sẽ được áp dụng khi giao hàng theo quy định của Hải Quan Việt Nam</li>
                </ul>
            </div>
            <AddCartNotice product={product} size={size}/>
        </div>
    );
};

export default InfoDetails;