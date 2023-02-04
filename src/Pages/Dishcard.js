import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Dishcard = (props) => {
  return (
    <div>
        <Paper>
            <Box>
                <div class="row">
                    <div class="col-sm-12 d-flex justify-content-center align-item-center">
                        <img src=""></img>
                    </div>
                    <div class="col-sm-12 d-flex justify-content-center align-item-center">
                        <p>{props.title}</p>
                    </div>
                    <div class="col-sm-12 d-flex justify-content-center align-item-center">
                        <p>{props.desp}</p>
                    </div>
                    <div class="col-sm-12 d-flex justify-content-center align-item-center">
                        <p>price</p>
                    </div>
                </div>
            </Box>
        </Paper>
    </div>
  )
}

export default Dishcard