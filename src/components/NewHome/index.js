import React from 'react';
import Navbar from '../NavHome';
import img1 from '../../Assets/Images/c6.jpeg'
import img2 from '../../Assets/Images/c1.jpg'
import img3 from '../../Assets/Images/c54.png'
import img4 from '../../Assets/Images/work.jpg'
import './script'
import './TryNewHome.css'
import Typical from "react-typical";

function NewHome() {
    return (
        <>
            <Navbar />

            
            <div className=''>
                {/* {localStorage.getItem('EmailID')} */}
                {localStorage.getItem('ID')}
                <div className='abth'>
                    <div className='abt1h'>
                        <img src={img4} alt='' />
                    </div>
                    <div className='abt2h'>
                        <span>
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    className="primary-textHome"
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
                        </span>
                        <h1>Empowering the world to develop technology through collective knowledge.</h1>
                        <p>Our public platform serves 100 million people every month, making it one of the most popular websites in the world.</p>

                        <p>Our asynchronous knowledge management and collaboration offering, Stack Overflow for Teams, is transforming how people work.</p>
                    </div>
                </div>
            </div>


            {/* <div className="containernh">
                <img src={img1} alt="Notebook" style={{width:'100%'}}/>
                    <div className="contentnh">
                        <h1>Adopt a customer-first mindset</h1>
                        <p>We believe that diverse experience contributes to a broader collective perspective that will consistently lead to better products. 
                        Every person we hire makes Stack Overflow an even better place to work.</p>
                    </div>
            </div> */}

            
            <div className='mainrow'>
                <div className='row'>
                    <div className='col-sm-3 text-center cnt'>
                        <span id="counter" className='counter'>177</span>
                        <p>Queries</p>
                    </div>

                    <div className='col-sm-3 text-center cnt'>
                        <span id="counter1" className='counter'>74</span>
                        <p>Users</p>
                    </div>

                    <div className='col-sm-3 text-center cnt'>
                        <span id="counter2" className='counter'>96</span>
                        <p>Success</p>
                    </div>

                    <div className='col-sm-3 text-center cnt'>
                        <span id="counter3" className='counter'>11</span>
                        <p>Awards</p>
                    </div>
                </div>
            </div>


            <div class="box">
                <div class="cardHomeNew">
                    <div class="imgBx">
                        {/* <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" /> */}
                        <p>"During my time at Stack, I’ve been encouraged to set goals that are not only team and project-based, but also career-based. Over the past two years, Stack has supported me in taking online courses to improve my front-end, UX research, and graphic design skill sets, which have been invaluable to my career growth."</p>
                    </div>
                    <div class="details">
                        <h2>SomeOne Famous<br /><span>Director</span></h2>
                    </div>
                </div>

                <div class="cardHomeNew">
                    <div class="imgBx">
                        {/* <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" /> */}
                        <p>"Stack Overflow invests in technology, coaching, and numerous resources to enable sales reps to upskill and succeed. The servant leadership culture supports my career growth because managers create a culture of trust, foster leadership in others, and build camaraderie amongst teammates."</p>
                    </div>
                    <div class="details">
                        <h2>SomeOne Famous<br /><span>Producer</span></h2>
                    </div>
                </div>

                <div class="cardHomeNew">
                    <div class="imgBx">
                        {/* <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" /> */}
                        <p>"I am mostly remote, and I occasionally visit the office. Being new to the office space, I didn’t know what to expect. Everyone was friendly and immediately introduced themselves. The office has a relaxing atmosphere, and the office staff ensures you have everything you need."</p>
                    </div>
                    <div class="details">
                        <h2>SomeOne Famous<br /><span>Actor</span></h2>
                    </div>
                </div>
            </div>



            <div className='homecontent'>
                <div className='container-fluid'>
                    <div className='abtimgh'>
                        <div className='aboutimgh'>
                            <span className='ab1h'><img src={img3} alt='' /></span>
                            <span className='ab2h'><img src={img2} alt='' /></span>
                        </div>
                        <div className='aboutimg1'>
                            <h4>Stack Overflow helps people find the answers they need, when they need them.
                                We're best known for our public Q&A platform that over 100 million people visit every month to ask questions, learn, and share technical knowledge.</h4><br />

                            <h4>
                                Our products and tools empower people to find what they need to develop technology at work or at home. These products include, Stack Overflow for Teams, Stack Overflow Advertising, Collectives™ on Stack Overflow, and Stack Overflow Talent.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default NewHome;
