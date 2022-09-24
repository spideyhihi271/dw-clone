import React from 'react';
import { Link } from 'react-router-dom';
import CheckOutCart from '../CheckOutCart/CheckOutCart';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import './style.css';
const CheckOutContainer = () => {
    return (
        <div className='checkOut__container'>
            <div className="checkOut__container-heading">
                <div className='CTN__heading-back'>
                    <Link to="/" className='CTN__heading-link'>
                        <i class="fa-thin fa-arrow-left"></i>
                        <p>TIẾP TỤC MUA SẮM</p>
                    </Link>
                </div>
                <div  className='CTN__heading-logo'>
                    <Link to="/" className='CTN__heading-logoItem' >DANIEL WALLINGTON</Link>
                </div>
                <div></div>
            </div>
            <div className="checkout__main">
                <p>THANH TOÁN</p>
                <div className="checkout__form-cart">
                    <div className="checkout__form">
                        <p className="checkout__form-title">ĐỊA CHỈ</p>
                        <CheckOutForm/>
                    </div>
                    <div className="checkout__cart">
                        <CheckOutCart/>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default CheckOutContainer;