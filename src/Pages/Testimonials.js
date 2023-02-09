import React from 'react';
import Testimonialcard from "../Pages/Testimonialcard.js"
import "./Testimonials.css"

const Testimonials = () => {
    
    let testimonialcard =[
        {
            img:"",
            title:"Jane Avilla",
            desg:"Manager",
            desc:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            img:"",
            title:"Corban Rehnyar",
            desg:"Chef",
            desc:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            img:"",
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
                        <p className='abt'>They say about us</p>
                    </center>
                </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center p-2'>
                        <Testimonialcard 
                        title={testimonialcard[0].title}
                        desg={testimonialcard[0].desg}
                        desc={testimonialcard[0].desc}
                        />
                        <Testimonialcard 
                        title={testimonialcard[1].title}
                        desg={testimonialcard[1].desg}
                        desc={testimonialcard[1].desc}
                        />
                        <Testimonialcard 
                        title={testimonialcard[2].title}
                        desg={testimonialcard[2].desg}
                        desc={testimonialcard[2].desc}
                        />
                </div>
            </div>
  )
}

export default Testimonials