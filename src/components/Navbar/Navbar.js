import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button, Buttonn } from '../../globalStyles';
import { useAuth0 } from "@auth0/auth0-react";
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

function Navbar() {
  
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

  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

  window.addEventListener('resize', showButton);}

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
