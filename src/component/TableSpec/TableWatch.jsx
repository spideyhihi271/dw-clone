import React from 'react';
import './style.css';

const TableCLock = ({product}) => {
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
                <p>Sự chuyển động</p>
                <p>{product.Movement}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Vật chất</p>
                <p>{product.Material}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Chiều rộng dây đeo</p>
                <p>{product.Adjustablelength}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Màu dây đeo</p>
                <p>{product.Strap}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Dây đai hoán đổi cho nhau</p>
                <p>{product.Strapchange}</p>
            </li>
            <li className='tabspect__list-item'>
                <p>Chống nước</p>
                <p>{product.Waterresistant}</p>
            </li>
        </ul>
    );
};

export default TableCLock;