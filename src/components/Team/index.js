import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import ScreenHeading from "../../utilities/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animation";
import "./Team.css";
import lady from "../../Assets/Images/try1.jpg";
import mike from "../../Assets/Images/try1.jpg";
import man from "../../Assets/Images/try1.jpg";
import shape from "../../Assets/Images/shape-bg.png";
import ScreenHeading from "../../Assets/ScreenHeading";
import axios from "axios";

export default function Team(props) {

  const [User, setUser] = useState([]);

  const handleSave = async (e) => {
    let res = await axios.get(`http://localhost:8081/users/getUser`);
    setUser(res.data);
    console.log(res)
  }
  React.useEffect(() => {
    handleSave();
  },[])

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading title={"Team"} subHeading={"Curious team"} />

      <section className="testimonial-section fade-in" id={props.id || ""}>
        <section className="container">
          <section className="row">

            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>

              {
                User.map(
                  entry => (
                    <section className="col-lg-12">
                      <section className="testi-item">
                        <section className="testi-comment">
                          <p>
                            <i className="fa fa-quote-left" />
                            I patronized Ehizeex and when He delivered, I honestly
                            fell in love with the project He is a very honest guy and
                            he delivers ontime.
                            <i className="fa fa-quote-right" />
                          </p>
                          <ul className="stars list-unstyled">
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star-half-alt" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                          </ul>
                        </section>

                        <section className="client-info">
                          <img src={lady} alt="no internet connection"></img>
                          <h5>{entry.firstname + entry.lastname}</h5>
                          <p>{"Github ID:- " + entry.github}</p>
                        </section>

                      </section>
                    </section>

                  )
                )
              }



              {/* <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={ lady } alt="no internet connection"></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      It was nice hiring this guy for my e-commerce project.He
                      delivered even more than i can imagine. I recommend him
                      for you.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                  <img src={ man } alt="no internet connection"></img>
                    <h5>Mikel</h5>
                    <p>CEO MikeTech</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      When he delivered my job, my head spinned, it was so nice
                      and he implemented every functionality i requested for.
                      Thank you.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={ mike } alt="no internet connection"></img> 
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      This guy is incredibly awesome, I hired him and when He
                      delivered, I honestly fell in love with the project. He is
                      indeed a great guy,
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src="/Images/aboutUs.jpg" alt="no internet connection"></img>
                    <h5>John Smith</h5>
                    <p>Bnaker</p>
                  </div>
                </div>
              </div> */}
            </OwlCarousel>

          </section>
        </section>
      </section>
      <div className="footer-image">
        <img src={shape} alt="no internet connection"></img>
      </div>
    </div>
  );
}
