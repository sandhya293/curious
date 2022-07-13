import React, { useState } from 'react'
import Navbar from '../NavHome';
import { useNavigate } from 'react-router-dom';
import './TagHome.css'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const TagHome = () => {

  /* ---------------------------ADD TAG----------------------------- */
  const [Tagdata, setdata] = React.useState({
    TagName: ''
  });

  const nav = useNavigate()

  const redirectTagArticle = (tagId) => {
      
    nav(`/tagarticle/${tagId}`)
  }

  const CreateTag = async (e) => {
    e.preventDefault();
    let data = {
      tagname: Tagdata.TagName
    }
    console.log("data:-", data)
    setdata(data)

    let res = await axios.post(`http://localhost:8080/tag/addTag`, data);
    console.log("Response:- ", res)
    setdata("")
    Add_tag_Successfull()
  }

  const Add_tag_Successfull = () => {
    toast("Thank You.");
  }


  /*--------------------------------FETCH TAG-------------------------------- */
  const [Tag, setTag] = useState([]);
  const handleSave = async (e) => {
    let res = await axios.get(`http://localhost:8080/tag/fetchtags`);
    setTag(res.data);
    console.log(res)
  }
  React.useEffect(() => {
    handleSave();
  })


  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <h1>TECHNOLOGY</h1>

      <div class="containerTag">
        <div class="todo">
          <div class="add-task">
            <input type="text" class="addTask"
              onChange={(e) => { setdata({ ...Tagdata, TagName: e.target.value }) }}
              name='tagname'
              value={Tagdata.TagName} />
            <i class="fas fa-plus addBtn" onClick={(e) => CreateTag(e)}></i>
          </div>
        </div>
      </div>

      <section id="main">
        {/* <h1>TECHNOLOGY</h1> */}
        <div class="cardshomenew-list">

          {
            Tag.map(
              entry => (
                <div class="cardnh card1">
                  <div class="card_image">
                    <a href=""><i class="fa fa-spinner"></i></a>
                  </div>
                  <div class="card_title title-white">
                    <h6 class="heading">{entry.tagname}</h6>
                    <p>Sapien sed metus congue sodales vivamus scelerisque.</p>
                  </div>
                  <div class="btn-read">
                    {/* <a href="/article" class="btn-flip" data-back="Back" data-front="read more"></a> */}
                    <p onClick={()=> redirectTagArticle(entry.tag_id)} className='btn-flip' data-front="MORE"></p>
                    {/* <a href={`/tagarticle/${entry.tag_id}`} className='btn-flip' data-front="MORE"></a> */}
                  </div>
                </div>
              )
            )
          }



          {/* <div class="cardnh card2">
            <div class="card_image">
              <a href=""><i class="fa fa-spinner"></i></a>
            </div>
            <div class="card_title title-white">
              <h6 class="heading">Machine Learnig</h6>
              <p>Sapien sed metus congue sodales vivamus scelerisque.</p>
            </div>
            <div class="btn-read">
              
              <a href='/tagarticle' className='btn-flip' data-front="MORE"></a>
            </div>
          </div>


          <div class="cardnh card3">
            <div class="card_image">
              <a href=""><i class="fa fa-spinner"></i></a>
            </div>
            <div class="card_title title-white">
              <h6 class="heading">React JS</h6>
              <p>Sapien sed metus congue sodales vivamus scelerisque.</p>
            </div>
            <div class="btn-read">
              
              <a href='/tagarticle' className='btn-flip' data-front="MORE"></a>
            </div>
          </div> */}

        </div>
      </section>

    </div>
  )
}

export default TagHome
