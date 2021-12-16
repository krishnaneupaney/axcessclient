import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {animateScroll as scroll} from 'react-scroll';
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
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
      if(window.scrollY >= 80){
          setScrollNav(true)
      } else {
          setScrollNav(false)
      }
  }

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

  const toggleHome = () => {
    scroll.scrollToTop();
};

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu, toggleHome}>
              <NavIcon />
              Axcess Fund
            </NavLogo>
            <MobileIcon onClick={handleClick, toggleHome}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80} >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}>
                  Products
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
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
