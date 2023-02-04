import React from 'react';
import Dishcard from './Dishcard';
import "./Dishes.css";


const Dishes = () => {
    let dishList=[
        {
            img:"",
            dtitle:"Cheese Royale Burger",
            ddesp:"Grilled Beef Patty, Russian Musuels and relished burger"
        },
        {
            img:"",
            dtitle:"Prawns Havana Pasta"
        },
        {
            img:"",
            dtitle:"Chicken Mossarella"
        },
    ]

  return (
    <div class="container-fluid">
    <div class="row fontt">
        <div class="col-sm-12 d-flex justify-content-center pt-5 dish">
            Popular Dishes
        </div>
        <div class="col-sm-12 d-flex justify-content-center ">
            Try the delicious new dishes from our chef.
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 d-flex justify-content-center ">
            <Dishcard title={dishList[0].dtitle} desp={dishList[0].ddesp}></Dishcard>
            <Dishcard title={dishList[1].dtitle} ></Dishcard>
            <Dishcard title={dishList[2].dtitle} ></Dishcard>

        </div>
    </div>
    </div>
  )
}

export default Dishes