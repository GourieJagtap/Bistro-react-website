import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import "./MiniContents.css"

const MiniContents = (props) => {
  return (
    <Grid item xs={12} md={3} display="flex" alignContent="center" justifyContent="center" padding={3} className="font">
        <Paper elevation={15} sx={{borderRadius:3,padding:2}}>
            <Box display="flex" alignContent="center" justifyContent="center" sx={{padding:"20px"}}>{props.icon}</Box>
            <p className='weight'><center>{props.title}</center></p> 
            <p><center>{props.subtitle}</center></p>
        </Paper>
    </Grid>
  )
}

export default MiniContents