import React from 'react'
import Navbar from '../NavHome/index'
//import './Profile.css'
import './New.css'
import img1 from '../../Assets/Images/menu.png'
import img2 from '../../Assets/Images/setting.png'
import img3 from '../../Assets/Images/profile-pic.png'
import img4 from '../../Assets/Images/instagram.png'
import img5 from '../../Assets/Images/telegram.png'
import img6 from '../../Assets/Images/dribble.png'
import img7 from '../../Assets/Images/arrow.png'
import UserService from '../../Services/UserService'

const Profile = () => {

  /* -----------------------get profile pick-------------------- */
  const [pro, setprofile] = React.useState([]);
  let getProfile = async () => {
    let Ans = await UserService.getAnswer();
    setprofile(Ans.data)
    console.log("data:-", Ans.data)
  }

  React.useEffect(() => {
    getProfile();
  }, [])


  return (
    <>
      <Navbar />

      {/* <div className='container-profile'>
          
          <div className='profile-box'>
            <img src={img1} alt='' className='menu-icon'/>
            <img src={img2} alt='' className='setting-icon'/>
            <img src={img3} alt='' className='profile-pic'/>

            <h3>Hetvi Patel</h3>
            <p>Web Developer At Google, California.</p>

            <div className='social-media'>
              <img src={img4} alt=''/>
              <img src={img5} alt=''/>
              <img src={img6} alt=''/>
            </div>

            <button type='button'>
                Follow
            </button>

            <div className='profile-bottom'>
              <p>Learn More About My Profile</p>
              <img src={img7} alt=''/> 
            </div> 
          </div>

        </div> */}


      <div className='containerprofilenew'>
        <div class="cardprofile-wrapper">
          <div class="user-pic">
            <img src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>

          <div class="name">
            <h3>Lorem Ipsum</h3>
            <p>Front End Web Developer</p>
          </div>
          <div class="social-details">
            <div class="post">
              <h3>528</h3>
              <p>Posts</p>
            </div>
            <div class="followers">
              <h3>12M</h3>
              <p>Followers</p>
            </div>
            <div class="following">
              <h3>182</h3>
              <p>Following</p>
            </div>
          </div>
          <div class="card-btn">
            <button type="button">UPDATE PROFILE</button>
            {/* <button type="button">Message</button> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile