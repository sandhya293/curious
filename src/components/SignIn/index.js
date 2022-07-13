// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from "react-router-dom";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   const navigate = useNavigate();

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus/>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"/>

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }} onClick={()=>navigate("/home")}>Sign In</Button>
            
//             <Grid container>
//               <Grid item xs>
//                 <Link href="/" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>

//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }


import React, { useState } from "react";
import Typical from "react-typical";
import imgBack from "../../Assets/Images/login.png";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
//import NavHome from '../Navbar/index'
import ScreenHeading from "../../Assets/ScreenHeading";
import axios from "axios";

export default function SignIn(props) 
{

  const [data, setdata] = React.useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [User, setCheckUser] = useState([]);

  const handleSave = async (e)=>{
    let res = await axios.get(`http://localhost:4500/api/user`);
    setCheckUser(res.data);
    console.log(res)
  }

  React.useEffect(  () => {  
       handleSave();
   })


   const check_login = async () => 
   {
    console.log(data)
    let res = await axios.post("http://localhost:4500/api/user", data)
      console.log(res.data)
    
          console.log(res);
          if(res.data != null)
          {
            navigate("/home");
          }
          else{
            navigate("/signup", { replace: true })
          }
  
    }
    
        // if ((res.data.data.length) === 1) {
        //     alert("Username and Password found");  
        //     navigate("/home", { replace: true })
        // } else {
        //    alert("Username and Password Wrong ");
        //    navigate("/signup", { replace: true })
        // }
    // });
    
  

  return (

    <>
    
    {/* <NavHome/> */}
    
    <div className="main-container fade-in" id={props.id || ""}>
    
    <ScreenHeading title={"JOIN IN"} subHeading={"Let's Sign In"} />   

      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Join In 📧", 1000]} />
          </h2>{" "}
        </div>
        <div className="back-form">
          <div className="img-back">
            <img src={imgBack} alt="" />
          </div>

          <form>
            <label htmlFor="email">Email</label>
            <input type="email" onChange={(e) => { setdata({ ...data, email: e.target.value }) }}/>
            
            <label htmlFor="password">Password</label>
            <input type="password" onChange={(e) => { setdata({ ...data, password: e.target.value }) }}/>
            
            <button type="button" onClick={() => {check_login()}}>LOG IN</button>
            
            <div className="send-btn">        
            </div>
          </form>

        </div>
      </div>
    </div>
    </>
  );
}
