import React from 'react'
import './DemoNewHome.css'
import ScrollService from "../../Assets/ScrollService";
import Navbar from '../NavHome';

const DemoNewHome = () => {

    const SCREEN_CONSTSANTS = {
        description:
            "Empowering the world to develop technology through collective knowledge. Our public platform serves 100 million people every month, making it one of the most popular websites in the world.",
        highlights: {
            bullets: [
                "Curious helps people find the answers they need, when they need them.",
                "Be flexible and inclusive",
                "Be transparent",
                "Learn, share, grow",
                "Empower people to deliver outstanding results",
            ],
            heading: "Here are a Few Highlights:",
        },
    };

    const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ));
    };

    return (

        <>
            <Navbar />

            <div className="about-me-container screen-container fade-in">
                <div className="about-me-parent">
                    <div className="about-me-card">
                        <div className="about-me-profile"></div>
                        <div className="about-me-details">
                            <span className="about-me-description">
                                {SCREEN_CONSTSANTS.description}
                            </span>
                            <div className="about-me-highlights">
                                <div className="highlight-heading">
                                    <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                                </div>
                                {renderHighlight()}
                            </div>
                            {/* <div className="about-me-options">
                                <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                    {" "} Hire Me{" "}
                                </button>

                                <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToSignUp()}>
                                    {" "} Sign Up{" "}
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default DemoNewHome