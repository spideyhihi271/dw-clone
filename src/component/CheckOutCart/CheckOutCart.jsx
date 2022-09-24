import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import color from '../../features/color/color';
import formatMoney from '../../features/formatMoney/formatMoney';
import './style.css';
const CheckOutCart = () => {
    let data = localStorage.getItem('cartList');
    data = JSON.parse(data);
    let total = 0;
    data.map( item => total += item.price)
    
    return (
        <div className="checkOutCart__container">
            <ul className='CheckOutCart__list'>
                {data.map(item => 
                    <li className="checkOutCart__item" key={uuidv4()}>
                        <div className="checkOutCart__item-img">
                            <img src={item.img1} alt="" />
                        </div>
                        <div className="checkOutCart__item-info">
                            <p className="info__name">{item.name}</p>
                            <p className="info__color">
                                <div style={{backgroundColor: color(item.Dialcolor)}}></div>
                                <p>{item.Dialcolor}</p>
                            </p>
                            <p className="info__size">Size: {item.size}</p>
                            <p className="info__price">{formatMoney(item.price)}</p>
                        </div>
                    </li>
                )}
            </ul>
            <div className="checkOutCart__total">
               <div>
                    <p>Tax: </p>
                    <p>0 đ</p>
               </div>
               <div>
                    <p>TỔNG CỘNG: </p>
                    <p>{formatMoney(total)}</p>
               </div>
            </div>
        </div>
        
    );
};

export default CheckOutCart;