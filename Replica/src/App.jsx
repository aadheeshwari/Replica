import React from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navcon from "./Component/Navcon"
import Banner from "./Component/Banner"
import Fitness from "./Component/Fitness"
import Nutrition from "./Component/Nutrition"
import Gym from "./Component/Gym"
import AboutUs from "./Component/AboutUs"
import Login from "./Component/Login"
import Register from "./Component/Register"
import Footer from "./Footer"

export default function App() {
  return (
    <main>
      <Navcon />
    
      <Routes>
        <Route index element={<Fitness />} />
        <Route path="/fit" element={<Fitness />} />
        <Route path='/Nutri' element={<Nutrition />} />
        <Route path="/gym" element={<Gym />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/log' element={<Login />} />
        <Route path='/sin' element={<Register />} />
      </Routes>
      <br/>
      <br/>
      <Footer/>
    </main>
  )
}
