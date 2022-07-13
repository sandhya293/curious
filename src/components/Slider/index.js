import React from 'react'
import './slider.css'
import {FaClone} from 'react-icons/fa'
import Typical from "react-typical";

const Slider = (props) => {

  return(
    <section id='#slider'>
    <section className='containerSlider'>
        <h3 className='centered'>
          <span className="primary-text">
            <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Here You Get All Your Answer...🌟",
                    1000,
                    "Mobile Application Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                  />
            </h1>     
          </span>
        </h3>
        <p className="profile-role-tagline">
          A public platform building the definitive collection of coding questions & answers.<br/>
          Empowering the world to develop technology through collective knowledge.
        </p>
        <a className='linkgo' href='/'><FaClone/> Let's Go</a>    
    </section>
    </section>
  )
}

export default Slider;


/*
  <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Mobile Application Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                  />
              </h1>
*/