import React from 'react';
import Pizza from "../Images/Pizza/pizza.jpg";
import Burger from "../Images/Burger/Burger.jpg";
import Pasta from "../Images/Pasta/pasta.jpg";
import "../Components/Menu.css";
import Pizzamenu from '../Pages/Pizzamenu/Pizzamenu';
import pizza1 from "../Images/Pizza/pizza1.jpeg"
import pizza3 from "../Images/Pizza/pizza2.jpeg"
import pizza2 from "../Images/Pizza/pizza3.jpeg"
import pizza5 from "../Images/Pizza/pizza4.jpeg"
import pizza4 from "../Images/Pizza/pizza5.jpeg"
import burger1 from "../Images/Burger/burger1.webp";
import burger2 from "../Images/Burger/burger2.webp";
import burger3 from "../Images/Burger/burger3.webp";
import burger4 from "../Images/Burger/burger4.jpeg";
import pasta1 from "../Images/Pasta/pasta1.jpeg";
import pasta2 from "../Images/Pasta/pasta2.jpeg";
import pasta3 from "../Images/Pasta/pasta3.jpeg";
import pasta4 from "../Images/Pasta/pasta4.webp";



const Menu = () => {
  
  let pizzamenu=[
    {
      img:pizza1,
      ititle:"Oakry Smoke Pizza",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
    {
      img:pizza2,
      ititle:"White Ricotta Pizza",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
    {
      img:pizza3,
      ititle:"Original Margherita Pizza",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
    {
      img:pizza4,
      ititle:"Calzone",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
    {
      img:pizza5,
      ititle:"Mercy Margherita",
      iprice:"RS 249",
      idesp:"Parsing error: Unexpected token "
    },
  ]
  let burgermenu=[
    {
      img:burger1,
      ititle:"Double Barrel Meat Burger",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
    {
      img:burger2,
      ititle:"Classic Havana Burger",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
    {
      img:burger3,
      ititle:"Single BBQ Chicken Burger",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
    {
      img:burger4,
      ititle:"Havana Special Chicken Burger",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
  ]
  let pastamenu=[
    {
      img:pasta1,
      ititle:"Double Barrel Meat Burger",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
    {
      img:pasta2,
      ititle:"Classic Havana Burger",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
    {
      img:pasta3,
      ititle:"Single BBQ Chicken Burger",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
    {
      img:pasta4,
      ititle:"Havana Special Chicken Burger",
      iprice:"RS 249",
      idesp:"Smoke Mosarella,Basil and Romanico"
    },
  ]

  return (
    <div className='container-fluid'>
          <div className='col-sm-12 fontt'>
            <div className='row p-md-4 p-sm-2'>
              <hr></hr>
              <div className='col-sm-12 d-flex justify-content-center menu'>
                Menu
              </div>
              <hr></hr>
              <div className='col-sm-12 '>
                <div className='row'>
                  <div className='col-sm-6 d-flex justify-content-center align-items-center'>
                    <img src={Pizza} ></img>
                  </div>
                  <div className='col-sm-6'>
                    <div className='row '>
                      <div className='col-sm-12 d-flex justify-content-center align-items-center pizzafont'>
                        Pizza
                      </div>
                      <div className='col-sm-12 pt-2 pb-5'>
                        <Pizzamenu 
                          img={pizzamenu[0].img}
                          title={pizzamenu[0].ititle}
                          price={pizzamenu[0].iprice}
                          desp={pizzamenu[0].idesp}/>
                          <Pizzamenu 
                          img={pizzamenu[2].img}
                          title={pizzamenu[2].ititle}
                          price={pizzamenu[2].iprice}
                          desp={pizzamenu[2].idesp}/>
                          <Pizzamenu 
                          img={pizzamenu[3].img}
                          title={pizzamenu[3].ititle}
                          price={pizzamenu[3].iprice}
                          desp={pizzamenu[3].idesp}/>
                          <Pizzamenu 
                          img={pizzamenu[4].img}
                          title={pizzamenu[4].ititle}
                          price={pizzamenu[4].iprice}
                          desp={pizzamenu[4].idesp}/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 pt-3'>
                <div className='row d-flex'>
                  <div className='col-sm-6 order-last order-sm-first'>
                    <div className='row'>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center pizzafont '>
                      Burger
                    </div>
                  <div className='col-sm-12 pt-2 pb-5 '>
                        <Pizzamenu 
                          img={burgermenu[0].img}
                          title={burgermenu[0].ititle}
                          price={burgermenu[0].iprice}
                          desp={burgermenu[0].idesp}/>
                          <Pizzamenu 
                          img={burgermenu[1].img}
                          title={burgermenu[1].ititle}
                          price={burgermenu[1].iprice}
                          desp={burgermenu[1].idesp}/>
                          <Pizzamenu 
                          img={burgermenu[3].img}
                          title={burgermenu[3].ititle}
                          price={burgermenu[3].iprice}
                          desp={burgermenu[3].idesp}/>
                          <Pizzamenu 
                          img={burgermenu[2].img}
                          title={burgermenu[2].ititle}
                          price={burgermenu[2].iprice}
                          desp={burgermenu[2].idesp}/>
                        </div>
                        </div>
                  </div>
                  <div className='col-sm-6 d-flex justify-content-center align-items-center order-md-2 order-sm-1'>
                    <img src={Burger} ></img>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 pt-3'>
                <div className='row'>
                  <div className='col-sm-6 d-flex justify-content-center align-items-center '>
                    <img src={Pasta} ></img>
                  </div>
                  <div className='col-sm-6'>
                  <div className='row '>
                      <div className='col-sm-12 d-flex justify-content-center align-items-center pizzafont'>
                        Pasta
                      </div>
                      <div className='col-sm-12 pt-2 pb-5'>
                      <Pizzamenu 
                          img={pastamenu[0].img}
                          title={pastamenu[0].ititle}
                          price={pastamenu[0].iprice}
                          desp={pastamenu[0].idesp}/>
                          <Pizzamenu 
                          img={pastamenu[2].img}
                          title={pastamenu[2].ititle}
                          price={pastamenu[2].iprice}
                          desp={pastamenu[2].idesp}/>
                          <Pizzamenu 
                          img={pastamenu[3].img}
                          title={pastamenu[3].ititle}
                          price={pastamenu[3].iprice}
                          desp={pastamenu[3].idesp}/>
                          <Pizzamenu 
                          img={pastamenu[1].img}
                          title={pastamenu[1].ititle}
                          price={pastamenu[1].iprice}
                          desp={pastamenu[1].idesp}/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Menu;