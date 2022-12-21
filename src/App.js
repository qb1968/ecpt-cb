import React from "react"
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Nav'
import Home from './pages/Home'
import Services from './pages/Services'
import './App.css'

const App = () => {
  return (
    <>
       <NavBar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
       </Routes>
    </>
  )
}

export default App