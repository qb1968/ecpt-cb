import React from "react"
import {Routes,  Route } from 'react-router-dom'
import Nav1 from './components/Nav'
import Home from './pages/Home'
import Services from './pages/Services'

import Purchase from "./pages/Purchase"
import './index.css'
import Back from "./pages/Back"
import Test from "./pages/Testimony"
import Contact from "./pages/Contact"
import './App.css'

const App = () => {
  return (
    <>
    <Nav1/>
       
  <Routes>
       
        <Route  exact path="/" element={<Home/>}/>
        <Route  exact path="/services" element={<Services/>}/>
       
        <Route exact path="/products" element={<Purchase/>}/>
        
        <Route exact path="/forms" element={<Back/>}/>
        <Route exact path="testimonials" element={<Test/>}/>
        <Route exact path="contact" element={<Contact/>}/>

      </Routes>
      
    </>
  )
}

export default App