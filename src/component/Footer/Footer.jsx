import React from 'react';
import FooterIntroduction from '../FooterIntrodution/FooterIntroduction';
import FooterLogo from '../FooterLogo/FooterLogo';
import FooterMobile from '../FooterMobile/FooterMobile';
import FooterPC from '../FooterPC/FooterPC';
import './style.css';

const Footer = () => {
    return (
        <div className='footer__container'>
            <FooterIntroduction/>
            <FooterPC/>
            <FooterMobile/>
            <FooterLogo/>
        </div>
    );
};

export default Footer;