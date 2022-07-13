// /*import React from 'react';
// import { Nav, NavLink, NavIcon, Bars } from './NavbarElement';

// const Navbar = ({toggle}) => {
//   return (
//     <>
//       <Nav>
//         <NavLink to='/'>Curious</NavLink>
//         <NavIcon onClick={toggle}>  
//           <p>Menu</p>
//           <Bars />
//         </NavIcon>
//       </Nav>
//     </>
//   );
// }; 

// export default Navbar;
// */


import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import { FaQuestionCircle } from 'react-icons/fa';

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <section className='navbar'>

            <section className='container'>
                <h1><span>CURIOUS</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#hero'>Home</a></li>
                    <li><a href='#guestQ'> Content </a></li>
                    <li><a href='#tag'>Tags</a></li>
                    <li><a href='#team'>Team</a></li>
                    {/* <li><a href='/'>Article</a></li> */}
                    <li><a href='#about'>About Us</a></li>
                    <li><a href='#contactus'>Contact Us</a></li>
                </ul>
                <section className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </section>
            </section>
        </section>
    )
}

export default Navbar



// import React from 'react'
// import './TryNav.css'

// const Navbar = () => {
//   return (
//     <div class="nav">
//       <div class="nav-header">
//         <div class="nav-title">
//           CURIOUS
//         </div>
//       </div>

//       {/* <div class="nav-btn">
//       <label for="nav-check">
//         <span></span>
//         <span></span>
//         <span></span>
//       </label>
//     </div> */}

//       <div class="nav-links">
//         <a href="#hero">Home</a>
//         <a href="#guestQ">Content</a>
//         <a href="#tag">Tags</a>
//         <a href="#team">Team</a>
//         <a href="#contactus">Contact US</a>
//       </div>
//     </div>
//   );
// }

// export default Navbar

