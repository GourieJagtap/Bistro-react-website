import { Paper } from '@mui/material'
import React from 'react';
import "./Testimonialcard.css";

const Testimonialcard = (props) => {
  return (
            <div className='col-md-4 font3 p-2'>
                <Paper elevation={10} sx={{padding:"50px"}}>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center'>
                        photo
                    </div>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center title'>
                        {props.title}
                    </div>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center desg'>
                        {props.desg}
                    </div>
                    <hr></hr>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center'>
                        <center>
                        {props.desc}
                        </center>
                    </div>
                </Paper>
            </div>
  )
}

export default Testimonialcard