import React from 'react'
import NavBar from './Components/Navbar'
import Home from './pages/Home'
import Product from './pages/Products'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
     <Routes>
     {/* <Route path="/" element={<NavBar/>}  /> */}
     <Route path="/" element={<Home/>}  />
     <Route path="/products" element={<Product/>}  />
    

     </Routes>

    </Router>
  )
}

export default App
