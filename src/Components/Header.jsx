'use client';

import React, { useState } from 'react';
import LogoImg from '/logo.svg';
import ProfileIMG from '/profile-img.png';
import { Link } from 'react-router-dom';


const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <header className="header-container">
      <div className="logo"> <img src={LogoImg} alt="Login" className='logo-img-header' /></div>

      <div className="user-profile" onClick={toggleDropdown}>
         <img src={ProfileIMG} alt="" className='profile-img' />
         <div>

          <h3 className="user-name">James Raymond</h3>
          <span className='user-account'>Account: 4453728992</span>
         </div>


        <div className={`dropdown-menu ${open ? 'show' : ''}`}>
          <ul>
            <li><Link>Log out</Link></li>
             
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
