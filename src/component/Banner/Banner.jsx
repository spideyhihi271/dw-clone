import React from 'react';
import { Link } from 'react-router-dom';
import bannerforpc from '../../access/Img/bannerforpc.png';
import './style.css';
const Banner = () => {
    return (
        <>
            <div className='banner'>  
                <img src={bannerforpc} alt="" className="banner__item" />
                <div className="banner__info">
                    <p className="banner__title">SẢN PHẨM CỦA THÁNG 9</p>
                    <p className="banner__description">KHÁM PHÁ NHỮNG SẢN PHẨM BÁN CHẠY</p>
                    <Link to="/clocks" className="banner__link">KHÁM PHÁ</Link>
                </div>
            </div>
            <div className="service__list">
                <p className="service__item">
                    <i class="fa-light fa-box-circle-check"></i>
                    FREESHIP
                </p>
                <p className="service__item">
                    <i class="fa-light fa-box-open-full"></i>
                    HOÀN TRẢ MIỄN PHÍ
                </p>
                <p className="service__item">
                    <i class="fa-light fa-alarm-clock"></i>
                   BẢO HÀNH 2 NĂM
                </p>
            </div>
            <div className="tag__list">
                <Link to="/watch" className="tag__item-link">ĐỒNG HỒ</Link>
                <Link to="/watchstrap" className="tag__item-link">DÂY ĐỒNG HỒ</Link>
                <Link to="/jewels" className="tag__item-link">TRANG SỨC</Link>
                <Link to="/glass" className="tag__item-link">KÍNH RÂM</Link>
            </div>
        </>
    );
};

export default Banner;