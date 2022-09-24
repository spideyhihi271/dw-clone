import React from 'react';
import { Link } from 'react-router-dom';
import formen from '../../access/Img/formen.png';
import forwomen from '../../access/Img/forwomen.png';
import './style.css';

const GetTheLock = () => {
    return (
        <div className="getTheLook">
            <div className="getTheLook__block1">
                <div className="block1-item">
                    <Link to='/details/product=5' className='block1__item-child'><img src='http://3.bp.blogspot.com/-qKNKT8QIG58/VGZVdQnH7hI/AAAAAAAANeo/67H_UtxSwoo/s1600/daniel%2Bwellington%2Bwatch%2B4.jpg' alt="" /></Link>
                    <Link to='/details/product=6' className='block1__item-child'><img src='https://i.pinimg.com/736x/65/3a/7c/653a7c8916f966e95825b38e890a06bc.jpg' alt="" /></Link>
                </div>
                <div className="block2-item">
                    <Link to='/' className='block2__item-child'>
                        <img src="https://fridayshopping.vn/wp-content/uploads/2022/07/mua-dong-ho-daniel-wellington-ha-noi-dep-chinh-hang-100-8.jpg" alt="" />
                        <div className="item__child-info">
                            <p className="item__child-name">XU HƯỚNG CỦA DW</p>
                            <Link to='/watch' className="item__child-link">KHÁM PHÁ</Link>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="getTheLook__block2">
                <Link to='/' className="getTheLook__block2-item">
                    <img src={forwomen} alt="" className="block2__item-img" />
                    <div className="block2__item-info">
                        <p>PHONG CÁCH CHO CÔ ẤY</p>
                        <Link to='/watch/women' className='block2__item-info-link'> KHÁM PHÁ</Link>
                    </div>
                </Link>
                <Link to='/' className="getTheLook__block2-item">
                    <img src={formen} alt="" className="block2__item-img" />
                    <div className="block2__item-info">
                        <p>PHONG CÁCH CHO ANH ẤY</p>
                        <Link to='/watch/men' className='block2__item-info-link'> KHÁM PHÁ</Link>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default GetTheLock;