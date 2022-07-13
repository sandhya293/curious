/*import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        WWW.CURIOUS.ORG
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
     <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'auto',
        bottom: '0'
      }}
    >
      <CssBaseline />
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
*/

import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElement.js';
import './try1.css'

const Footer = () => {
  return (
    // <FooterContainer>
    //   <FooterWrap>
    //     <SocialMedia>

    //       <SocialMediaWrap>  
    //         <SocialLogo to='/'>WWW.CURIOUS.ORG</SocialLogo>
    //         <SocialIcons>
    //           <SocialIconLink href='/' target='_blank'>
    //             <FaFacebook />
    //           </SocialIconLink>
    //           <SocialIconLink href='/' target='_blank'>
    //             <FaInstagram />
    //           </SocialIconLink>
    //           <SocialIconLink href='/' target='_blank'>
    //             <FaYoutube />
    //           </SocialIconLink>
    //           <SocialIconLink href='/' target='_blank'>
    //             <FaTwitter />
    //           </SocialIconLink>
    //           <SocialIconLink href='/' target='_blank'>
    //             <FaLinkedin />
    //           </SocialIconLink>
    //         </SocialIcons>
    //       </SocialMediaWrap>

    //     </SocialMedia>
    //   </FooterWrap>
    // </FooterContainer>


    <footer>
      <div class="footer">
        <div class="sticker">
          <a href="/"><FaFacebook /></a>
          <a href="/"><FaInstagram /></a>
          <a href="/"><FaLinkedin /></a>
          <a href="/"><FaTwitter /></a>
        </div>

        <div class="row">
          <ul>
            <li><a href="/">Contact us</a></li>
            <li><a href="/">Our Services</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms & Conditions</a></li>
            <li><a href="/">Career</a></li>
          </ul>
        </div>

        <div class="row">
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
        </div>
      </div>
    </footer>


  );
};

export default Footer;
