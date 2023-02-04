import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import "./Main.css";

const Main = () => {
  return (
    <div class="container-fluid bg " >
      <div class="row" >
        <div class="col-md-6  d-flex justify-content-center align-items-center food" >
          <div class="row d-flex justify-content-center align-items-center  ">
            <div class="col-sm-12 d-flex justify-content-center align-items-center ctr">
              <div class="row" >
                <div class="col-sm-12 soul" >
                  <p class="fw-bolder ">Food For<Divider></Divider>Your Soul</p>
                </div>
                <div class="col-sm-12 d-soul">
                  <p>It's about good food and fresh ingredients!</p>
                </div>
                <div class="col-sm-12">
                  <Button className='btn' variant="contained " sx={{bgcolor:"#EC5800",color:"white",fontWeight:"BOLD"}}>View our Menu</Button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main