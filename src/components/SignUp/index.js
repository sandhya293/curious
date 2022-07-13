/*import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}*/



import React from "react";
import Typical from "react-typical";
import imgBack from "../../images/s1.png";
import "../SignUp/signup.css";
//import Grid from '@mui/material/Grid';
//import Link from '@mui/material/Link';
//import NavHome from '../Navbar/index'
import ScreenHeading from "../../Assets/ScreenHeading";

export default function Signup(props) 
{

  return (

    <>  
      {/* <NavHome/> */}
    
      <div className="sign-container fade-in" id={props.id || ""}>

      <ScreenHeading title={"Register Here"} subHeading={"Let's Get Connect"} />   

        <div className="central-form">
          <div className="col">
            <h2 className="title">
              <Typical loop={Infinity} steps={["Register your self", 1000]} />
            </h2>{" "}
          </div>

          <div className="back-form">
          
            <div className="img-back">
              <img src={imgBack} alt="" />
            </div>
          
            <form >
              <label>Name</label>
              <input type="text" />

              <label>Email-ID</label>
              <input type="email" />

              <label>Password</label>
              <input type="password" />

              <label>Confirm Password</label>
              <input type="password"/>

              <div className="send-btn">
                <button type="submit"> SIGN UP </button>
              </div>
            </form>

          </div>
          <a href="/signin" className="navlink"> Already have an account? Sign in </a>
        </div>
        {/* <Grid container>
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
        </Grid> */}
      </div>
    </>
  );

}




// import React, { useState } from 'react'
// import "../SignUp/signup.css";
// import {login,regi} from "../SignUp/script";
// import img1 from "../../Assets/Images/login1.jpg";

// export default function Signup(props){

//   const [Question, setQuestion] = React.useState(0);

//   const [formName,setFormName]=useState(true)
//   return (
//     <>
//       <div className="account-page">
//         <div className="container">
//           {/* <img src={img1} width="100%" alt=""/> */}
//           <div className="row">

//             <div className="col-2">
//               <div className="form-container">
//                 <div className="form-btn">
//                   <span onClick={() => login}>Login</span>
//                   <span onClick={() => regi}>Register</span>
//                   <hr id="Indicator" />
//                 </div>
//                 {
//                   formName && <form id="LoginForm" style={{ zIndex: "10" }}>
//                     <input type="text" placeholder="Username" />
//                     hii
//                     <input type="password" placeholder="Password" />
//                     <button type="submit" class="btn">LOGIN</button><br />
//                     <a href="/">Forgot Password</a>
//                   </form> 

//                 }

//               </div>
//             </div>
                
//             </div>
//         </div>
//       </div>

//     </>
//   )
// }
