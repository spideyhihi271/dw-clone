import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductItem from '../ProductItem/ProductItem';
import '../../access/Css/grid.css';
import './style.css';
const ProductList = ({productList}) => {
    return (
        <div className='grid wide product__list'>
            <div className="row">
                {productList.map( (product,index) => 
                    <div className="col l-3 m-4 c-6" key={uuidv4()}>
                        <ProductItem product={product} index={index}  /> 
                    </div> )
                }
                
            </div>
        </div>
    );
};

export default ProductList;