import React from 'react'
import './Try.css'
import ScreenHeading from "../../Assets/ScreenHeading";

const Try = () => {
    return (

        <>
            <section class="page-sectionTry" id="about">
                <div class="containerTry">
                    {/* <div class="text-center">
                        <h2 class="section-headingTry text-uppercase">About</h2>
                        <h3 class="section-subheadingTry text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div> */}
                    <ScreenHeading title={"About Us"} subHeading={"Why choose us"} />
                    <ul class="timeline">
                        <li>
                            <div class="timeline-image"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2009-2011</h4>
                                    <h5 class="subheadingTry">Our Humble Beginnings</h5>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 class="subheadingTry">An Agency is Born</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-image"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>December 2015</h4>
                                    <h4 class="subheadingTry">Transition to Full Service</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
                            </div>
                        </li>

                        <li class="timeline-inverted">
                            <div class="timeline-image">
                                <a href="/">
                                    <h4> View <br /> More </h4>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>

    )
}

export default Try