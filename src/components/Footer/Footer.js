import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import logo from '../../images/logo.png'
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
  
function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join to be notified when we lunch our platform!  
        </FooterSubHeading>
    
        <Form action="https://submit-form.com/iNlNSMf3">
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Get notified</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/renters'>How it works</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/why'>Our Why</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Consumer</FooterLinkTitle>
            <FooterLink to='/sign-up'>Contact</FooterLink>
            <FooterLink to='/sign-up'>Waitlist</FooterLink>
            <FooterLink to='/form'>Help</FooterLink>
            <FooterLink to='/privacy'>Privacy</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Partner</FooterLinkTitle>
            <FooterLink to='/sign-up'>Contact Us</FooterLink>
            <FooterLink to='/lender'>Lenders</FooterLink>
            <FooterLink to='/licenses'>Licenses</FooterLink>
            <FooterLink to='/terms'>Terms</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Support</FooterLinkTitle>
            <FooterLink to='/resources'>Resources</FooterLink>
             <FooterLink >Blog</FooterLink>
             <FooterLink to='/terms'>Agreements</FooterLink>
            <FooterLink to='/sign-up'>Complaint</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        
        <SocialMediaWrap>
                      <img src={logo} style={{width:"11%", height: "11%"}}/>

          <SocialLogo to='/'>
            <SocialIcon />
            xcess Fund
          </SocialLogo>
          
          <WebsiteRights>Axcess Fund © 2022</WebsiteRights>
 
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/axcess.fund' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/krishnaneupaney/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://twitter.com' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/company/axcessfund/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
   );
}

export default Footer;
