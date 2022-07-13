import React, { useState } from 'react'
import './TagArticle.css'
import './New.css'
import Navbar from '../NavHome';
import { Card, CardBody, CardGroup, CardImg, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import TagService from '../../Services/TagService';
import { useParams } from 'react-router-dom';


const TagArticle = () => {

    const params = useParams();
    // const [ansList, setansList] = useState([]);
    const [Ans, setAns] = useState([]);

    // console.log(params.id)

    let getAnswerQuestion = async () => {
        let Ans = await TagService.getAnswer(params.tagId);
        setAns(Ans.data)

        console.log(Ans.data)
        //setansList(Ans.data)
    }
    React.useEffect(() => {

        getAnswerQuestion();
    })

    return (
        <>
            <Navbar />

            {/* <div className='cardtagarticlerow'>

                <div class="cardtagarticle">
                    <div class="img"></div>
                    <div class="contenttagarticle">
                        <h3>Java Servlet</h3>
                        <p>The science of today is the technology of tomorrow – Edward Teller</p>
                        <a href="/maintagarticle">
                            <button>READ MORE</button>
                        </a>
                    </div>
                </div>

                <div class="cardtagarticle">
                    <div class="img"></div>
                    <div class="contenttagarticle">
                        <h3>Java JSP</h3>
                        <p>The science of today is the technology of tomorrow – Edward Teller</p>
                        <a href="/maintagarticle">
                            <button>READ MORE</button>
                        </a>
                    </div>
                </div>

                <div class="cardtagarticle">
                    <div class="img"></div>
                    <div class="contenttagarticle">
                        <h3>Java Servlet</h3>
                        <p>The science of today is the technology of tomorrow – Edward Teller</p>
                        <a href="/maintagarticle">
                            <button>READ MORE</button>
                        </a>
                    </div>
                </div>

            </div> */}

            {/* <CardGroup>
                <Card className='tagarticlecard'>
                    <CardImg alt="Card image cap" src={img1} top width="100%" className=''/>
                    <CardBody>
                        <CardTitle tag="h5"> JAVA SERVLET </CardTitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <a href="/maintagarticle">
                            <Button>
                                READ MORE
                            </Button>
                        </a>
                        <a href='/users' style={{ marginTop:20 }}> Content by:- HETVI PATEL</a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src={img1} top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5"> JSP </CardTitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <a href="/maintagarticle">
                            <Button>
                                READ MORE
                            </Button>
                        </a>
                        <a href='/users'> Content by:- HETVI PATEL</a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src={img1} top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5"> Card title </CardTitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <a href="/maintagarticle">
                            <Button>
                                READ MORE
                            </Button>
                        </a>
                        <a href='/users'> Content by:- HETVI PATEL</a>
                    </CardBody>
                </Card>
            </CardGroup> */}


            {/* <h2>JAVA</h2>
            <div className="containertga">
                <div className="cardtga">
                    <div className="card-bodytga">
                        <h3>Java Servlet</h3>
                        <h1>Eat</h1>
                    </div>
                    <a href='/maintagarticle'><h6>More...</h6></a>
                </div>

                <div className="cardtga">
                    <div className="card-bodytga">
                        <img src="https://www.luciferscode.com/assets/images/burger-fries.png" />
                        <h1>Eat</h1>
                    </div>
                </div>

                <div className="cardtga">
                    <div className="card-bodytga">
                        <img src="https://www.luciferscode.com/assets/images/burger-fries.png" />
                        <h1>Eat</h1>
                    </div>
                </div>
            </div> */}

            <div className='cardtagarticle'>

                <div className='cardtagarticle1'>
                    <h1>Let's read something!</h1>
                    {
                        Ans.map(
                            entry => (
                                <Accordion sx={{ width: '100%', backgroundColor: 'aliceblue' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header">
                                        <Typography sx={{ color: 'text.secondary', fontFamily: 'sans-serif' }}>{entry.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.
                                        </Typography>
                                        <a href='/maintagarticle'>Read More...</a>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        )
                    }
                </div>

                <div className='cardtagarticle2'>

                    <div class="col mx-auto">
                        <div class="cardtn rounded-10 border-0 shadow-lg p-3 cd-20 mx-auto mb-5">
                            <div class="card-head mb-4">
                                <h5>Headline</h5>
                            </div>
                            <div class="card-body p-0">
                                <div class="w-100 mb-3">
                                    <p class="pb-2 d-inline-block">Title 1</p>
                                    <p class="card-text">Please add your content here. Keep it short and simple. And smile :)
                                    </p>
                                </div>
                                <hr />
                                <div class="w-100">
                                    <p class="pb-2 d-inline-block">Title 2</p>
                                    <p class="card-text">Please add your content here. Keep it short and simple. And smile :)
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}

                        {/* <div class="col mx-auto"> */}
                        <div class="cardtn rounded-10 border-0 shadow-lg p-4 cd-21 mx-auto mb-5">
                            <div class="card-body p-0">
                                <div class="card-title mb-3 position-relative">
                                    <h5>Headline</h5>
                                    <p>Subhead</p>
                                </div>
                                <div class="text-start">
                                    <ul class="p-0 m-0 mt-3">
                                        <li class="py-3 border-bottom d-flex justify-content-between">
                                            <span class="fw-light">Title 1</span>
                                            <span class="fw-bold">Number</span>
                                        </li>
                                        <li class="py-3 border-bottom d-flex justify-content-between">
                                            <span class="fw-light">Title 1</span>
                                            <span class="fw-bold">Number</span>
                                        </li>
                                        <li class="py-3 border-bottom d-flex justify-content-between">
                                            <span class="fw-light">Title 1</span>
                                            <span class="fw-bold">Number</span>
                                        </li>
                                        <li class="py-3  d-flex justify-content-between">
                                            <span class="fw-light">Title 1</span>
                                            <span class="fw-bold">Number</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>

                </div>
            </div>

        </>
    )
}

export default TagArticle