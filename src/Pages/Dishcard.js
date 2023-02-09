import { Button, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import "./Dishcard.css";

const Dishcard = (props) => {
  return (
    <div class="col-md-6 col-lg-4 font2">
        <Paper elevation={20} sx={{padding:"10px"}}>
            <div class="col-sm-12 d-flex justify-content-center align-item-center">
                <img src={props.img} class="img1"></img>
            </div>
            <div class="col-sm-12 d-flex justify-content-center align-item-center title">
                <p>{props.title}</p>
            </div>
            <div class="col-sm-12 d-flex justify-content-center align-item-center desp">
                <p><center>{props.desp}</center></p>
            </div>
            <div class="col-sm-12 d-flex justify-content-center align-item-center prc" >
                <p>{props.price}</p>
            </div>
            <div class="col-sm-12 d-flex justify-content-center align-item-center p-4">
                <Button variant="outlined" color="error" sx={{color:"black"}}>Add to Cart</Button>
            </div>
        </Paper>
    </div>
  )
}

export default Dishcard