import { ListItem, ListItemButton } from '@mui/material';
import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import "./Header.css"
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
  <div class="container-fluid">
    <a class="navbar-brand bistro" href="#">Bistro</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse font " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-item">
          <ListItem>
          <NavLink onClick={() => {window.scrollTo(0, 0)}} class="nav-link " aria-current="page" to="/" >Home</NavLink>
          </ListItem>
        </li>
        <li class="nav-item">
        <ListItem>
          <NavLink onClick={() => {window.scrollTo(0, 0)}} class="nav-link" to="/Menu">Menu</NavLink>
        </ListItem>
        </li>
        <li class="nav-item">
        <ListItem>
          <NavLink onClick={() => {window.scrollTo(0, 0)}} class="nav-link " to="/Contact" >Contact</NavLink>
        </ListItem>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success" type="submit">Book a Table</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header