// import React, {useState} from 'react'
// import {HiOutlineMenuAlt4} from 'react-icons/hi'
// import {FaRegTimesCircle} from 'react-icons/fa'
// import { FaQuestionCircle } from 'react-icons/fa';

// import './NavHome.css'
// import Footer from '../Footer';

// const Navbar = () => {

//     const[click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     return (
//         <>
//         <section className='navbar'>
//             <section className='container'>
//                 <h1><span><FaQuestionCircle />Curious</span></h1>
      
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                     <li><a href='/home'>Home</a></li>
//                     <li><a href='/questions'>Content</a></li>
//                     <li><a href='/tag'>Tags</a></li>
//                     {/* <li><a href='/home'>Article</a></li> */}
//                     <li><a href='/about'>About Us</a></li>
//                     <li><a href='/profile'>Profile</a></li>
//                     <li><a href='/'>Log Out</a></li>
//                 </ul>
//                 <section className='hamburger' onClick={handleClick}>
//                     {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
//                 </section>
//             </section>
            
//         </section>
        
//         </>
//     )
// }

// export default Navbar

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate} from 'react-router-dom'
import UserService from '../../Services/UserService';

const pages = ['Home', 'Content', 'Tags', 'Article','About Us'];
const settings = ['Profile', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const navigate = useNavigate();

  const canRedirect = (page) =>
  {
        page === 'Profile' && navigate('/profile')
        page === 'Home' && navigate('/home')
        page === 'Content' && navigate('/questions')
        page === 'Tags' && navigate('/taghome')
        page === 'Article' && navigate('/article')
        page === 'About Us' && navigate('/aboutHome')
        page === 'Logout' && navigate('/') && localStorage.removeItem('EmailID')
  }

  /* -----------------------get profile pick-------------------- */

  // const [pro, setprofile] = React.useState([]);
  // let getProfile = async () => {
  //   let Ans = await UserService.getAnswer();
  //   setprofile(Ans.data)
  //   console.log("data:-",Ans.data)
    
  // }
  // React.useEffect(() => {
  //   getProfile();
  // },[])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}> 
            Curious 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left', }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left', }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, }}>
              {pages.map((page) => (
                <MenuItem key={page}>{page}</MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Typography variant="h5" noWrap component="a" href="" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
            Curious
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={() => canRedirect(page)} sx={{ my: 2, color: 'white', display: 'block' }}>{page}</Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => canRedirect(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;