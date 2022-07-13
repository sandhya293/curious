import React, { Component } from 'react';
import Navbar from '../AdminNavbar/index';
import img1 from '../../../Assets/Images/aboutUs.jpg'
import img2 from '../../../Assets/Images/aboutUs2.jpg'
import img3 from '../../../Assets/Images/c54.png'
import './AdminHome.css'
import Typical from "react-typical";

function NewHome() {
    return (
        <>
            <Navbar />
            <div className=''>
                <div className='abt'>
                    <div className='abt1'>
                        <img src={img1} alt='' />
                    </div>
                    <div className='abt2'>
                        <span>
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    className="primary-textHome"
                                    steps={[
                                        "Welcome 😎",
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

            <div className='mt-5'>
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

        </>
    );
}

export default NewHome;
