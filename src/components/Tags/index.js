import React, { useState } from 'react';
import Card from './TagCard'
import './Tag.css'
import ScreenHeading from '../../Assets/ScreenHeading'
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Tag = ({ heading, data }) => {

  const [Tag, setTag] = useState([]);
  const handleSave = async (e) => {
    let res = await axios.get(`http://localhost:8080/tag/fetchtags`);
    setTag(res.data);
    console.log(res)
  }
  React.useEffect(() => {
    handleSave();
  }, [])


  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <>
      <ScreenHeading title={"Technologies"} subHeading={"All Technology"}/>
      {/* <section id='tag'>
        <section className='home'> */}
      {/* {
            Tag.map(
              entry => (
                <Card
                  title={entry.tagname}
                  imageUrl={ml}
                  body='Get all your details based on tag by clicking this link.'
                />
              ))
          } */}
      {/* 
      {
        Tag.map(
          entry => (
            <div className='cardtagguestmain'>
              <div className='cardtagguest'>
                <Accordion sx={{ width: '100%', backgroundColor: 'aliceblue' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography sx={{ color: 'black' }}>{entry.tagname}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: 'black' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <a href='/maintagarticle'>Read More...</a>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

          )
        )
      } */}

      {/* {
        Tag.map(
          entry => (
            <article title="Unordered Collapsible List" className='tagguestlist'>
              <ul>
                <li className="topLevel" tabIndex="1"><mark>{entry.tagname}</mark></li>
              </ul>
            </article>
          )
        )
      } */}


      <div class="cardtng rounded-10 border-0 shadow-lg p-4 cd-21 mx-auto mb-5" id='tag'>
        <div class="card-bodytng p-0">
          <div class="card-titletng mb-3 position-relative">
            <h5>Technologies on which we are working.</h5>
          </div>
          <div class="text-start">
            <ul class="p-0 m-0 mt-3">
              {
                Tag.map(
                  entry => (
                    <li class="py-3 border-bottom d-flex justify-content-between">
                      <span class="fw-lightg">{entry.tagname}</span>
                      <span class="fw-boldg" ><a variant="outlined" onClick={handleClick} href=''>Read More...</a></span>
                    </li>
                  )
                )
              }
            </ul>
          </div>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">Log In Please!</Alert>
      </Snackbar>

      {/* </section>
      </section> */}
    </>
  );
};

export default Tag;
