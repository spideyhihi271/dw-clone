import React from 'react';
import HaveItem from '../CartInNavItem/HaveItem';
import NoItem from '../CartInNavItem/NoItem';

const CartInNav = ({renderList}) => {
    if(renderList === undefined){
       let data = localStorage.getItem('cartList');
       data = JSON.parse(data);
       renderList = data;
    }
    return (
        <div className='cart__content-item'>
            {renderList.length === 0 && <NoItem/>}
            {renderList.length > 0 && <HaveItem/>}
        </div>
    );
};

export default CartInNav;