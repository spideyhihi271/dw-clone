import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css';
import { Link } from 'react-router-dom';

const CheckOutForm = () => {
    // Erorr
    useEffect(() => {
        let erorrList = document.querySelectorAll('.error');
        erorrList = Object.values(erorrList);
        erorrList.map( item => {
            let errorItem = item.children;
            let container = item.parentElement;
            if( errorItem.length === 0){
                container.classList.remove('active');
            }else if(errorItem.length > 0){
                container.classList.add('active');
            }
        })
        // Check out
        let but = document.querySelector('.checkout__form-purchase');
        let comfirmBtn = document.querySelectorAll('.checkout__form-purchase')[1];
        comfirmBtn.style.display = 'none';
        let data = formik.values;
        data = Object.values(data);
        let error = formik.errors;
        error = Object.values(error);
        let haveData = true;
        let haveError = false;
        data.map( item => {
            if( item.length === 0) haveData = false;
        })
        error.map( item => {
            if(item.length > 0) haveError = true; 
        })
        if(haveData === true && haveError === false){
            but.style.display = 'none';
            comfirmBtn.style.display = 'block';
            let dataBill = formik.values;
            dataBill = JSON.stringify(dataBill);
            localStorage.setItem('user',dataBill);
        }
    })
    // Formik
    const formik = useFormik({
        initialValues:{
            email: '',
            fisrtName: '',
            lastName: '',
            phone: '',
            address: '',
            city: '',
            zip: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Đây là thông tin bắt buộc").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Sai định dạng Email"),
            fisrtName: Yup.string().required('Đây là thông tin bắt buộc'),
            lastName: Yup.string().required('Đây là thông tin bắt buộc'),
            phone: Yup.string().required('Đây là thông tin bắt buộc').matches(/^[0-9\-\+]{9,15}$/,"Sai định dạng số điện thoại"),
            address: Yup.string().required('Đây là thông tin bắt buộc'),
            city: Yup.string().required('Đây là thông tin bắt buộc'),
            zip: Yup.string().required('Đây là thông tin bắt buộc'),

        })
    });

    return (
        <form className='checkout__form-list' onSubmit={formik.handleSubmit}>
            <div className="checkout__form-item">
                <div className="checkout__form-item-child">
                    <label htmlFor="">HỌ</label>
                    <input type="text" 
                    autoFocus
                    name='lastName' 
                    id='lastName' 
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder='Nhập vào họ của bạn'/>
                    <span className='error'>
                        {formik.errors.lastName && (
                           <span className='error__item'>{formik.errors.lastName}</span> 
                        )}
                    </span>
                </div>
                <div className="checkout__form-item-child">
                    <label htmlFor="">TÊN</label>
                    <input type="text" 
                    name='fisrtName' 
                    id='fisrtName' 
                    onChange={formik.handleChange}
                    value={formik.values.fisrtName}
                    placeholder='Nhập vào tên của bạn'/>
                    <span className='error'>
                        {formik.errors.fisrtName && (
                           <span className='error__item'>{formik.errors.fisrtName}</span> 
                        )}
                    </span>
                </div>
            </div>
            <div className="checkout__form-item">
                <div className="checkout__form-item-child">
                    <label htmlFor="">EMAIL</label>
                    <input type="text" 
                    name='email' 
                    id='email' 
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder='Nhập vào email của bạn'/>
                    <span className='error'>
                        {formik.errors.email && (
                           <span className='error__item'>{formik.errors.email}</span> 
                        )}
                    </span>
                </div>
            </div>
            <div className="checkout__form-item">
                <div className="checkout__form-item-child">
                    <label htmlFor="">SỐ ĐIỆN THOẠI</label>
                    <input type="text" 
                    name='phone' 
                    id='phone' 
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder='Nhập vào số điện thoại của bạn'/>
                    <span className='error'>
                        {formik.errors.phone && (
                           <span className='error__item'>{formik.errors.phone}</span> 
                        )}
                    </span>
                </div>
            </div>
            <div className="checkout__form-item">
                <div className="checkout__form-item-child">
                    <label htmlFor="">ĐỊA CHỈ</label>
                    <input type="text" 
                    name='address' 
                    id='address' 
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    placeholder='Nhập vào địa chỉ giao hàng'/>
                    <span className='error'>
                        {formik.errors.address && (
                           <span className='error__item'>{formik.errors.address}</span> 
                        )}
                    </span>
                </div>
            </div>
            <div className="checkout__form-item">
                <div className="checkout__form-item-child">
                    <label htmlFor="">THÀNH PHỐ</label>
                    <input type="text" 
                    name='city' 
                    id='city' 
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    placeholder='Nhập vào họ của bạn'/>
                    <span className='error'>
                         {formik.errors.city && (
                           <span className='error__item'>{formik.errors.city}</span> 
                        )}
                    </span>
                </div>
                <div className="checkout__form-item-child">
                    <label htmlFor="">MÃ BƯU ĐIỆN</label>
                    <input type="text" 
                    name='zip' 
                    id='zip'
                    onChange={formik.handleChange}
                    value={formik.values.zip}
                    placeholder='Nhập vào mã bưu điện'/>
                    <span className='error'>
                        {formik.errors.zip && (
                           <span className='error__item'>{formik.errors.zip}</span> 
                        )}
                    </span>
                </div>
            </div>
            <div className="checkout__form-item">
                <button className='checkout__form-purchase'> ĐẶT HÀNG </button>
                <Link to={`/comfirmbill`} className='checkout__form-purchase'>ĐẶT HÀNG</Link>
            </div>
        </form>
    );
};

export default CheckOutForm;