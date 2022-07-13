import React, { useState, useEffect } from 'react'
import QuestionService from '../../../Services/QuestionService';
import {
    Button,
    Card,
    CardBody,
    UncontrolledCollapse,
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import AdminNav from '../AdminNavbar/index'
import './AdminQue.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab } from '@mui/material';
import { QueIcon } from './AdminQuestionElements';

export default function AdminQuestions() {

    const [Que, setQue] = useState([]);
    let getQuestions = async () => {
        let questions = await QuestionService.getQuestions();
        setQue(questions.data)
        console.log(questions.data)
    }

    useEffect(() => {
        getQuestions();
    }, [])

    return (
        <section id=''>
            <AdminNav />
            <div className="card card-2">
                <div className="question_wrapper">
                    {
                        Que.map(
                            entry => (
                                <section className="question_list_items" key={entry.id}>
                                    
                                    <Button color="primary" id="toggler" style={{ marginBottom: "1rem", }}>
                                        <h5>{entry.question} </h5>
                                    </Button>
                                
                                    <UncontrolledCollapse toggler="#toggler">
                                        <Card>
                                            <CardBody>
                                                <section className="card_body">
                                                    <section className="card_question_header">
                                                        {/* <Link to="/Viewquestions">{entry.question}</Link> */}
                                                        <QueIcon>
                                                        <h4>{entry.question}</h4>
                                                        {
                                                            <Fab color="error" aria-label="edit" size="small">
                                                                <DeleteIcon fontSize="small"/>
                                                            </Fab>
                                                        }
                                                        </QueIcon>
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
        </section>
    )

}
