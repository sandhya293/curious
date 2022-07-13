import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
//import Sidebar from "../Sidebar";
import './HeroStyle.css'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElement";
//import { Container, Row, Col, Button } from "reactstrap";
//import Slider from "../Slider";
import GuestQuestions from "../AddQuestions/GuestQuestions";
import ContactUs from "../ContactUs";
import Team from "../Team/index";
import Tag from "../Tags/index";
import Footer from "../Footer";
import Try from "../AboutUs/Try";
//import togglepopup from '../LogIn/query'
import '../LogIn/login.css'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import { FilledInput, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import UserService from "../../Services/UserService";
import axios from "axios";
import { PhotoCamera } from '@material-ui/icons';


const Hero = () => {

  const [showModel, setShowModel] = React.useState(false);
  const Add_Successfull = () => {
    toast.success('Log In...', {
      icon: '👏',
    });
    setShowModel(false)
  }

  const loginFail = () => {
    toast.error('Oppsss! Please check your ID or Password.', {
      icon: ':(',
    });
  }

  const Add_SuccessfullSignUp = () => {
    toast.success('Registered...', {
      icon: '👏',
    });
    setShowModel(false)
  }

  const toggleModel = () => {
    setShowModel(!showModel)
  }

  const toggleModelSignUp = () => {
    setShowModelSignUp(!showModelSignUp)
  }

  const [showModelSignUp, setShowModelSignUp] = React.useState(false);


  /* --------LOGIN------ */
  const [data, setdata] = React.useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [User, setCheckUser] = useState([]);
  const handleSave = async (e) => {
    let res = await axios.get('http://llocalhost:8081/users/login');
    console.log("Data cgeck:-", res)

    setCheckUser(res);
    Add_Successfull()
  }
  // React.useEffect(() => {
  //   handleSave();
  // })

  const check_login = async () => {
    console.log("Data in check login:-", data)
    let result = await axios.post('http://localhost:8081/users/login', data)
    console.log("Check Login:-", result.data)
    console.log("Check Login:-", result);
    if (result.data != null) {
      localStorage.setItem('EmailID', data.email);
      localStorage.setItem('ID', data.userid);
      navigate("/home");
    }
    else {
      loginFail()
      setShowModel(false)
      navigate("/")
    }
  }

  /*-------------------------SIGN UP------------------------------ */
  const [formValue, setFormValue] = useState({
    email: "",
    password: '',
    firstname: '',
    lastname: ''
  });

  const RegiUser = async (e) => {
    e.preventDefault();
    let newDate = new Date()
    let newdata = {
      firstname: formValue.firstname,
      lastname: formValue.lastname,
      location: null,
      github: null,
      created_at: newDate.getDate(),
      is_active: { id: 1 },
      is_admin: { id: 7 },
      is_blocked: { id: 4 },
      is_superuser: { id: 7 },
      logins: {
        email: formValue.email,
        password: formValue.password
      }
    }

    console.log("Data email:- ", formValue.email)
    console.log("DATA regi:-", newdata)
    setFormValue(newdata)

    let res = await axios.post(`http://localhost:8081/users/signup`, newdata);
    console.log("Result:-", res)
    setFormValue("")
    Add_SuccessfullSignUp()
  }



  /*----------------------------GET ALL USER----------------------------*/
  // const [Tag, setTag] = useState([]);
  // const fetchData = async (e) => {
  //   let res = await axios.get(`http://localhost:8081/users/getUser`);
  //   setTag(res.data);
  //   console.log("ALL user:-",res)
  // }
  // React.useEffect(() => {
  //   fetchData();
  // })


  //password
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  return (
    <>
      <section id="hero">
        <section>
          <Navbar />

          <ToastContainer />

          <HeroContainer>
            <HeroContent className="heroMain">
              <HeroItems>
                <HeroH1>Curious </HeroH1>
                <HeroP>Find the best answer to your technical question</HeroP>
                <NavLink to="">
                  {/* <HeroBtn onClick={() => togglePopup()} className="first-button">JOIN US</HeroBtn> */}
                  <HeroBtn onClick={() => setShowModel(true)}>JOIN US</HeroBtn>
                </NavLink>
              </HeroItems>
            </HeroContent>
          </HeroContainer>
        </section>

        {/* <div className="popup1" id="popup-1">
                <div className="content">
                    <div className="close-btn" onClick={() => togglePopup()}>x</div>
                    <h1>Sign in</h1>
                    <div className="input-field"><input placeholder="Email" className="validate"/></div>
                    <div className="input-field"><input placeholder="Password" className="validate"/></div>
                    <button className="second-button">Sign in</button>                    
                    <p>Don't have an account? <a href="/signup.html">Sign Up</a></p>
                </div>
            </div> */}

        <section>
          <section>
            <Modal fullscreen="" isOpen={showModel} toggle={toggleModel}>
              <ModalHeader toggle={toggleModel}>
                Let's Sign In
                {/* <button type="button" className="close" aria-label="Close" onClick={() => setShowModel(false)} ><span aria-hidden="true">×</span></button> */}
              </ModalHeader>
              <ModalBody>
                <section>
                  <div className="input-field">
                    <input type='text' id='email' name='email' placeholder="Email" className="validate" onChange={(e) => { setdata({ ...data, email: e.target.value }) }} />
                  </div>
                  <div className="input-field">
                    <input type='password' id='password' name='password' placeholder="Password" className="validate" onChange={(e) => { setdata({ ...data, password: e.target.value }) }} />
                  </div>
                  <div>
                    <a href="/">Forgot Password ?</a>
                  </div>
                  {/* <TextField
                    fullWidth
                    label="Username"
                    id="outlined-start-adornment"
                    InputProps={{
                      startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                    onChange={e => setUserName(e.target.value)}
                  />

                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    // onChange={e => setPassword(e.target.value)}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end">
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                     /> */}

                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => { check_login() }} type="submit"> JOIN US </Button>
                {' '}
                <Button color="primary" onClick={() => setShowModelSignUp(true)}> Create One? </Button>
              </ModalFooter>
            </Modal>
          </section>
        </section>


        <section>
          <section>
            <Modal fullscreen="" isOpen={showModelSignUp} toggle={toggleModelSignUp}>
              <ModalHeader toggle={toggleModelSignUp}>
                Let's Get Connect, Register Here
              </ModalHeader>
              <ModalBody>
                <section>
                  <div className="input-field">
                    <input placeholder="First Name"
                      className="validate"
                      name='firstname'
                      onChange={(e) => { setFormValue({ ...formValue, firstname: e.target.value }) }}
                      value={formValue.firstname}
                    />
                  </div>
                  <div className="input-field">
                    <input placeholder="Last Name" className="validate"
                      name='lastname'
                      onChange={(e) => { setFormValue({ ...formValue, lastname: e.target.value }) }}
                      value={formValue.lastname}
                    />
                  </div>
                  <div className="input-field">
                    <input placeholder="Email" className="validate"
                      name='email'
                      onChange={(e) => { setFormValue({ ...formValue, email: e.target.value }) }}
                      value={formValue.email}
                    />
                  </div>
                  <div className="input-field">
                    <input placeholder="Password" className="validate"
                      name='password'
                      onChange={(e) => { setFormValue({ ...formValue, password: e.target.value }) }}
                      value={formValue.password}
                    />
                  </div>
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onClick={RegiUser} > SIGN UP </Button>
                {' '}
                <Button color="success" onClick={() => { setShowModelSignUp(false) }}> Already Have? </Button>
              </ModalFooter>
            </Modal>
          </section>
        </section>


        <GuestQuestions id='guestQ' />

        {/* <Slider id='slider'/>  */}
        {/* <Tag id='tag'/> */}

        <Tag id='tag' />
        <Team id='team' />
        <Try id='about' />
        <ContactUs id='contactus' />

        <Footer />

      </section>
    </>
  );
};

export default Hero;
