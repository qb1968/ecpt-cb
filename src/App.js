import React from "react"
import {Routes,  Route } from 'react-router-dom'
import NavBar from './components/Nav'
import Home from './pages/Home'
import Services from './pages/Services'

import Purchase from "./pages/Purchase"

import Back from "./pages/Back"
import Test from "./pages/Testimony"
import Contact from "./pages/Contact"
import './App.css'

const App = () => {
  return (
    <>
    <NavBar/>
  <Routes>
       
       
        <Route  path="/" element={<Home/>}/>
        <Route  path="/services" element={<Services/>}/>
       
        <Route  path="/products" element={<Purchase/>}/>
        
        <Route  path="/forms" element={<Back/>}/>
        <Route  path="testimonials" element={<Test/>}/>
        <Route  path="contact" element={<Contact/>}/>

      </Routes>
      
    </>
  )
}

export default App