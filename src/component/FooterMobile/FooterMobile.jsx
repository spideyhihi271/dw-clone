import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const FooterMobile = () => {
    const handelClick = (e) =>{
        let container = e.target.parentElement.parentElement;
        let idx = container.getAttribute('index');
        let containerList = document.getElementsByClassName('footerMoblie__item');
        containerList = Object.values(containerList);
        containerList.map( (item,index) => {
            if(index != idx) {
                item.classList.remove('active');
            }
        })
        container.classList.toggle('active');
    }
    return (
        <div className='footerMobile'>
            <div className="footerMoblie__item active" index={0}>
                <p className='footerMoblie__title'  onClick={handelClick}>
                    <p>SHOP</p>
                    <i class="fa-thin fa-angle-down"></i>
                </p>
                <ul className="footerMobile__list">
                    <li><Link to='/'>Shop Instagram</Link></li>
                    <li><Link to='/watch'>Tất cả đồng hồ</Link></li>
                    <li><Link to='/watchstrap'>Tất cả dây đeo</Link></li>
                    <li><Link to='/jewels'>Tất cả trang sức</Link></li>
                    <li><Link to='/glass'>Tất cả kính râm</Link></li>
                </ul>
            </div>
            <div className="footerMoblie__item" index={1}>
                <p className='footerMoblie__title'  onClick={handelClick}>
                    <p>HỖ TRỢ</p>
                    <i class="fa-thin fa-angle-down"></i>
                </p>
                <ul className="footerMobile__list">
                    <li><Link to='/'>Trung tâm trợ giúp</Link></li>
                    <li><Link to='/'>Liên hệ chúng tôi</Link></li>
                    <li><Link to='/'>Thông tin về size</Link></li>
                    <li><Link to='/'>Cách Thay Dây Đồng Hồ</Link></li>
                    <li><Link to='/'>Cách đo size nhẫn</Link></li>
                </ul>
            </div>
            <div className="footerMoblie__item" index={2}>
                <p className='footerMoblie__title' onClick={handelClick}>
                    <p>THÔNG TIN</p>
                    <i class="fa-thin fa-angle-down"></i>
                </p>
                <ul className="footerMobile__list">
                    <li><Link to='/'>Điều khoản bảo mật</Link></li>
                    <li><Link to='/'>Điều khoản khác</Link></li>
                    <li><Link to='/'>Chính sách hoàn trả</Link></li>
                    <li><Link to='/'>Warranties</Link></li>
                    <li><Link to='/'>Owners Guide</Link></li>
                </ul>
            </div>
            <div className="footerMoblie__item"  index={3}>
                <p className='footerMoblie__title' onClick={handelClick}>
                    <p>VỀ CHÚNG TÔI</p>
                    <i class="fa-thin fa-angle-down"></i>
                </p>
                <ul className="footerMobile__list">
                    <li><Link to='/'>Câu chuyện</Link></li>
                    <li><Link to='/'>#DWMOMENTS</Link></li>
                    <li><Link to='/'>Bảo đảm chính hãng</Link></li>
                    <li><Link to='/'>Thông tin việc làm</Link></li>
                    <li><Link to='/'>Khả năng truy cập</Link></li>
                </ul>
            </div>
            
            <div className="footerMoblie__item">
                <select name="langues" id="langues">
                    <option value="1">VietNam</option>
                    <option value="2">English</option>
                    <option value="3">France</option>
                    <option value="4">Germany</option>
                    <option value="5">ThaiLand</option>
                    <option value="6">Italia</option>
                </select>
            </div>
        </div>
    );
};

export default FooterMobile;