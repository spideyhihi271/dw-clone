import React, { useState } from 'react';
import './style.css';
import ProductList from '../ProductList/ProductList';
import clockList from '../../data/clock';
import glassList from '../../data/glass';
import strapList from '../../data/strap'
import jewelsList from '../../data/jewels';


const SearchContainer = () => {
    let allData = [];
    allData = allData.concat(clockList,glassList,jewelsList,strapList);
    const [arrShow, setArrShow] = useState(allData);

    const handelChange = (e) =>{
        let value = e.target.value;
        value = value.toLowerCase();
        for(let i = 0; i < allData.length; i++){
            allData[i].name = allData[i].name.toLowerCase();
        }
        const searchValue = [];
        allData.map( item => {
            if( item['name'].includes(value)){
                searchValue.push(item);
            }
        })
        setArrShow(searchValue);
    }
    
    return (
        <div className='searchContainer'>
            <div className="search-box">
                <input type="text" id='searchParam' placeholder='Nhập thông tin tìm kiếm ở đây' onChange={handelChange}/>
            </div>
            <p className="result-title"> KẾT QUẢ TÌM KIẾM </p>
            <p className="result-num"> {arrShow.length} sản phẩm</p>
            {arrShow.length !== 0 && <ProductList productList={arrShow} /> }
            {arrShow.length === 0 && <p className='search__noti'>Không có sản phẩm phù hợp. </p>}
        </div>
       
    );
};

export default SearchContainer;