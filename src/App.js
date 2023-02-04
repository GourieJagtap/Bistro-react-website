// import { Router } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from "./Components/Home"
import Menu from './Components/Menu'
import Newssec from './Components/Newssec'
const App = () => {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Menu" element={<Menu/>}></Route>
          <Route path="/News" element={<Newssec/>}></Route>
          <Route path="/Contact" element={<Newssec/>}></Route>
        </Routes>
    </div>
  )
}


export default App  