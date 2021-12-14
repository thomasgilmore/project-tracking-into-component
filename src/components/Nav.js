import React from 'react'
import './nav.css'
import Logo from '../images/logo.svg';

export default function Nav() {
  return (
    <div>
    <nav>
      <img src={Logo} className='navLogo' alt="Logo" />
      <ul className='navUl'>
        <li>PRODUCT</li>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li className='dot'></li>
        <li className='login'>LOGIN</li>
      </ul>
    </nav>
    </div>
  )
}
