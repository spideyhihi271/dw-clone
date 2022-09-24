import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import removeInPage from '../../features/wishList/removeInPage';
import color from '../../features/color/color';
import formatMoney from '../../features/formatMoney/formatMoney';
import './style.css';
import getDataProduct from '../../features/getDataProduct/getDataProduct';
import addCart from '../../features/cart/addCart';


const RenderWishList = () => {
    const [total, setTotal] = useState(0);
    const [renderList, setRenderList] = useState([]);
    useEffect(() => {
        let data = localStorage.getItem('wishList');
        data = JSON.parse(data);
        setRenderList(data);
    },[])
    const handelRemove = (e) => {
       let id = e.target.getAttribute('idre');
       let newData = removeInPage(id);
       setRenderList(newData);
    }
    const handelAddCart = (e) => {
        let container =  e.target.parentElement.parentElement;
        let size = container.getElementsByClassName('size__item-value')[0].value;
        let id = e.target.getAttribute('id');
        // Get Data
        let dataItem = getDataProduct;
        let product = dataItem.getDataProduct(id);
        addCart(product,size);
        removeInPage(id);
        // Render Lai
        let data = localStorage.getItem('wishList');
        data = JSON.parse(data);
        setRenderList(data);
    }
  
    return (
        <>
            <p className="wishList__title"> SẢN PHẨM YÊU THÍCH </p>
            <div className='grid wide wishList__container'>
                <div className="row">
                    {/* Have Item */}
                    { renderList.length > 0 &&
                        renderList.map( item => 
                            <div className="col l-4 m-4 c-6" key={uuidv4()}>
                               <div className='renderWishList__container'>
                                    <div className="renderWishList__item-img">
                                            <img src={item.img1} alt="Img Pro" />
                                            <button><i onClick={handelRemove} idre={item.id} class="fa-thin fa-trash-can"></i></button>
                                        </div>
                                        <Link to={`/details/product=${item.id}`} className="renderWishList__item-info">
                                            <p>{item.name}</p>
                                            <div style={{backgroundColor: color(item.Dialcolor)}}></div>
                                            <p>{item.Dialcolor}</p>
                                            <p>{formatMoney(item.price)}</p>
                                        </Link>
                                        <select className='size__item-value'>
                                                {
                                                    item.size.map( size =>
                                                        <option value={size}>{size}</option>
                                                    )
                                                }
                                        </select>
                                        <div className='renderWishList__item-addCart'>
                                            <button id={item.id} onClick={handelAddCart}> THÊM VÀO GIỎ </button>
                                        </div>
                                    </div>
                            </div>
                        )
                    }
                    {/* No Item */}
                    { 
                        renderList.length === 0 && 
                        <div className='noItemWL__title'>
                            <p className='noItemWL__title-item'>DANH SÁCH TRỐNG</p>
                            <Link to='/' className="noItemWL__title-link">THÊM SẢN PHẨM</Link>
                        </div>
                    }
                </div>
            </div>
        </>
        
    );
};

export default RenderWishList;