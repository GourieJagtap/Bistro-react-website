import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import "./Main2.css";
const Main2 = () => {
  return (
    <div class="container-fluid bg2 " >
      <div class="row" >
        <div class="col-md-6  d-flex justify-content-center align-items-center food2" >
          <div class="row d-flex justify-content-center align-items-center  ">
            <div class="col-sm-12 d-flex justify-content-center align-items-center ctr2">
              <div class="row" >
                <div class="col-sm-12 d-soul2">
                  <p>Best Dish of the Day!</p>
                </div>
                <div class="col-sm-12 soul2" >
                  <p class="fw-bolder ">Fried Chicken<Divider></Divider>French Fries</p>
                </div>
                <div class="col-sm-12 d1-soul2">
                  <p>RS 199</p>
                </div>
                <div class="col-sm-12">
                  <Button className='btn2' variant="contained " sx={{bgcolor:"#EC5800",color:"white",fontWeight:"BOLD"}}>Add to Cart</Button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main2