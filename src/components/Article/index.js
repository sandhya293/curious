// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap'
// import NavHome from '../NavHome/index';

// const Article = () => {
//   return (

//     // <>
//     // <NavHome/>
//     // <section className="question_list_items">

//     //     <Button color="primary" id="toggler" style={{ marginBottom: "1rem", }}>
//     //         <h5>Tag Name</h5>
//     //     </Button>

//     //     <UncontrolledCollapse toggler="#toggler">
//     //         <Card>
//     //             <CardBody>
//     //                 <section className="card_body">
//     //                     <section className="card_question_header">
//     //                         {/* <Link to="/Viewquestions">{entry.question}</Link> */}
//     //                         <Link to='/'>Article Title</Link>
//     //                     </section>

//     //                     <section className="card_answer_section">
//     //                         {/* <section>
//     //                             Javascript is the best language.
//     //                             </section> */}
//     //                     </section>
//     //                     <section className="card_like_section">
//     //                         <span className="total_likes"> <i class="fas fa-heart isLiked"></i> 5.5k </span>
//     //                     </section>
//     //                 </section>
//     //             </CardBody>
//     //         </Card>
//     //     </UncontrolledCollapse>
//     // </section>   
//     // </>

//   )
// }

// export default Article



import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton, Input, TextField } from '@mui/material';
import Navbar from '../NavHome';
import img1 from '../../Assets/Images/java1.jpeg'
import './Article.css'
import './New1.css'
import { NavLink } from 'react-router-dom';
import { PhotoCamera, Title } from '@mui/icons-material';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export default function Article() {

    const Add_Question_Successfull = () => {
        toast("Article Added.");
    }

    /*---------------ADD ARTICLE------------------ */
    const [file, setFile] = React.useState();
    const uname = localStorage.getItem('EmailID')
    const [Articledata, setArticledata] = React.useState({
        Title: '',
        User: 5,
        tag: '3'
    });

    const CreateQue = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('file', file)
        formData.append('tag_id', Articledata.tag)
        formData.append('user_id', Articledata.User)
        formData.append('title', Articledata.Title)
        console.log("Data of Que:-", formData)

        setArticledata(formData)

        let res = await axios.post(`http://localhost:8080/articles/addArticle`, formData);
        console.log("Response:- ", res)
        setArticledata("")
        Add_Question_Successfull()
    }
    const handleChange = (event) => {
        setFile(event)
    };


    return (
        <>
            <Navbar />

            <ToastContainer />

            <section className='article_container'>

                {/* <Card sx={{ maxWidth: 345, margin:10 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img1}
                            alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <NavLink to='/viewArticle'>Java</NavLink>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345,margin:10 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img1}
                            alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Java
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345,margin:10 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img1}
                            alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Java
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card> */}


                <div id="login-box">
                    <div class="left">
                        <h1>ADD ARTICLE</h1>
                        <input type="text"
                            placeholder="Article Title"
                            onChange={(e) => { setArticledata({ ...Articledata, Title: e.target.value }) }}
                            value={Articledata.Title}
                            name='title'
                        />
                        <label htmlFor="icon-button-file">
                            <Input id="icon-button-file" type="file"
                                onChange={(event) => handleChange(event.target.files[0])} 
                                name='filea'
                                />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <span>UPLOAD
                                    <PhotoCamera fontSize='medium' /></span>
                            </IconButton>
                        </label>
                        <input type="submit" name="signup_submit" value="POST" onClick={CreateQue} />
                    </div>

                    <div class="right">
                        {/* <span class="loginwith">Sign in with<br />social network</span>
                        <button class="social-signin facebook">Log in with facebook</button>
                        <button class="social-signin twitter">Log in with Twitter</button>
                        <button class="social-signin google">Log in with Google+</button> */}
                        {/* <img src={img} alt='img1'/> */}
                    </div>
                    {/* <div class="or">OR</div> */}
                </div>


            </section>
        </>



    );
}
