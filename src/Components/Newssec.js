import React from 'react';
import book from "../Images/book.png";
import Book from "../Pages/Book.js"
import Testimonials from "../Pages/Testimonials.js";
import Mini from "./mini.js";
import Banner from "../Images/banner.png";
import "./Newssec.css"

const Newssec = () => {
  return (
    <div>
      <Book></Book>
      <Testimonials></Testimonials>
        <img src={Banner} className="banner"></img>
      <Mini/>
    </div>
  )
}

export default Newssec