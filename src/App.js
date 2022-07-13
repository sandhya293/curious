import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/index";
import SignIn from "./components/SignIn/index";
import "./Assets/CSS/Custom.css";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddQuestions from "./components/AddQuestions";
import Slider from "./components/Slider";
import Home from './components/Home/index';
import Viewquestions from './components/AddQuestions/Viewquestions';
import {BsArrowUpSquare} from 'react-icons/bs'
import './App.css'
import GuestQuestions from "./components/AddQuestions/GuestQuestions";
import Tag from "./components/Tags";
import NewHome from "./components/NewHome";
import Article from "./components/Article";
import AboutUs from "./components/AboutUs";
import Profile from "./components/Profile";
import ViewArticle from "./components/Article/ViewArticle";
import Try from "./components/AboutUs/Try";
import TagHome from "./components/Tags/TagHome";
import TagArticle from "./components/Article/TagArticle";
import MainTagArticle from "./components/Article/MainTagArticle";
import DemoHome from "./components/NewHome/DemoNewHome";

import AdminHome from "./components/Admin/AdminHome/index";
import AdminQue from "./components/Admin/AdminQusetions/index";
import AdminDemo from "./components/Admin/AdminDemo/AdminDemo";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero id='hero'/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/questions" element={<AddQuestions />} />
        <Route path="/Viewquestions/:id" element={<Viewquestions />} />
        <Route path="/slider" element={ <Slider/>} />
        {/* <Route path="/home" element={<Home/>} /> */}
        <Route path="/home" element={<NewHome/>} />
        <Route path="/newhome" element={<DemoHome/>} />
        <Route path="/tag" element={<Home/>} />
        <Route path="/taghome" element={<TagHome/>} />
        <Route path="/article" element={<Article/>} />
        <Route path="/aboutHome" element={<AboutUs/>} />
        <Route path="/about" element={<Try/>} />
        <Route path="/profile" element={<Profile/> } />
        <Route path="/viewArticle" element={<ViewArticle/> } />
        <Route path="/tagarticle/:tagId" element={<TagArticle/> } />
        <Route path="/maintagarticle" element={ <MainTagArticle/> } />
        {/* <Route path="/guestquestions" element={<GuestQuestions id='guestQ'/>} /> */}

        <Route path="/adminhome" element={ <AdminHome/> } />
        <Route path="/adminquestions" element={ <AdminQue/> } />
        <Route path="/admindemo" element={ <AdminDemo/> } />
        {/* <Route path="/adminnav" element={ <AdminNav/> } /> */}
        
      </Routes>

    </>
  );

}

export default App;
