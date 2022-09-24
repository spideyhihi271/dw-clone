import React from 'react';
import './style.css';

const TableJewels = ({product}) => {
    return (
        <ul className='tabspect__list'>
            <li className='tabspect__list-item'>
                <p>Mã hàng</p>
                <p>{product.SKU}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Độ dày trường hợp</p>
                <p>{product.Casethickness}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Quay số màu</p>
                <p>{product.Dialcolor}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Vật chất</p>
                <p>{product.material}</p>
            </li>
            
        </ul>
    );
};

export default TableJewels;