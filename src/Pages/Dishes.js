import React from 'react';
import Dishcard from './Dishcard';
import "./Dishes.css";
import burger from "../Images/burger.jpg"
import pasta from "../Images/pasta.jpg"
import pizza from "../Images/pizza.jpg"


const Dishes = () => {
    let dishList=[
        {
            dimg:burger,
            dtitle:"Cheese Royale Burger",
            ddesp:"Grilled Beef Patty, Russian Musuels and relished burger",
            dprice:"RS 149"
        },
        {
            dimg:pasta,
            dtitle:"Prawns Havana Pasta",
            ddesp:"Smoke Basil,Mosarella and picorine romanio",
            dprice:"RS 179",
        },
        {
            dimg:pizza,
            dtitle:"Chicken Pizza",
            ddesp:"Mosarella with Marinated Chicken and Basil freshno ",
            dprice:"RS 199"
        },
    ]

  return (
    <div class="container-fluid ">
        <div class="row fontt" >
            <div class="col-sm-12 d-flex justify-content-center pt-5 dish">
                <center>Popular Dishes</center>
            </div>
            <div class="col-sm-12 d-flex justify-content-center grey">
                <center>Try the delicious new dishes from our chef.</center>
            </div>
        </div>
        <div class="row " >
                <Dishcard 
                    img={dishList[0].dimg}
                    title={dishList[0].dtitle} 
                    desp={dishList[0].ddesp}
                    price={dishList[0].dprice}>
                </Dishcard>
                <Dishcard 
                    img={dishList[1].dimg}
                    title={dishList[1].dtitle} 
                    desp={dishList[1].ddesp}
                    price={dishList[1].dprice}>
                </Dishcard>
                <Dishcard 
                    img={dishList[2].dimg}
                    title={dishList[2].dtitle} 
                    desp={dishList[2].ddesp}
                    price={dishList[2].dprice}>
                </Dishcard>
        </div>
    </div>
  )
}

export default Dishes