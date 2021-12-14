import React, { useState } from 'react';
import './mobilenav.css';
import Logo from '../images/logo.svg';
import IconHamburger from '../images/icon-hamburger.svg';
import IconClose from '../images/icon-close.svg';

export default function MobileNav() {
  const [isVisibale, updateIsVisible] = useState(false);
  const [iconToShow, updateIconToShow] = useState(IconHamburger);

  const openMobileNav = () => {
    updateIsVisible(true);
    updateIconToShow(IconClose);
  }

  const closeMobileNav = () => {
    updateIsVisible(false);
    updateIconToShow(IconHamburger);
  }

  return (
    <div>
      <nav>
        <img src={Logo} className='mobileNavLogo' alt="Logo" />
        <button onClick={isVisibale ? closeMobileNav : openMobileNav} className='toggleMobileButton'><img src={iconToShow} className='toggleMobileButtonImg' alt="" /></button>
      </nav>
      {isVisibale ? <div className='mobileNavDiv'>
      <ul className='mobileNavUl'>
        <li>PRODUCT</li>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li className='line'></li>
        <li className='mobileLogin'>LOGIN</li>
      </ul>
    </div> : <span></span>}
    </div>
  )
}
