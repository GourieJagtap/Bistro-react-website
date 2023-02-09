import { Paper } from '@mui/material';
import React from 'react';
import "./Pizzamenu.css"

const Pizzamenu = (props) => {
  return (
    <div className='container-fluid p-1'>
        <Paper elevation={8}>
        <div className='row p-1'>
            <div className='col-sm-12 '>
                <div className='row p-2' >
                    <div className='col-2 d-flex justify-content-center align-items-center'>
                        <img src={props.img} className="imgs"></img>
                    </div>
                    <div className='col-9'>
                        <p className='bold d-flex justify-content-between'>{props.title}<b className=''>{props.price}</b></p>
                        <p>{props.desp}</p>
                    </div>
                </div>
            </div>
        </div>
        </Paper>
    </div>
  )
}

export default Pizzamenu