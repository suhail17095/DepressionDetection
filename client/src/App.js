import './App.css';
import Navbar from "./Components/Navbar"
import Second from "./Components/Second"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import About from "./Components/About"
import "./CSS/Home.css"
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data,setdata]=useState([{}]);

  const onClickHandler=((e) => {
    e.preventDefault();
    async function fetchMyAPI() {
      console.log("response");
        let response = await fetch('/predict',{method:'POST'})
        response = await response.json()
        
        setdata([response])
    }

    fetchMyAPI()
  })
  return (
   
    <div>
      <BrowserRouter>
      <Navbar mode="dark"/>
        <Routes>
        <Route path='/' element={<Home onClickHandler={onClickHandler}/>}/>
        <Route path='/twitter' element={<Second/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
