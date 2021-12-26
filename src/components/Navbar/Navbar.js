import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button, Buttonn } from '../../globalStyles';
import { Typography, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import JSONPretty from 'react-json-pretty';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  Img
} from './Navbar.elements';
import Profile from '../../pages/SignUp/Profile';

function Navbar() {
  const { user } = useState();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

 
 
  return (
    
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              xcess Fund
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/lenders' onClick={closeMobileMenu}>
                  For Lenders
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/about' onClick={closeMobileMenu}>
                  About Us
                </NavLinks>
              </NavItem>
               <NavItemBtn>
       
          
           
              
         
                {button ? (
                  <NavBtnLink to='/auth'>
                    <Buttonn primary>LOGIN</Buttonn>
                  </NavBtnLink>
                  
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Buttonn onClick={closeMobileMenu} fontBig primary>
                      Sign Up
                    </Buttonn>
                  </NavBtnLink>
                  
                )}
              </NavItemBtn>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>Sign Up</Button>
                  </NavBtnLink>
                  
                ) : (
                  <NavBtnLink to='/login'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      LOGIN
                    </Button>
                  </NavBtnLink>
                  
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
