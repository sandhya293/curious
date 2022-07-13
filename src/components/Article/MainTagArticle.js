import React from 'react'
import './MainTagArticle.css'
import Navbar from '../NavHome';
import img1 from '../../Assets/Images/java1.jpeg'

const MainTagArticle = () => {
    return (
        <>
            <Navbar />

            {/* <div className='container-fluid bg-success'>
                <div className='col-12'>
                    <img src={img1} />
                </div>
            </div> */}

            <div className='maintagcontainer'>
                <div className='mainrowtag'>
                    <div className='tagimage'>
                        <img src={img1} />
                        <h4>Vote</h4><span><h4>Views</h4></span>
                        <h4>By:-</h4>
                    </div>
                    <div className='tagcontent'>
                        <h2>Java servlet</h2>
                        <h4>What is a Servlet?</h4>
                        <p>Servlet technology is used to create a web application (resides at server side and generates a dynamic web page).</p>
                        <p>Servlet technology is robust and scalable because of java language. Before Servlet, CGI (Common Gateway Interface) scripting language was common as a server-side programming language. However, there were many disadvantages to this technology. We have discussed these disadvantages below.
                            There are many interfaces and classes in the Servlet API such as Servlet, GenericServlet, HttpServlet, ServletRequest, ServletResponse, etc.</p>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default MainTagArticle