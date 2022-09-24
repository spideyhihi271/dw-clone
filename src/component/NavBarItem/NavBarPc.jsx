import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartInNav from '../CartInNav/CartInNav';
import './style.css';
const NavBarPC = () => {
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
        <div className="nav__PC">
            <div className="nav__firstline">
                <div className="sidebar-search">
                    <div className="sidebar">
                        <input type="checkbox" name="sidebar" id="sidebar" hidden/>
                        <label htmlFor="sidebar" className='sidebar__open'><i class="fa-thin fa-bars"></i></label>
                        <label htmlFor="sidebar" className='sidebar__ovelay'></label>
                        <div className='sidebar__container'>
                            <div className="sidebar__container-title">
                                <p> MENU </p>
                                <label htmlFor="sidebar" className='sidebar__close'><i class="fa-thin fa-circle-xmark"></i></label>
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
                                            <Link to="/jewels/necklage">Dây chuyền</Link>
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
                                            <Link to="/watchstrap/leather">Dây da</Link>
                                        </li>
                                        <li className="sidebar__sub-item">
                                            <Link to="/watchstrap/fabric">Dây vải</Link>
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
                    <div className="search">
                        <Link to="/search"><i class="fa-thin fa-magnifying-glass"></i></Link>
                    </div>
                </div>
                <div className="logo">
                    <Link to="/">DANIEL WALLINGTON </Link>
                </div>
                <div className="wishList-cart">
                    <div className="wishList">
                        <Link to="/wishList"><i class="fa-thin fa-heart"></i></Link>
                    </div>
                    <div className="wishList">
                        <p className="countCart"></p>
                        <input type="checkbox" hidden id='cart'/> 
                        <label htmlFor="cart" onClick={handelOpenCart} className='cart__open'><i class="fa-thin fa-cart-shopping"></i></label>
                        <label htmlFor="cart" className='cart__overlay'></label>
                        <div htmlFor="cart" className='cart__container'>
                            <div className="cart__title">
                                <p className="cart__title-item">GIỎ HÀNG CỦA BẠN</p>
                                <label htmlFor="cart" className='cart__close'><i class="fa-thin fa-xmark"></i></label>
                            </div>
                            <div className="cart__content">
                                <CartInNav renderList={cartList}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='navPC__main'>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to='/watch' className="nav__title">
                           <p className="nav__title-item"> ĐỒNG HỒ </p>
                           <p className="nav__title-decor">.</p>
                        </Link>
                       <ul className="sub__nav-list">
                            <li className="sub__nav-item">
                                <Link to="/watch" className="sub__nav-link">Tất cả đồng hồ</Link>
                            </li>
                            <li className="sub__nav-item">
                                <Link to="/watch/men" className="sub__nav-link">Đồng hồ nam</Link>
                            </li>
                            <li className="sub__nav-item">
                                <Link to="/watch/women" className="sub__nav-link">Đồng hồ nữ</Link>
                            </li>
                       </ul>
                    </li>
                    <li className="nav__item">
                        <Link to='/watchstrap' className="nav__title">
                           <p className="nav__title-item"> DÂY ĐỒNG HỒ </p>
                           <p className="nav__title-decor">.</p>
                        </Link>
                       <ul className="sub__nav-list">
                            <li className="sub__nav-item">
                                <Link to="/watchstrap" className="sub__nav-link">Tất cả dây</Link>
                            </li>
                            <li className="sub__nav-item">
                                <Link to="/watchstrap/metal" className="sub__nav-link">Dây kim loại</Link>
                            </li>
                            <li className="sub__nav-item">
                                <Link to="/watchstrap/leather" className="sub__nav-link">Dây da</Link>
                            </li>
                            <li className="sub__nav-item">
                                <Link to="/watchstrap/fabric" className="sub__nav-link">Dây vải</Link>
                            </li>
                       </ul>
                    </li>
                    <li className="nav__item">
                        <Link to='/' className="nav__title">
                           <p className="nav__title-item"> TRANG SỨC </p>
                           <p className="nav__title-decor">.</p>
                        </Link>
                       <ul className="sub__nav-list">
                            <li className="sub__nav-item">
                                <Link to="/jewels" className="sub__nav-link">Tất cả trang sức</Link>
                            </li>
                            <li className="sub__nav-item">
                                <Link to="/jewels/ring" className="sub__nav-link">Nhẫn </Link>
                            </li>
                            <li className="sub__nav-item">
                                <Link to="/jewels/bracelet" className="sub__nav-link">Lắc tay</Link>
                            </li>
                            <li className="sub__nav-item">
                                <Link to="/jewels/earrings" className="sub__nav-link">Khuyên tai</Link>
                            </li>
                            <li className="sub__nav-item">
                                <Link to="/jewels/necklage" className="sub__nav-link">Dây chuyền</Link>
                            </li>
                       </ul>
                    </li>
                    <li className="nav__item">
                        <Link to='/glass' className="nav__title">
                           <p className="nav__title-item"> KÍNH RÂM </p>
                           <p className="nav__title-decor">.</p>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/' className="nav__title">
                           <p className="nav__title-item"> LIÊN HỆ CHÚNG TÔI </p>
                           <p className="nav__title-decor">.</p>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/' className="nav__title">
                           <p className="nav__title-item"> ĐỔI TRẢ </p>
                           <p className="nav__title-decor">.</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBarPC;