import * as React from "react";
import { useState } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import "./AddQuestion.css";
import QuestionService from '../../Services/QuestionService';
//import { PropaneSharp } from "@mui/icons-material";
// import ScreenHeading from "../../Assets/ScreenHeading";
//import NavHome from "../NavHome/index";
//import { Collapse } from "reactstrap";
//import { LocalFireDepartment } from "@mui/icons-material";
//import { NavLink as Link } from "react-router-dom";
import '../Slider/index'
import { FaClone } from 'react-icons/fa'
import Typical from "react-typical";
import '../Slider/slider.css'
import ScreenHeading from "../../Assets/ScreenHeading";
import ScrollService from "../../Assets/ScrollService";
import Animations from "../../Assets/Animation";
import { FaGithub } from "react-icons/fa"
import "./TryQue.css";
import { Alert } from "@mui/material";

export default function GuestQuestions(props) {

  const [Que, setQue] = useState([]);
  let getQuestions = async () => {
    let questions = await QuestionService.getQuestions();
    setQue(questions.data)
    console.log(questions.data)
  }

  React.useEffect(() => {
    getQuestions();
  }, [])


  /*----------------------------NEW----------------------------------------- */
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };


  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Questions", logoSrc: <FaGithub /> },
    { label: "Tags", logoSrc: "programming-skills.svg" },
    { label: "Article", logoSrc: "projects.svg" },
  ];


  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 90 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 50 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "Mongo Db", ratingPercentage: 50 },
    { skill: "Core Java", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 90 },
  ];

  // const projectsDetails = [
  //   {
  //     title: "Personal Portfolio Website",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "A Personal Portfolio website to showcase all my details and projects at one place.",
  //     subHeading: "Technologies Used: React JS, Bootsrap",
  //   },
  //   {
  //     title: "Mobile E-shop ",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "An ecommerce application designed to sell products online wth payment system integration",
  //     subHeading:
  //       "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
  //   },
  //   {
  //     title: "Ecommerce Website ",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
  //     subHeading:
  //       "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
  //   },
  // ];

  const resume = [
    <div className="resume-screen-container" key="education">

      {
        Que.map(
          entry => (
            <ResumeHeading
              heading={entry.question}
              // subHeading={entry.question}
              fromDate={"Answer"}
              toDate={"^"}
            />
          )
        )
      }

    </div>,


    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span><a href="#tag">{skill.skill}</a></span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Java"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Machine Learning"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Cloud Computing"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ]

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"What is the difference between String and string in C#?"}
        subHeading={"Example (note the case): string s = 'Hello world!'; String s = 'Hello world!'; What are the guidelines for the use of each? And what are the differences?"}
        fromDate={"Answer"}
        toDate={"^"}
      />

      <ResumeHeading
        heading={"What is the difference between String and string in C#?"}
        subHeading={"Example (note the case): string s = 'Hello world!'; String s = 'Hello world!'; What are the guidelines for the use of each? And what are the differences?"}
        fromDate={"Answer"}
        toDate={"^"}
      />

      <ResumeHeading
        heading={"What is the difference between String and string in C#?"}
        subHeading={"Example (note the case): string s = 'Hello world!'; String s = 'Hello world!'; What are the guidelines for the use of each? And what are the differences?"}
        fromDate={"Answer"}
        toDate={"^"}
      />

    </div>,

    // /* WORK EXPERIENCE */
    // <div className="resume-screen-container" key="work-experience">
    //   <div className="experience-container">
    //     <ResumeHeading
    //       heading={"Ehizeex Technoloy"}
    //       subHeading={"FULL STACK DEVELOPER INTERN"}
    //       fromDate={"2021"}
    //       toDate={"Present"}
    //     />
    //     <div className="experience-description">
    //       <span className="resume-description-text">
    //         Currently working as MERN stack web and mobile developer and also an
    //         online instructor on udemy.
    //       </span>
    //     </div>
    //     <div className="experience-description">
    //       <span className="resume-description-text">
    //         - Developed an ecommerce website for client with the dashboard for
    //         managing the products, managing reviews, users, payment etc. .
    //       </span>
    //       <br />
    //       <span className="resume-description-text">
    //         - Integrated the web app with backend services to create new user
    //         onboarding application with dynamic form content.{" "}
    //       </span>
    //       <br />
    //       <span className="resume-description-text">
    //         - I stretch my mental capacity to develope UI as per the given
    //         designs.
    //       </span>
    //       <br />
    //     </div>
    //   </div>
    // </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span><a href="#tag">{skill.skill}</a></span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    // <div className="resume-screen-container" key="projects">
    //   {projectsDetails.map((projectsDetails, index) => (
    //     <ResumeHeading
    //       key={index}
    //       heading={projectsDetails.title}
    //       subHeading={projectsDetails.subHeading}
    //       description={projectsDetails.description}
    //       fromDate={projectsDetails.duration.fromDate}
    //       toDate={projectsDetails.duration.toDate}
    //     />
    //   ))}
    // </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../Assets/Images/dot1.png`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {/* {resumeDetails.map((ResumeDetail) => ResumeDetail)} */}
        {resume.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  React.useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);



  return (
    <section id='guestQ'>

      {/* <ScreenHeading title={"Get Content"} subHeading={"Get what you want"} /> */}
      {/* 
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
        <section className="profile-role-tagline">
          <p>A public platform building the definitive collection of coding questions & answers.<br />
            Empowering the world to develop technology through collective knowledge.</p>
        </section>
        <a className='linkgo' href='/signup'><FaClone /> Let's Go</a>

      </section> */}

      <div className="resume-container screen-container fade-in" id={props.id || ""}>
        <div className="resume-content">
          <ScreenHeading title={"Our Work"} subHeading={"Details"} />
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>

            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>

    </section>
  );
}
