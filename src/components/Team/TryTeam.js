import React from 'react'
import './TryTeam.css'
import ScreenHeading from "../../Assets/ScreenHeading";

const TryTeam = () => {
    return (
        <>
            <ScreenHeading title={"Team"} subHeading={"Curious team"} />   

            <div class="containerTeam" id='team'>
                <div class="grid">
                    
                    <div class="cardTeam">
                        <div class="cardTeam_img">
                            <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="" />
                        </div>
                        <div class="cardTeam_body">
                            <h2 class="cardTeam_title">Maria Wilson</h2>
                            <h6 class="designation">Lead Developer</h6>
                            <div class="call_btn">
                                {/* <a href="/" class="btn_icon">
                                    <i class="fas fa-phone-alt"></i>
                                    <span class="circle"></span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    
                    <div class="cardTeam">
                        <div class="cardTeam_img">
                            <img src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                        </div>
                        <div class="cardTeam_body">
                            <h2 class="cardTeam_title">David Romero</h2>
                            <h6 class="designation">UI Designer</h6>
                            <div class="call_btn">
                                {/* <a href="/" class="btn_icon">
                                    <i class="fas fa-phone-alt"></i>
                                    <span class="circle"></span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    
                    <div class="cardTeam">
                        <div class="cardTeam_img">
                            <img src="https://images.unsplash.com/photo-1516750084685-66c3b1f181ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="" />
                        </div>
                        <div class="cardTeam_body">
                            <h2 class="cardTeam_title">Lenora Jordan</h2>
                            <h6 class="designation">Project Manager</h6>
                            <div class="call_btn">
                                {/* <a href="/" class="btn_icon">
                                    <i class="fas fa-phone-alt"></i>
                                    <span class="circle"></span>
                                </a> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default TryTeam