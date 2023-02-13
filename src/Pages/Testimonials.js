import React from 'react';
import Testimonialcard from "../Pages/Testimonialcard.js"
import "./Testimonials.css";
import Chef from "../Images/chef.jpg";
import designer from "../Images/designer.jpg";
import manager from "../Images/manager.jpg";

const Testimonials = () => {
    
    let testimonialcard =[
        {
            img:manager,
            title:"Jane Avilla",
            desg:"Manager",
            desc:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            img:Chef,
            title:"Corban Rehnyar",
            desg:"Chef",
            desc:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            img:designer,
            title:"Rihana Fields",
            desg:"Designer",
            desc:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
        },
    ]


  return (
    <div className='container-fluid bgrey'>
    <div class="row font3" >
        <div class="col-sm-12 d-flex justify-content-center pt-5">
                    <center>
                        <p className='dish'>Testimonials</p>
                        <p className='abt d-soul' >They say about us</p>
                    </center>
                </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center p-2'>
                        <Testimonialcard 
                        img={testimonialcard[0].img}
                        title={testimonialcard[0].title}
                        desg={testimonialcard[0].desg}
                        desc={testimonialcard[0].desc}
                        />
                        <Testimonialcard 
                        img={testimonialcard[1].img}
                        title={testimonialcard[1].title}
                        desg={testimonialcard[1].desg}
                        desc={testimonialcard[1].desc}
                        />
                        <Testimonialcard 
                        img={testimonialcard[2].img}
                        title={testimonialcard[2].title}
                        desg={testimonialcard[2].desg}
                        desc={testimonialcard[2].desc}
                        />
                </div>
            </div>
  )
}

export default Testimonials