import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo2.jpg';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() =>{
      showButton();
    }, []);

    window.addEventListener('resize' , showButton);

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='logo' width="100px" height="70px"/>
        </NavLink>
        <Bars />
        <NavMenu className={click ? "nav-options active" : "nav-options"}>
          <NavLink to='/about' className="nav-links" onClick={closeMobileMenu}>
            About
          </NavLink>
          <NavLink to='/feature' className="nav-links" onClick={closeMobileMenu}>
            Features
          </NavLink>
          <NavLink to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' className="nav-links" onClick={closeMobileMenu}>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>

        


      </Nav>
    </>
  );
};

export default Navbar;