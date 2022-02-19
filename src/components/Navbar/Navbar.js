import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button, Buttonn } from '../../globalStyles';
 
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
    
      <IconContext.Provider value={{ color: 'green' }}>
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
                <NavLinks to='/renters' onClick={closeMobileMenu}>
                  Renters
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/landlords' onClick={closeMobileMenu}>
                  Landlords
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
                    <Button primary>Login/Sign Up</Button>
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
