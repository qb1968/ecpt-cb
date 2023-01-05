import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
   <Router>
    <Nav1/>
       
  <Routes>

  
       
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
       
        <Route  path="/products" element={<Purchase/>}/>
        
        <Route  path="/forms" element={<Back/>}/>
        <Route  path="testimonials" element={<Test/>}/>
        <Route  path="contact" element={<Contact/>}/>

      </Routes>
      
   </Router>
  )
}

export default App