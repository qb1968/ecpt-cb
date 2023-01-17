import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import Nav1 from './components/Nav'
import Home from './pages/Home'
import Services from './pages/Services'
import Purchase from "./pages/Purchase"
import './index.css'
import Back from "./pages/Back"
import Test from "./pages/Testimony"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import './App.css'





const App = () => {

  const isMobileDevice = MediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isLaptop = MediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isTabletDevice = MediaQuery({
    query: "(min-device-width: 768px)",
  });
 
  return (
    <>
   
    
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
     {<Footer/>} 
   </Router>
   
   </>
  )
}

export default App