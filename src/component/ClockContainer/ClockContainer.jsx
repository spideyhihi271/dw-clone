import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clockList from '../../data/clock';
import Filter from '../../features/Filter/FIlter';
import handelClick from '../../features/handelClickMenu/handelClick';
import Sort from '../../features/Sort/Sort';
import Loader from '../Loader/Loader';
import ProductList from '../ProductList/ProductList';
import './style.css';
const ClockContainer = () => {
    // Khai báo state
    const [originalList, setOriginalList] = useState(clockList);
    const [colorList, setColorList] = useState([]);
    const [sizeList, setSizeList] = useState([]);
    const [strapList, setStrapList] = useState([]);
    const [materialList, setMaterialList] = useState([]);
    const [productList, setProductList] = useState(clockList);
    const [loader,setLoader] = useState(false);

    // Xử lí thông tin đầu vào
    const {type} = useParams();
    let arr = clockList;
    if(type !== undefined){
        arr = arr.filter( (item) => item.for === type);
    }
    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
            setOriginalList(arr);
            setProductList(arr);
        },2000)
    },[type])
   
    //Lấy giá trị filter
    // 1. Giá trị đầu
    let colorArr = colorList;
    const handelColors = (e) =>{
        if(e.target.checked === true){
            colorArr.push(e.target.value);
        }else{
            let index = colorArr.findIndex((color) => color === e.target.value);
            colorArr.splice(index,1);
        }
        setColorList(colorArr);
    }   
    // 2. Giá trị 2
    let sizeArr = sizeList;
    const handelSizes = (e) =>{
        if(e.target.checked === true){
            sizeArr.push(e.target.value);
        }else{
            let index = sizeArr.findIndex((size) => size === e.target.value);
            sizeArr.splice(index,1);
        }
        setSizeList(sizeArr);
    }    
    // 3. Giá trị 3
    let strapArr = strapList;
    const handelStraps = (e) =>{
        if(e.target.checked === true){
            strapArr.push(e.target.value);
        }else{
            let index = strapArr.findIndex((strap) => strap === e.target.value);
            strapArr.splice(index,1);
        }
        setStrapList(strapArr);
    }     
    // 4. Giá trị 4
    let materialArr = materialList;
    const handelMaterials = (e) =>{
        if(e.target.checked === true){
            materialArr.push(e.target.value);
        }else{
            let index = materialArr.findIndex((material) => material === e.target.value);
            materialArr.splice(index,1);
        }
        setMaterialList(materialArr);
    }    
    // Filter
    const handelFilter = () =>{
        // Set productList về mặc định
         let resetList = originalList;
        // Lọc màu
        let result = Filter(resetList,colorList,"Dialcolor");
        // Lọc size     
        result = Filter(result,sizeList,"Casethickness");
        // Lọc dây     
        result = Filter(result,strapList,"Strap");  
        // Lọc chất liệu     
        result = Filter(result,materialList,"Material");
        // Trường hợp không có giá trị
        if(colorList.length === 0 && sizeList.length === 0 
            && strapList.length === 0 && materialList.length === 0){
                result = originalList;
        }
        // Đóng
        document.getElementById('filter').checked = false;
        setLoader(true)
        setTimeout(() => {
            setProductList(result);
            setLoader(false);
        }, 2000);
    }
    // Sort
    const handelSort = () => {
        let value = document.getElementById('sort').value;
        let result = Sort(productList,value);
        setLoader(true)
        setTimeout(() => {
            setProductList(result);
            setLoader(false);
        }, 2000);
    }
    
    return (
        <div className='show__container'>
            <div className="show___container-filter-and-sort">
                <div className="filter">
                    <input type="checkbox" name='filter' id='filter' hidden/>
                    <label htmlFor="filter" className='filter__open'>
                        FILTER
                        <i class="fa-thin fa-filter-list"></i>
                    </label>
                    <label htmlFor="filter" className='filter__ovelay'></label>
                    <div htmlFor="filter" className='filter__container'>
                        <p className="filter__container-title"> FILTER </p>
                        <label htmlFor="filter" className='filter__close'><i class="fa-thin fa-x"></i></label>
                        <ul className="filter__list">
                            <li className="filter__item" index={0}>
                                <div className="filter__item-title"  onClick={handelClick}>
                                    <p>MÀU SẮC</p> 
                                    <i class="fa-thin fa-caret-down"></i>
                                </div>
                                <ul className="filterValue__list">
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='color' onChange={handelColors} value='Đen' />
                                        <label htmlFor="">ĐEN</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='color' onChange={handelColors} value='Trắng sữa' />
                                        <label htmlFor="">TRẮNG SỮA</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='color' onChange={handelColors} value='Hồng ngọc trai' />
                                        <label htmlFor="">HỒNG</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='color' onChange={handelColors} value='Xanh lục' />
                                        <label htmlFor="">XANH LỤC</label>
                                    </li>
                                </ul>
                            </li>
                            <li className="filter__item" index={1}>
                                <div className="filter__item-title"  onClick={handelClick}>
                                    <p>KÍCH THƯỚC</p> 
                                    <i class="fa-thin fa-caret-down"></i>
                                </div>
                                <ul className="filterValue__list">
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='size' onChange={handelSizes} value='6mm' />
                                        <label htmlFor="">6mm</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='size' onChange={handelSizes} value='8mm' />
                                        <label htmlFor="">8mm</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='size' onChange={handelSizes} value='12mm' />
                                        <label htmlFor="">12mm</label>
                                    </li>
                                </ul>
                            </li>
                            <li className="filter__item" index={2}>
                                <div className="filter__item-title"  onClick={handelClick}>
                                    <p>DÂY ĐEO</p> 
                                    <i class="fa-thin fa-caret-down"></i>
                                </div>
                                <ul className="filterValue__list">
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='strap' onChange={handelStraps} value='Dây Link' />
                                        <label htmlFor="">DÂY LINK</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='strap' onChange={handelStraps} value='Vàng hồng' />
                                        <label htmlFor="">VÀNG HỒNG</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='strap' onChange={handelStraps} value='Dây NATO' />
                                        <label htmlFor="">DÂY NATO</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='strap' onChange={handelStraps} value='Dây da' />
                                        <label htmlFor="">DÂY DA</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='strap' onChange={handelStraps} value='Mắt lưới' />
                                        <label htmlFor="">MẮT LƯỚI</label>
                                    </li>
                                </ul>
                            </li>
                            <li className="filter__item" index={3}>
                                <div className="filter__item-title"  onClick={handelClick}>
                                    <p>CHẤT LIỆU</p> 
                                    <i class="fa-thin fa-caret-down"></i>
                                </div>
                                <ul className="filterValue__list">
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='material' onChange={handelMaterials} value='' />
                                        <label htmlFor="">Thép không gỉ 316L tinh chế và đánh bóng</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='material' onChange={handelMaterials} value='Thép không gỉ mạ hai lớp (316L)' />
                                        <label htmlFor="">Thép không gỉ mạ hai lớp (316L)</label>
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                        <div className="filter__apply">
                            <button className="filter__apply-item" onClick={handelFilter}>ÁP DỤNG</button>
                        </div>
                    </div>
                </div>
                <div className="sort">
                    <select name="sort" id="sort" className='sort-btn' onChange={handelSort}>
                        <option value="min"> Sắp xếp theo </option>
                        <option value="min"> Giá thấp đến cao </option>
                        <option value="max"> Giá cao đến thấp</option>
                    </select>
                </div>
            </div>
            {loader === true &&
               <Loader/>
            }
            {loader === false &&
                <ProductList productList={productList}/>
            }
            {(productList.length === 0 && loader === false) &&
                <p className='filter__notify'> Không có sản phẩm nào phù hợp </p>
            }
        </div>
    );
};

export default ClockContainer;