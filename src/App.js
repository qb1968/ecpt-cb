import React from "react"
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Nav'
import Home from './pages/Home'
import Services from './pages/Services'
import Compliment from "./pages/Compliment"
import Kinesio from "./pages/Kinesio"
import Purchase from "./pages/Purchase"
import Modal from "./pages/Modal"
import Back from "./pages/Back"
import Test from "./pages/Testimony"
import Contact from "./pages/Contact"
import './App.css'

const App = () => {
  return (
    <>
       <NavBar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/screenings" element={<Compliment/>}/>
        <Route path="/kinesio-taping-sessions" element={<Kinesio/>}/>
        <Route path="/products" element={<Purchase/>}/>
        <Route path="/modalities" element={<Modal/>}/>
        <Route path="/forms" element={<Back/>}/>
        <Route path="testimonials" element={<Test/>}/>
        <Route path="contact" element={<Contact/>}/>

       </Routes>
    </>
  )
}

export default App