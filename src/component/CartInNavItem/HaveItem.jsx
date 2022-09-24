import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import removeCart from '../../features/cart/removeCart';
import color from '../../features/color/color';
import formatMoney from '../../features/formatMoney/formatMoney';
import NoItem from '../CartInNavItem/NoItem';


import './style.css';
const HaveItem = () => {
    const [total, setTotal] = useState(0);
    const [renderList, setRenderList] = useState([]);
    useEffect(() => {
        let data = localStorage.getItem('cartList');
        data = JSON.parse(data);
        setRenderList(data);
    },[])
    useEffect(() => {
        let sum = 0;
        let data = localStorage.getItem('cartList');
        data = JSON.parse(data);
        data.map( item => {
            sum += item.price
        });
        setTotal(sum);
    })
    const handelRemove = (e) => {
        let container = e.target.parentElement;
        let id = container.getAttribute('idRemove');
        let renderNewList = removeCart(id);
        setRenderList(renderNewList);
    }
    return (
        <>
            {renderList.length === 0 && <NoItem/> }
            {renderList.length > 0 &&
                <div className="cart__haveitem">
                    <ul className='cart__list'>
                        {
                            renderList.map( item => 
                                <li className="cart__item" key={uuidv4()}>
                                    <div className="cart__img">
                                        <img src={item.img1} alt="" />
                                    </div>
                                    <div className="cart__info">
                                        <div className="info__name-deleted">
                                            <Link to={`/details/product=${item.id}`} className="info__name">{item.name}</Link>
                                            <button className='info-deleted' onClick={handelRemove} idRemove={item.idForRemove}><i class="fa-thin fa-trash-can"></i></button>
                                        </div>
                                        <div className="cart__info-color">
                                            <div className="info__color-item" style={{backgroundColor: color(item.Dialcolor)}}></div>
                                            <p className="info__color-name">{item.Dialcolor}</p>
                                        </div>
                                        <p className="cart__info-size">Size: {item.size}</p>
                                        <p className="cart__info-price">{formatMoney(item.price)}</p>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <div className="cart__total">
                        <div className="cart__total-tax">
                            <p className="total__tax-name">
                                Thuế: 
                            </p>
                            <p className="total__tax-value">
                                0₫
                            </p>
                        </div>
                        <div className="cart__total-checkout">
                            <div className="cart__total-sum">
                                <p className="total__sum-name">
                                    TỔNG CỘNG: 
                                </p>
                                <p className="total__sum-price">
                                    {formatMoney(total)}
                                </p>
                            </div>
                            <Link to="/checkout" className="total__checkout-link">
                                ĐI ĐẾN THANH TOÁN 
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
        
    );
};

export default HaveItem;