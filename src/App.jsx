import './App.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import HomePage from './Components/Pages/HomePage'
import AboutMe  from "./Components/Pages/AboutMe"
import Blogs from "./Components/Pages/Blogs"
import Contact from "./Components/Pages/Contact"
import Products from './Components/Pages/Products'
import Collections from './Components/Collections'
import Product from "./Components/Product";

import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header/>
        <Routes>

          <Route path='/' element={<HomePage/>}/>
          <Route path='/about-us' element={<AboutMe/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/product/:slug' element={<Product/>}/>
          
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
