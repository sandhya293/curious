import * as React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AddQuestion.css";
import NavHome from "../NavHome/index";
import Loader from '../Loader'
import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledCollapse,
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import QuestionService from '../../Services/QuestionService';
import { Fab, IconButton, Input, TextField, Tooltip } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

export default function AddQuestions() {

  const Add_Question_Successfull = () => {
    toast("Question Added Successfully.");
    setShowModel(false)
  }

  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 2000);

  

  /* ---------------------------------------------------------------- */
  const [Que, setQue] = useState([]);
  let getQuestions = async () => {
    let questions = await QuestionService.getQuestions();
    setQue(questions.data)
    console.log(questions.data)
  }
  React.useEffect(() => {
    getQuestions();
  }, [])

  /*-------------------------------post question----------------------------------- */
  const [file, setFile] = useState();
  const uname = localStorage.getItem('EmailID')
  const [Questiondata, setQuedata] = React.useState({
    Title: '',
    User: 5,
    tag: '3'
  });

  const CreateQue = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('file', file)
    formData.append('tag_id', Questiondata.tag)
    formData.append('user_id', Questiondata.User)
    formData.append('title', Questiondata.Title)
    console.log("Data of Que:-", formData)

    setQuedata(formData)

    let res = await axios.post(`http://localhost:8080/question/addQuestion`, formData);
    console.log("Response:- ", res)
    setQuedata("")
    Add_Question_Successfull()
  }

  /*-----------------------fetch tag for drop down------------------------------ */
  const [Tag, setTag] = useState([]);
  const handleSave = async (e) => {
    let res = await axios.get(`http://localhost:8080/tag/fetchtags`);
    setTag(res.data);
    console.log(res)
  }
  React.useEffect(() => {
    handleSave();
  })


  const [isOpen, setIsOpen] = useState(true)

  const [showModel, setShowModel] = useState(false);
  const toggleModel = () => {
    setShowModel(!setShowModel)
  }

  const handleChange = (event) => {
    setFile(event)
  };

  return (
    <section id='question'>
      {

        isLoading === true ? <> <Loader /> </> :
          <>
            <ToastContainer />

            <NavHome />
            <section>

              <section className="main_section">

                <section className="top_question_bar">
                  <section>
                    <h3> YOUR QUERIES ? </h3>
                  </section>
                  <section className="btn_add_question">
                    {/* <Button color="success" outline onClick={() => setShowModel(true)}>
                      ADD NEW
                    </Button> */}
                    <Tooltip title="Add Quetion">
                      <Fab color="primary" aria-label="add">
                        <AddIcon onClick={() => setShowModel(true)} />
                      </Fab>
                    </Tooltip>
                  </section>
                </section>

                <div className="card card-2">
                  <div className="question_wrapper">
                    {
                      Que.map(
                        entry => (
                          <section className="question_list_items" key={entry.id}>
                            <Button color="primary" id="toggler" style={{ marginBottom: "1rem", }}>
                              <h5>{entry.question}</h5>
                            </Button>

                            <UncontrolledCollapse toggler="#toggler">
                              <Card>
                                <CardBody>
                                  <section className="card_body">
                                    <section className="card_question_header">
                                      {/* <Link to="/Viewquestions">{entry.question}</Link> */}
                                      <h4>{entry.question}</h4>
                                    </section>

                                    <section className="card_answer_section">
                                      <section>
                                        <Link to={`/Viewquestions/${entry.id}`}>View Answer...</Link>
                                      </section>
                                    </section>
                                    <section className="card_like_section">
                                      <span className="total_likes"> <i class="fas fa-heart isLiked"></i> {entry.vote} </span>
                                    </section>
                                  </section>
                                </CardBody>
                              </Card>
                            </UncontrolledCollapse>
                          </section>
                        ))
                    }
                  </div>
                </div>

                {/* Questions */}
                {/* 
                <section className="top_question_section">
                  <section className="question_wrapper">
                    {
                      Que.map(
                        entry => (
                          <section className="question_list_items" key={entry.id}>
                            <Button color="primary" id="toggler" style={{ marginBottom: "1rem", }}>
                              <h5>{entry.question}</h5>
                            </Button>

                            <UncontrolledCollapse toggler="#toggler">
                              <Card>
                                <CardBody>
                                  <section className="card_body">
                                    <section className="card_question_header">
                                      <h4>{entry.question}</h4>
                                    </section>

                                    <section className="card_answer_section">
                                      <section>
                                        <Link to={`/Viewquestions/${entry.id}`}>View Answer...</Link>
                                      </section>
                                    </section>
                                    <section className="card_like_section">
                                      <span className="total_likes"> <i class="fas fa-heart isLiked"></i> {entry.vote} </span>
                                    </section>
                                  </section>
                                </CardBody>
                              </Card>
                            </UncontrolledCollapse>
                          </section>
                        ))
                    }
                  </section>
                </section> */}

              </section>
            </section>

            {/* MODEL */}

            <section>
              <section>
                <Modal fullscreen="" isOpen={showModel} toggle={toggleModel}>
                  <ModalHeader toggle={toggleModel}>
                    Add Your Question
                  </ModalHeader>
                  <ModalBody>
                    <section>
                      {/* <p>How to use React JS?</p> */}
                      {/* <input type="text" placeholder="Add your Question Title" /><br />
                      <input type="file" placeholder="Select your content." /> */}
                      <TextField
                        fullWidth
                        id="outlined-required"
                        label="Question title"
                        type="text"
                        onChange={(e) => { setQuedata({ ...Questiondata, Title: e.target.value }) }}
                        value={Questiondata.Title}
                      /><br />

                      <label htmlFor="icon-button-file">
                        <Input id="icon-button-file" type="file"
                          onChange={(event) => handleChange(event.target.files[0])} />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                          <span>UPLOAD
                            <PhotoCamera fontSize='medium' /></span>
                        </IconButton>
                      </label>

                      <select>
                        {
                          Tag.map(
                            entry => (
                              <option>{entry.tagname}</option>
                            )
                          )
                        }
                      </select>

                    </section>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" outline onClick={() => { setShowModel(false) }}>Cancel</Button>
                    <Button color="success" onClick={CreateQue}>
                      Add
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </section>
            </section>
          </>
      }

    </section>
  );
}
