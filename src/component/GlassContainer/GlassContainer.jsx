import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import glassList from '../../data/glass';
import Filter from '../../features/Filter/FIlter';
import handelClick from '../../features/handelClickMenu/handelClick';
import Sort from '../../features/Sort/Sort';
import Loader from '../Loader/Loader';
import ProductList from '../ProductList/ProductList';
import './style.css';
const GlassContainer = () => {
    // Khai báo state
    const [originalList, setOriginalList] = useState(glassList);
    const [colorGlass, setColorGlass] = useState([]);
    const [sizeList, setSizeList] = useState([]);
    const [frameList, setFrameList] = useState([]);
    const [materialList, setMaterialList] = useState([]);
    const [productList, setProductList] = useState(glassList);
    const [loader,setLoader] = useState(false);

    // Xử lí thông tin đầu vào
    const {type} = useParams();
    let arr = glassList;
    if(type !== undefined){
        arr = arr.filter( (item) => item.type === type);
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
    let colorGlassArr = colorGlass;
    const handelColorGlass = (e) =>{
        if(e.target.checked === true){
            colorGlassArr.push(e.target.value);
        }else{
            let index = colorGlassArr.findIndex((color) => color === e.target.value);
            colorGlassArr.splice(index,1);
        }
        setColorGlass(colorGlassArr);
    }   
    // 2. Giá trị 2
    let colorFrameArr = frameList;
    const handelColorFrame = (e) =>{
        if(e.target.checked === true){
           colorFrameArr.push(e.target.value);
        }else{
            let index =colorFrameArr.findIndex((frame) => frame === e.target.value);
           colorFrameArr.splice(index,1);
        }
        setFrameList(colorFrameArr);
    }     
    // 3. Giá trị 3
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
        // Lọc màu kính
        let result = Filter(resetList,colorGlass,"Dialcolor");
        // Lọc màu gọng     
        result = Filter(result,frameList,"Framecolor"); 
        // Lọc size     
        result = Filter(result,sizeList,"Casethickness");
        // Lọc chất liệu     
        result = Filter(result,materialList,"Framematerial");
        // Trường hợp không có giá trị
        if(colorGlass.length === 0 && sizeList.length === 0 
            && frameList.length === 0 && materialList.length === 0){
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
                                    <p>MÀU KÍNH</p> 
                                    <i class="fa-thin fa-caret-down"></i>
                                </div>
                                <ul className="filterValue__list">
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='color' onChange={handelColorGlass} value='Đen' />
                                        <label htmlFor="">ĐEN</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='color' onChange={handelColorGlass} value='Hổ phách' />
                                        <label htmlFor="">HỔ PHÁCH</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='color' onChange={handelColorGlass} value='Nâu demi' />
                                        <label htmlFor="">NÂU DEMI</label>
                                    </li>
                                </ul>
                            </li>
                            <li className="filter__item" index={1}>
                                <div className="filter__item-title"  onClick={handelClick}>
                                    <p>MÀU GỌNG GỌNG</p> 
                                    <i class="fa-thin fa-caret-down"></i>
                                </div>
                                <ul className="filterValue__list">
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='material' onChange={handelMaterials} value='Đen' />
                                        <label htmlFor="">ĐEN</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='material' onChange={handelMaterials} value='Hoa hồng vàng' />
                                        <label htmlFor="">ROSE GOLD</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='material' onChange={handelMaterials} value='Havana đen' />
                                        <label htmlFor="">HAVANA ĐEN</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='material' onChange={handelMaterials} value='Nâu demi' />
                                        <label htmlFor="">NÂU DEMI</label>
                                    </li>
                                </ul>
                            </li>
                            <li className="filter__item" index={2}>
                                <div className="filter__item-title"  onClick={handelClick}>
                                    <p>KÍCH THƯỚC</p> 
                                    <i class="fa-thin fa-caret-down"></i>
                                </div>
                                <ul className="filterValue__list">
                                     <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='size' onChange={handelSizes} value='8mm' />
                                        <label htmlFor="">8mm</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='size' onChange={handelSizes} value='11mm' />
                                        <label htmlFor="">11mm</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='size' onChange={handelSizes} value='48mm' />
                                        <label htmlFor="">15mm</label>
                                    </li>
                                </ul>
                            </li>
                            <li className="filter__item" index={3}>
                                <div className="filter__item-title"  onClick={handelClick}>
                                    <p>CHẤT LIỆU GỌNG</p> 
                                    <i class="fa-thin fa-caret-down"></i>
                                </div>
                                <ul className="filterValue__list">
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='material' onChange={handelMaterials} value='Acetate sinh học nhẹ' />
                                        <label htmlFor="">Acetate sinh học nhẹ</label>
                                    </li>
                                    <li className="filerValue__item">
                                        <input type="checkbox" name="" id="" className='material' onChange={handelMaterials} value='Thép không gỉ nhẹ (304)' />
                                        <label htmlFor="">Thép không gỉ nhẹ (304)</label>
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

export default GlassContainer;