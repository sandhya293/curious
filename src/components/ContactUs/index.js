import React from "react";
import Typical from "react-typical";
import imgBack from "../../Assets/Images/co3.png";
//import "../SignUp/signup.css";
import "./try.css";
import ScreenHeading from "../../Assets/ScreenHeading";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function ContactUs(props) {

  return (
    <>
      <ScreenHeading title={"Contact US"} subHeading={"Contact Us for any query"} />

      {/* <section className="sign-container fade-in" id={props.id || ""}> */}

      {/* <section className="central-form">
        <section className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Contact Us...", 1000]} />
          </h2>{" "}
        </section>

        <section className="back-form">
        
          <section className="img-back">
            <img src={imgBack} alt="" />
          </section> 
        
          <form >
            <label>Name</label>
            <input type="text" />

            <label>Email-ID</label>
            <input type="email" />

            <label>Message</label>
            <textarea/>

            <section className="send-btn">
              <button type="submit"> SIGN UP </button>
            </section>
          </form>

        </section>
      </section> */}

      <section id="contactus">

        <div class="contact-wrapper">

          <form id="contact-form" class="form-horizontal">
            <div class="form-group">
              <div class="col-sm-12">
                <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
              </div>
            </div>

            <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

            <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
              </div>
            </button>
          </form>


          <div class="direct-contact-container">

            <ul class="contact-list">
              <li class="list-item"><i class="fa fa-map-marker fa-2x">
                <span class="contact-text place"><a href="/">City, State</a></span></i>
              </li>
              {/* <li class="list-item"><i class="fa fa-phone fa-2x">
                <span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call" className="link">(212) 555-2368</a></span></i>
              </li> */}
              <li class="list-item"><i class="fa fa-envelope fa-2x">
                <span class="contact-text gmail"><a href="mailto:#" title="Send me an email">curious@gmail.com</a></span></i>
              </li>

            </ul>

            <hr />
            <ul class="social-media-list">
              <li><a href="/" target="_blank" class="contact-icon">
                {/* <i class="fa fa-github" aria-hidden="true"></i> */}
                <FaFacebook />
                </a>
              </li>
              <li><a href="/" target="_blank" class="contact-icon">
                {/* <i class="fa fa-codepen" aria-hidden="true"></i> */}
                <FaLinkedin />
                </a>
              </li>
              <li><a href="/" target="_blank" class="contact-icon">
                {/* <i class="fa fa-twitter" aria-hidden="true"></i> */}
                <FaTwitter />
                </a>
              </li>
              <li><a href="/" target="_blank" class="contact-icon">
                {/* <i class="fa fa-instagram" aria-hidden="true"></i> */}
                <FaInstagram />
              </a>
              </li>
            </ul>
            <hr />

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

          </div>

        </div>

      </section>


      {/* </section> */}
    </>
  );

}
