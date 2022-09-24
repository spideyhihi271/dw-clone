import React from 'react';
import './style.css';

const TableGlass= ({product}) => {
    return (
        <ul className='tabspect__list'>
            <li className='tabspect__list-item'>
                <p>Mã hàng</p>
                <p>{product.SKU}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Màu mắt kính</p>
                <p>{product.Dialcolor}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Chống tia cực tím</p>
                <p>UV400 (chống tia cực tím 100%)</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Chất liệu mắt kính</p>
                <p>{product.Glassesmaterial}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Chống va đập</p>
                <p>Có</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Màu gọng kính</p>
                <p>{product.Framecolor}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Chất liệu gọng kính</p>
                <p>{product.Framematerial}</p>
            </li>
        </ul>
    );
};

export default TableGlass;