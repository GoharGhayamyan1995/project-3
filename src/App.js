
import './App.css'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import Main from './Main'
import Product from './product'
import { useState } from 'react'
import {Routes, Route}
from 'react-router-dom';




function App() {
  const[count,setCount]=useState(0)
  const handleClick=()=>{setCount(count+1)}
  return (
    <div className="wrapper">
      <Header handleClik={handleClick} count={count}/>
      <Routes>
      <Route path="/" element= {<Main handleClick={handleClick}/>}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="Про нас" element={<About/>}/> 
      </Routes> 
      <Footer/>
     </div>
  );
}

export default App;
