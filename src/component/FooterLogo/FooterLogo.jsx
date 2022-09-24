import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const FooterLogo = () => {
    return (
        <div className='footerlogo'> 
            <div>
                <p>Clone By Nguyen</p>
            </div>
            <div>
                <p><Link to={'/'}>DANIEL WALLINGTON</Link></p>
            </div>
            <div>
                <p>© 2022 Daniel Wellington AB</p>
            </div>
        </div>
    );
};

export default FooterLogo;