import { Grid } from '@mui/material'
import React from 'react'
import MiniContents from './MiniContents';
import EggAltTwoToneIcon from '@mui/icons-material/EggAltTwoTone';
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RamenDiningTwoToneIcon from '@mui/icons-material/RamenDiningTwoTone';

const Mini = () => {

  let content=[
    {
      icon:<EggAltTwoToneIcon sx={{ fontSize: "50px" }} />,
      title:"Fresh Ingredients",
      subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.sed do eiusmod sed do ",
    },
    {
      icon:<RestaurantTwoToneIcon sx={{ fontSize: "50px" }}/>,
      title:"Happy Clients",
      subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.sed do eiusmod. ",
    },
    {
      icon:<LunchDiningIcon sx={{ fontSize: "50px" }}/>,
      title:"Best Recipe",
      subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.sed do eiusmod. ",
    },
    {
      icon:<RamenDiningTwoToneIcon sx={{ fontSize: "50px"}}/>,
      title:"Vegan Menu",
      subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    }
  ]

  return (
    <Grid container sx={{bgcolor:"#585858"}}>
      <MiniContents icon={content[0].icon}
                    title={content[0].title}
                    subtitle={content[0].subtitle}/>
      <MiniContents icon={content[1].icon}
                    title={content[1].title}
                    subtitle={content[0].subtitle}/>
      <MiniContents icon={content[2].icon}
                    title={content[2].title}
                    subtitle={content[0].subtitle}/>
      <MiniContents icon={content[3].icon}
                    title={content[3].title}
                    subtitle={content[0].subtitle}/>
    </Grid>
  )
}

export default Mini