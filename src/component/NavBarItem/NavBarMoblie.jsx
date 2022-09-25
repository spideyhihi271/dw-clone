import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartInNav from '../CartInNav/CartInNav';

const NavBarMoblie = () => {
    const [cartList, setCartList] = useState([]);
    const handelSidebar = (e) => {
        let parent = e.target.parentElement.parentElement;
        let sub = parent.querySelector(".sidebar__sub");
        sub.classList.toggle('active__sub');
    }
    const handelOpenCart = (e) => {
        let data = localStorage.getItem('cartList');
        data = JSON.data;
        setCartList(data);
    }

    return (
        <div className='nav__Mobile'>
            <div className="mobile__logo">
                <Link to="/">DANIEL WALLINGTON</Link>
            </div>
            <nav className="moblie__nav">
                <div className="moblie__nav-item">
                    <input type="checkbox" name="sidebar__mobile" id="sidebar__mobile" hidden />
                    <label htmlFor="sidebar__mobile" className='sidebar__open'><i class="fa-thin fa-bars"></i></label>
                    <label htmlFor="sidebar__mobile" className='sidebar__ovelay'></label>
                    <div className='sidebar__container'>
                        <div className="sidebar__container-title">
                            <p> MENU </p>
                            <label htmlFor="sidebar__mobile" className='sidebar__close'><i class="fa-thin fa-circle-xmark"></i></label>
                        </div>
                        <ul className="sidebar__list">
                            <li className="sidebar__item">
                                <p className="sidebar-title"><p onClick={handelSidebar}>ĐỒNG HỒ</p><i class="fa-thin fa-chevron-down"></i></p>
                                <ul className="sidebar__sub ">
                                    <li className="sidebar__sub-item">
                                        <Link to="/watch">Tất cả đồng hồ</Link>
                                    </li>
                                    <li className="sidebar__sub-item">
                                        <Link to="/watch/men">Đồng hồ Nam</Link>
                                    </li>
                                    <li className="sidebar__sub-item">
                                        <Link to="/watch/women">Đồng hồ Nữ</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar__item">
                                <p className="sidebar-title"><p onClick={handelSidebar}>TRANG SỨC</p><i class="fa-thin fa-chevron-down"></i></p>
                                <ul className="sidebar__sub ">
                                    <li className="sidebar__sub-item">
                                        <Link to="/jewels">Tất cả trang sức</Link>
                                    </li>
                                    <li className="sidebar__sub-item">
                                        <Link to="/jewels/ring">Nhẫn</Link>
                                    </li>
                                    <li className="sidebar__sub-item">
                                        <Link to="/jewels/bracelet">Lắc tay</Link>
                                    </li>
                                    <li className="sidebar__sub-item">
                                        <Link to="/jewels/earrings">Khuyên tai</Link>
                                    </li>
                                    <li className="sidebar__sub-item">
                                        <Link to="/jewels/necklace">Dây chuyền</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar__item">
                            <Link to="/glass" className='sidebar__link'>KÍNH RÂM</Link>
                            </li>
                            <li className="sidebar__item">
                                <p className="sidebar-title"><p onClick={handelSidebar}>DÂY ĐỒNG HỒ</p><i class="fa-thin fa-chevron-down"></i></p>
                                <ul className="sidebar__sub ">
                                <li className="sidebar__sub-item">
                                        <Link to="/watchstrap">Tất cả dây đồng hồ</Link>
                                    </li>
                                    <li className="sidebar__sub-item">
                                        <Link to="/watchstrap/metal">Dây kim loại</Link>
                                    </li>
                                    <li className="sidebar__sub-item">
                                        <Link to="/watchstrap/lethear">Dây da</Link>
                                    </li>
                                    <li className="sidebar__sub-item">
                                        <Link to="/watchstrap/fabric">Dây Vải</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="contact__list">
                            <li className="contact__item">
                                <Link to="/" className="contact__link">Liên hệ với chúng tôi</Link>
                            </li>
                            <li className="contact__item">
                                <Link to="/" className="contact__link">Đổi trả</Link>
                            </li>
                        </ul>
                        <ul className="service-list">
                            <li className="service-item"> FREESHIP</li>
                            <li className="service-item"> HOÀN TRẢ MIỄN PHÍ</li>
                            <li className="service-item"> BẢO HÀNH 2 NĂM </li>
                        </ul>
                    </div>
                </div>
                <div className="moblie__nav-item">
                    <Link to="/search"><i class="fa-thin fa-magnifying-glass"></i></Link>
                </div>
                <div className="moblie__nav-item">
                    <Link to="/wishlist"><i class="fa-thin fa-heart"></i></Link>
                </div>
                <div className="moblie__nav-item">
                    <input type="checkbox" hidden name='cart__mobile' id='cart__mobile'/> 
                    <label htmlFor="cart__mobile" onClick={handelOpenCart} className='cart__open'><i class="fa-thin fa-cart-shopping"></i></label>
                    <label htmlFor="cart__mobile" className='cart__overlay'></label>
                    <div htmlFor="cart__mobile" className='cart__container'>
                        <div className="cart__title">
                            <p className="cart__title-item">GIỎ HÀNG CỦA BẠN</p>
                            <label htmlFor="cart__mobile" className='cart__close'><i class="fa-thin fa-xmark"></i></label>
                        </div>
                        <div className="cart__content">
                           <CartInNav renderList={cartList} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBarMoblie;