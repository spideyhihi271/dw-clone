import React, { useState } from 'react';
import formatMoney from '../../features/formatMoney/formatMoney';
import getDay from '../../features/getDay/getDay';
import './style.css';

const ComfirmBill = () => {
    const [count, setCount] = useState(15);
    let user = {}
    const timeBill = getDay();
    let data = localStorage.getItem('user');
    data = JSON.parse(data);
    user = data;
    let itemList = localStorage.getItem('cartList');
    itemList = JSON.parse(itemList);
    let total = 0;
    let ship = 50000;
    itemList.map( item => total += item.price);
    let allTotal = total + ship;

    // Count down
    setInterval(() => {
        setCount(count - 1);
    },1000)
    // Redirect
    if(count === 0){
        localStorage.clear('cartList');
        localStorage.clear('user');
        window.location="/";
    }
    return (
        <div className="comfirmBill">
            <div className='comfirmBill__container'>
                <div className="comfirm__logo">
                    <p>DANIEL WALLINTON</p>
                </div>
                <div className="comfirm__status">
                    <p className="comfirm__status-title"> Đơn đặt hàng của bạn đã được xác nhận!</p>
                    <div className="comfirm__status-thanks">
                        <p>Xin chào, {user.fisrtName}</p>
                        <p>Đơn đặt hàng của bạn đã được xác nhận và sẽ được giao trong hai ngày tới!</p>
                    </div>
                </div>
                <div className="comfirm__info">
                    <div className="comfirm__info-item">
                        <label htmlFor="">Ngày đặt hàng</label>
                        <p>{timeBill}</p>
                    </div>
                    <div className="comfirm__info-item">
                        <label htmlFor="">Người đặt</label>
                        <p>{`${user.lastName} ${user.fisrtName}`}</p>
                    </div>
                    <div className="comfirm__info-item">
                        <label htmlFor="">Số điện thoại </label>
                        <p>{user.phone}</p>
                    </div>
                    <div className="comfirm__info-item">
                        <label htmlFor="">Địa chỉ giao hàng </label>
                        <p>{user.address}</p>
                    </div>
                </div>
                <ul className="comfirm__item-list">
                    {
                        itemList.map( item => 
                            <li className='comfirm__item-item'>
                                <div>
                                    <img src={item.img1} alt="" />
                                </div>
                                <div>
                                    <p>{item.name}</p>
                                    <p>Màu sắc: {item.Dialcolor}</p>
                                    <p>Kích cỡ: {item.size}</p>
                                </div>
                                <div>
                                    <p>{formatMoney(item.price)}</p>
                                </div>
                            </li>
                        )
                    }
                   
                </ul>
                <div className="comfirm__total">
                    <div className='comfirm__total-item'></div>
                    <div className='comfirm__total-item'>
                        <div>
                            <p>Tổng phụ: </p>
                            <p>{formatMoney(total)}</p>
                        </div>
                        <div>
                            <p>Phí vận chuyển: </p>
                            <p>{formatMoney(ship)}</p>
                        </div>
                        <div>
                            <p>Phí thuế</p>
                            <p>{formatMoney(0)}</p>
                        </div>
                        <div>
                            <p>Voucher: </p>
                            <p>{formatMoney(0)}</p>
                        </div>
                        <div>
                            <p>Tổng thanh toán</p>
                            <p>{formatMoney(allTotal)}</p>
                        </div>
                    </div>
                </div>
                <div className="comfirm__mail">
                    <p>Chúng tôi sẽ gửi email xác nhận vận chuyển khi hàng được vận chuyển thành công!</p>
                    <p>Cảm ơn đã mua sắm với chúng tôi!</p>
                    <p>DANIEL WALLINGTON</p>
                    <p>Chúng tôi sẽ chuyển bạn về trang chủ trong {count}s</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ComfirmBill;