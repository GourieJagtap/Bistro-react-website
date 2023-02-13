import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Book.css"

const Book = () => {
  return (
    <div className='bgbook container-fluid ' >
        <div class="col-md-12 d-flex justify-content-center align-items-center h" >
            <div class="row " >
                <div className='col-sm-12 d-flex justify-content-center align-items-center book'>
                    Book a Table
                </div>
                <div className='col-sm-12 d-flex justify-content-center align-items-center pb-3 lorem'>
                <center >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua.</center>
                </div> 
                <div className='col-sm-12 d-flex justify-content-center align-items-center'>
                <Button className='btn' variant="contained " color="white" sx={{bgcolor:"#EC5800",fontWeight:"BOLD"}}>Reservation</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book