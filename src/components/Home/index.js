/*
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <section className='row'>
      <Card sx={{ maxWidth: 345,alignItems: 'center' }} className='card'>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </section>
  );
}
*/



import React, { useState } from 'react'
import Card from './Card'
import ml from '../../images/ml.jpg'
import react from '../../images/react.png'
import java from '../../images/java.jpg'
import './Home.css'
import NavHome from '../NavHome/index'
import TagService from '../../Services/TagService';
import axios from 'axios'
import { Button } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import {
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledCollapse,
} from "reactstrap";
import '../Tags/Tag.css'

const Home = () => {

  // let getQuestions = async () => {
  //   let questions = await TagService.getTag();
  //   setTag(questions.data);
  //   console.log(questions);
  // }

  const [Tagdata, setdata] = React.useState({
    TagName: ''
  });

  const CreateTag = async (e) => {
    e.preventDefault();
    let data = {
      tagname: Tagdata.TagName
    }
    console.log(data)
    setdata(data)
    let res = await axios.post(`http://localhost:4500/api/tag`, data);
    console.log(res)
    Add_tag_Successfull()
  }

  const [Tag, setTag] = useState([]);
  const fetchData = async (e) => {
    let res = await axios.get(`http://localhost:4500/api/tag`);
    setTag(res.data);
    console.log(res)
  }
  React.useEffect(() => {
    fetchData();
  })

  const [showModel, setShowTagModel] = useState(false);
  const Add_tag_Successfull = () => {
    toast("Tag Added Successfully.");
    setShowTagModel(false)
  }

  return (

    <section id='Home'>
      <NavHome />

      <ToastContainer />

      <section className="main_sectiona">
        <section className="top_question_bara">
          <section>
            {/* <h3> AL </h3>  */}
          </section>
          <section className="btn_add_question">
            <Button color="success" outline onClick={() => setShowTagModel(true)}>
              POST NEW TAG
            </Button>
          </section>
        </section>
      </section>

      <section className='home'>
        {
          Tag.map(
            entry => (
              <Card
                title={entry.tagname}
                imageUrl={ml}
                body='Get all your details based on tag by clicking this link.'
              />
            ))
        }

        {/* <Card
          title={tagname}
          imageUrl={ml}
          body='uhdcns ceshdcs ciwhsdxns xswhnuckdn kdcns kc kcns cdes dfcs'/> */}

        {/* <Card
          title='React JS'
          imageUrl={react}
          body='uhdcns ceshdcs ciwhsdxns xswhnuckdn kdcns kc kcns cfvd fvs'/>
          
        <Card
          title='Java'
          imageUrl={java}
          body='uhdcns ceshdcs ciwhsdxns xswhnuckdn kdcns kc kcns cfvd fvs'/> */}

      </section>

      <section>
        <section>
          <Modal fullscreen="" isOpen={showModel} toggle={function noRefCheck() { }}>
            <ModalHeader toggle={function noRefCheck() { }}>
              Add Your Tag
            </ModalHeader>
            <ModalBody>
              <section>
                {/* <p>How to use React JS?</p> */}
                <input type="text" placeholder="Tag name" onChange={(e) => { setdata({ ...Tagdata, TagName: e.target.value }) }} name='tagname' value={Tagdata.TagName} /><br />
              </section>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" outline >Cancel</Button>
              <Button color="success" onClick={CreateTag} >
                Add
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </section>
      </section>
    </section>
  )
}

export default Home


// import { Carousel } from '@sefailyasoz/react-carousel'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// const Home = () => {

// const CarouselData = [
//   {
//     headerText: null,
//     subText: 'Sub Text One',
//     image: 'https://picsum.photos/300/300',
//   },
//   {
//     headerText: 'Header Text Two',
//     subText: null,
//     image: 'https://picsum.photos/1200/800',
//   },
//   {
//     headerText: null,
//     subText: null,
//     image: 'https://picsum.photos/720/720',
//   },
//   {
//     headerText: 'Header Text Four',
//     subText: 'Sub Text Four',
//     image: 'https://picsum.photos/1920/1080',
//   },
//   {
//     headerText: 'Header Text Five',
//     subText: 'Sub Text Five',
//     image: 'https://picsum.photos/480/360',
//   },
// ]
//   return    <Carousel
//               data={CarouselData}
//               autoPlay={true}
//               rightItem={<FaArrowRight />}
//               leftItem={<FaArrowLeft />}
//               animationDuration={3000}
//               headerTextType="black"
//               subTextType="white"
//               size="normal" />
// }

// export default Home
