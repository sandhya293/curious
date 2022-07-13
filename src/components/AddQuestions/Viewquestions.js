import React, { useState } from 'react'
import { BarsFill, AnsIcon, Bars1, QueIcon, Bars, QuestionSection, QuestionContainer, BarsFillQ, Comment } from './QuestionElement';
import './AddQuestion.css'
import NavHome from '../NavHome/index'
import QuestionService from '../../Services/QuestionService';
import { useParams } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Fab, Input, styled, TextField, Toolbar, Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ChatIcon from '@mui/icons-material/Chat';
import { PhotoCamera } from '@material-ui/icons';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

const Viewquestions = () => {

  const Add_Ans_Successfull = () => {
    toast("Ans Added Successfully.");
    setShowModel(false)
  }

  const Add_cmt_Successfull = () => {
    toast("Comment Added.");
    setShowModel(false)
  }

  // const Input = styled('input')({
  //   display: 'none',
  // });

  const [answer, setAnswer] = React.useState(0);
  const [Question, setQuestion] = React.useState(0);
  const [Ans, setAns] = useState([]);

  // const [showModel, setShowModel] = React.useState(false);
  // const Add_Successfull = () => {
  //   toast("Added...");
  //   setShowModel(false)
  // }

  const params = useParams();

  /* --------Get All Answer------- */
  const [ansList, setansList] = useState([]);
  let getAnswerQuestion = async () => {
    let Ans = await QuestionService.getAnswer(params.id);
    setAns(Ans.data)
    console.log(Ans.data)
    setansList(Ans.data[0].answertitlelist);
  }
  React.useEffect(() => {
    getAnswerQuestion();
  })


  /*-------------------------------post answer----------------------------------- */
  const [file, setFile] = useState();
  const uname = localStorage.getItem('EmailID')
  const [Answerdata, setAnsdata] = React.useState({
    Title: '',
    User: 5,
    tag: 3,
    QueId: 5
  });

  const CreateAns = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('file', file)
    formData.append('tag_id', Answerdata.tag)
    formData.append('user_id', Answerdata.User)
    formData.append('title', Answerdata.Title)
    formData.append('question_id', Answerdata.QueId)
    console.log("Data of Que:-", formData)

    setAnsdata(formData)

    let res = await axios.post(`http://localhost:8080/answer/addAnswer`, formData);
    console.log("Response:- ", res)
    setAnsdata("")
    Add_Ans_Successfull()
  }

  const [showModel, setShowModel] = useState(false);
  const toggleModel = () => {
    setShowModel(!setShowModel)
  }

  const handleChange = (event) => {
    setFile(event)
  };


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


  //Comment Model
  const [showcmtModel, setcmtShowModel] = useState(false);
  const toggleModelCmt = () => {
    setcmtShowModel(!setcmtShowModel)
  }

  // const toggleModel = () => {
  //   setAnsShowModel(!showAnsModel)
  // }

  // const toggleModelComment = () => {
  //   setShowModel(!showModel)
  // }


  return (
    <section id='all'>
      <NavHome />
      <ToastContainer />

      <section className="main_sectiona">

        <section className="top_question_bar">
          <section>
            <h3> RESOLUTIONS </h3>
          </section>
          <section className="btn_add_question">
            <Tooltip title="Add Answer">
              <Fab color="primary" aria-label="add">
                <AddIcon onClick={() => setShowModel(true)} />
              </Fab>
            </Tooltip>
          </section>
        </section>

        {/* <section className="top_question_bara">
          <section>
            <h3>YOUR ANSWER ?</h3>
          </section>
          <section className="btn_add_question">
            <Tooltip title="Add Answer">
              <Fab color="primary" aria-label="add">
                <AddIcon onClick={() => setShowModel(true)} />
              </Fab>
            </Tooltip>
          </section>
        </section> */}

        <div className="card card-2">
          <div className="question_wrapper">
            {
              Ans.map(
                entry =>
                  <>
                    <QueIcon>
                      {
                        Question === 1 ? <BarsFillQ /> : <Bars onClick={() => setQuestion(1)} />
                      }
                      <h1>{entry.title}</h1>
                    </QueIcon>

                    {
                      ansList.map(answers =>
                        <AnsIcon>
                          <p>{answers}</p>
                          {
                            answers === 1 ? <Tooltip title="Like"><Fab aria-label="like">
                              <FavoriteIcon />
                            </Fab></Tooltip> : <Tooltip title="Like"><FavoriteBorderIcon className='heartclass' color='error' fontSize='medium' onClick={() => setAnswer(1)} /></Tooltip>//<Bars1 onClick={() => setAnswer(1)} />
                          }
                          {/* <BarsFill/> */}
                          {/* <Bars1 onClick={() => setAnswer(id)} />  */}

                          {/*  */}
                          <Tooltip title="Comment"><ChatIcon onClick={() => showModel(true)} color='inherit' fontSize='medium' className='commentclass' /></Tooltip>
                        </AnsIcon>
                      )
                    }
                  </>
              )
            }
          </div>
        </div>
      </section>

      <QuestionSection>
        <QuestionContainer>
          {/* <QueIcon>
            {
              Question === 1? <BarsFillQ /> : <Bars onClick={()=>setQuestion(1)}/>
            }
            <h1>{}</h1>
          </QueIcon> */}

          {/* {
            Ans.map(
              entry =>
                <>
                  <QueIcon>
                    {
                      Question === 1 ? <BarsFillQ /> : <Bars onClick={() => setQuestion(1)} />
                    }
                    <h1>{entry.title}</h1>
                  </QueIcon>

                  {
                    ansList.map(answers =>
                      <AnsIcon>
                        <p>{answers}</p>
                        {
                          answers === 1 ? <Tooltip title="Like"><Fab aria-label="like">
                            <FavoriteIcon />
                          </Fab></Tooltip> : <Tooltip title="Like"><FavoriteBorderIcon className='heartclass' color='error' fontSize='medium' onClick={() => setAnswer(1)} /></Tooltip>//<Bars1 onClick={() => setAnswer(1)} />
                        }
                      
                        <Tooltip title="Comment"><ChatIcon onClick={() => setShowModel(true)} color='inherit' fontSize='medium' className='commentclass' /></Tooltip>
                      </AnsIcon>
                    )
                  }
                </>
            )
          } */}
        </QuestionContainer>
      </QuestionSection>

      <section>
        <section>
          <Modal fullscreen="" isOpen={showcmtModel} toggle={toggleModelCmt}>
            <ModalHeader toggle={toggleModelCmt}>
              Write Your Comment Here...
            </ModalHeader>
            <ModalBody>
              <section>
                <textarea />
              </section>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" outline onClick={() => { setcmtShowModel(false) }}>Cancel</Button>
              <Button color="success" onClick={Add_cmt_Successfull}>
                DONE
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </section>
      </section>

      {/* 
      <section>
        <section>
          <Modal fullscreen="" isOpen={showAnsModel} toggle={toggleModel}>
            <ModalHeader toggle={toggleModel}>
              Add Your Answer
            </ModalHeader>
            <ModalBody>
              <section>

                <TextField
                  fullWidth
                  id="outlined-required"
                  label="Answer Title"
                  type="text"
                  onChange={(e) => { setAnsdata({ ...Answerdata, Title: e.target.value }) }}
                  value={Answerdata.Title}
                /><br />

                <label htmlFor="icon-button-file">
                  <Input id="icon-button-file" type="file"
                    onChange={(event) => handleChange(event.target.files[0])} />
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <span>UPLOAD
                      <PhotoCamera fontSize='medium' /></span>
                  </IconButton>
                </label>

              </section>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" outline onClick={() => { setAnsShowModel(false) }}>Cancel</Button>
              <Button color="success" onClick={CreateAns}>
                Add
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </section>
      </section> */}


      <section>
        <section>
          <Modal fullscreen="" isOpen={showModel} toggle={toggleModel}>
            <ModalHeader toggle={toggleModel}>
              Your Answer...
            </ModalHeader>
            <ModalBody>
              <section>
                <TextField
                  fullWidth
                  id="outlined-required"
                  label="Ans title"
                  type="text"
                  onChange={(e) => { setAnsdata({ ...Answerdata, Title: e.target.value }) }}
                  value={Answerdata.Title}
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
              <Button color="success" onClick={CreateAns}>
                Add
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </section>
      </section>


    </section>
  )
}

export default Viewquestions
