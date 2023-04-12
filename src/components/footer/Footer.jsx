import React from 'react'
import { Button } from '../../GlobalStyles'
import {FaFacebook,FaYoutube,FaTwitter,FaLinkedin,FaInstagram} from 'react-icons/fa' 
import { 
    FooterContainer,
    FooterSubHeading,
    FooterSubText,
    FooterSubscription,
    Form,
    FormInput,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIcon,
    SocialIconLink,
    WebsiteRights
} from './Footer.element'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
            Join our exclusive membership to receive 
            the latest news and trends
            </FooterSubHeading>
            <FooterSubText>
                you can unsubscribe at any time.
            </FooterSubText>
            <Form>
                <FormInput name="email" type="email" placeholder="your email" />
                <Button fontBg>Subscribe</Button>
                 
            </Form>
        </FooterSubscription>
        <FooterLinkContainer>
            <FooterLinkWrapper>
                <FooterLinkItem>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/sign-up'>Careers </FooterLink>
                    <FooterLink to='/sign-up'>Testimonials</FooterLink>
                    <FooterLink to='/sign-up'>Terms of services</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/sign-up'>Careers </FooterLink>
                    <FooterLink to='/sign-up'>Testimonials</FooterLink>
                    <FooterLink to='/sign-up'>Terms of services</FooterLink>
                </FooterLinkItem>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
                <FooterLinkItem>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/sign-up'>Careers </FooterLink>
                    <FooterLink to='/sign-up'>Testimonials</FooterLink>
                    <FooterLink to='/sign-up'>Terms of services</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLinkTitle>social media</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/sign-up'>Careers </FooterLink>
                    <FooterLink to='/sign-up'>Testimonials</FooterLink>
                    <FooterLink to='/sign-up'>Terms of services</FooterLink>
                </FooterLinkItem>
            </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    <SocialIcon />
                    ABEBE
                </SocialLogo>
                <WebsiteRights>
                    abebe  © 2022{'-'+ new Date().getFullYear()}
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href={'http://www.facebook.com/'} target="_blanck" arial-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href={'http://www.instagram.com/'} target="_blanck" arial-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href={'https://www.youtube.com/'} target="_blanck" arial-label="Youtube"
                       rel="noopener noreferrer"
                    >
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href={'http://www.twitter.com/'} target="_blanck" arial-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href={'http://www.linkedin.com/'} target="_blanck" arial-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
