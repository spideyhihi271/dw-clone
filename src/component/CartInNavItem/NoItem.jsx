import React from 'react';
import { Link } from 'react-router-dom';

const NoItem = () => {
    return (
        <div className='cart__noItem'>
            <p className="cart__noitem-item">
                BẠN KHÔNG CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG
            </p>
            <Link to="/" className='cart__noitem-link'>TIẾP TỤC MUA SẮM</Link>
        </div>
    );
};

export default NoItem;