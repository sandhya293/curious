import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  /*background-color: #0d0909;*/
  /*background-color: #001079;*/
  background: rgb(11,0,100);
  background: radial-gradient(circle, rgba(11,0,100,1) 6%, rgba(0,0,0,1) 74%);
  width: 100%;
  position: absolute; 
`;

export const FooterWrap = styled.section`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*max-width: 1300px;*/
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  /*max-width: 1300px;*/
  width: 100%;
`;

export const SocialMediaWrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SocialIcons = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
