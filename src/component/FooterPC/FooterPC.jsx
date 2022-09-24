import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const FooterPC = () => {
    return (
        <div className='footerPC'>
            <div className="footerPC__item">
                <p className="footerPC__item-title">SHOP</p>
                <ul className="footerPC__item-sub">
                    <li><Link to='/'>Shop Instagram</Link></li>
                    <li><Link to='/watch'>Tất cả đồng hồ</Link></li>
                    <li><Link to='/watchstrap'>Tất cả dây đeo</Link></li>
                    <li><Link to='/jewels'>Tất cả trang sức</Link></li>
                    <li><Link to='/glass'>Tất cả kính râm</Link></li>
                </ul>
            </div>
            <div className="footerPC__item">
                <p className="footerPC__item-title">HỖ TRỢ</p>
                <ul className="footerPC__item-sub">
                    <li><Link to='/'>Trung tâm trợ giúp</Link></li>
                    <li><Link to='/'>Liên hệ chúng tôi</Link></li>
                    <li><Link to='/'>Thông tin về size</Link></li>
                    <li><Link to='/'>Cách Thay Dây Đồng Hồ</Link></li>
                    <li><Link to='/'>Cách đo size nhẫn</Link></li>
                </ul>
            </div>
            <div className="footerPC__item">
                <p className="footerPC__item-title">THÔNG TIN</p>
                <ul className="footerPC__item-sub">
                     <li><Link to='/'>Điều khoản bảo mật</Link></li>
                    <li><Link to='/'>Điều khoản khác</Link></li>
                    <li><Link to='/'>Chính sách hoàn trả</Link></li>
                    <li><Link to='/'>Warranties</Link></li>
                    <li><Link to='/'>Owners Guide</Link></li>
                </ul>
            </div>
            <div className="footerPC__item">
                <p className="footerPC__item-title">VỀ CHÚNG TÔI</p>
                <ul className="footerPC__item-sub">
                <li><Link to='/'>Câu chuyện</Link></li>
                    <li><Link to='/'>#DWMOMENTS</Link></li>
                    <li><Link to='/'>Bảo đảm chính hãng</Link></li>
                    <li><Link to='/'>Thông tin việc làm</Link></li>
                    <li><Link to='/'>Khả năng truy cập</Link></li>
                </ul>
            </div>
            <div className="footerPC__item">
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

export default FooterPC;