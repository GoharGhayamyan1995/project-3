
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Product from './product'
import {Routes, Route}
from 'react-router-dom';




function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="/" element= {<Main/>}/>
        <Route path="/product/:id" element={<Product />}/>
     </Routes> 
      <Footer/>
     
    
       </div>
  );
}

export default App;
