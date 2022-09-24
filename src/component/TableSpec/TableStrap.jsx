import React from 'react';
import './style.css';

const TableStrap= ({product}) => {
    return (
        <ul className='tabspect__list'>
            <li className='tabspect__list-item'>
                <p>Mã hàng</p>
                <p>{product.SKU}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Phù hợp với bộ sưu tập</p>
                <p>{product.FitsCollection}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Vừa với kích thước đồng hồ</p>
                <p>{product.Casethickness}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Chiều rộng dây đeo</p>
                <p>{product.Strapwidth}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Vật chất</p>
                <p>{product.Material}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Màu liên kết</p>
                <p>{product.Dialcolor}</p>
            </li>
        </ul>
    );
};

export default TableStrap;