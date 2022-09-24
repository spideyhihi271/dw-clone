import React from 'react';
import ProductList from '../ProductList/ProductList';
import './style.css';

const RecomendContainer = ({msg,renderList}) => {
    return (
        <div className='recomend__container'>
            <p className="recomend__container-title">{msg}</p>
            <ProductList productList={renderList}/>
        </div>
    );
};

export default RecomendContainer;