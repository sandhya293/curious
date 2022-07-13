import styled from 'styled-components';
import { IoHandRightOutline,IoHandRightSharp } from "react-icons/io5";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
//import { NavLink as Link } from 'react-router-dom';
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
//import { SportsRugbySharp } from '@material-ui/icons';

export const QuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px; 
`;

export const QuestionContainer = styled.section`
  display: flex;
  flex-direction: column;
  /*align-items: center;
  justify-content: center;
  height: 100vh;*/
  background: #B8B8B8;
  width: 70%;
  border-radius: 18px;
`;

export const QH1 = styled.h1`
  font-size: 30px;
  margin-bottom: 1rem;
  letter-spacing: 3px;
  margin-top: 3%;
  margin-left: 5%;
  width: 85%;
  background: #fff;
  padding: 10px;
`;

export const QP = styled.p`
  font-size: 20px;
  margin-bottom: 2rem;
  margin-top: 3%;
  margin-left: 5%;
  font-family: serif;
`;


export const Bars = styled(IoHandRightOutline)`
  color: #000;
  margin-top: 4%;
  margin-left: 20px;
  font-size: 2rem;
`;

export const BarsFillQ = styled(IoHandRightSharp)`
  color: #000;
  margin-top: 4%;
  margin-left: 20px;
  font-size: 2rem;
`;

export const Bars1 = styled(AiOutlineHeart)`
  color: #000;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 2rem;
`;

export const BarsFill = styled(AiFillHeart)`
  color: #000;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 2rem;
`;

export const Comment = styled(BsFillChatLeftQuoteFill)`
  color: #000;
  margin-top: 25px;
  margin-left: 20px;
  font-size: 1.5rem;
`;


export const QueIcon = styled.section`
  color: #000;
  display: flex;
  
  h1 {
    font-size: 30px;
    margin-bottom: 1rem;
    margin-top: 3%;
    margin-left: 10px;
    width: 90%;
    padding: 10px;
    background: #60A3D9;
    color: #000;
    font-family: serif;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`;

export const AnsIcon = styled.section`
  color: #000;
  display: flex;

  p {
    font-size: 20px;
    margin-bottom: 1rem;
    margin-top: 10px;
    margin-left: 60px;
    width: 75%;
    padding: 5px;
    color: #000;
    font-family: serif;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  p:hover{
    font-size: 20px;
    margin-bottom: 1rem;
    margin-top: 10px;
    margin-left: 60px;
    width: 75%;
    padding: 5px;
    color: #000;
    font-family: serif;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const PopUp = styled.section`
  width: 400px;
  background: #fff;
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%,-50%) scale(0.1);
  text-align: center;
  padding: 0 30px 30px;
  color: #333;
  visibility: hidden;
  transition: transform 0.4s, top 0.4s;
`

export const openPopup = styled.section`
  visibility: hidden;
  top: 0;
  transform: translate(-50%,-50%) scale(0.1); 
`

/*
.popup img{
  width: 100px;
  margin-top: -50px;
  border-radius: 50%;
  box-shadow: 0 2px 5px SportsRugbySharp(0,0,0,0.2);
}
*/

