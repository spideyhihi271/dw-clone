import React from 'react';
import { Link } from 'react-router-dom';
import bannersecond from '../../access/Img/bannersecond.png';
import './style.css';
const BannerSecond = () => {
    return (
        <div className='bannersecond__container'>
            <div className="bannersecond__container-item">
                <img src={bannersecond} alt="" />
                <div className="containersecond__item-info">
                    <p className="item__info-name">EMALI</p>
                    <p className="item__info-name">COLLECTION</p>
                    <p className="item__info-description">BLACK EDITION</p>
                    <Link  to="/jewels" className='item__info-link'>KHÁM PHÁ</Link>
                </div>
            </div>
        </div>
    );
};

export default BannerSecond;