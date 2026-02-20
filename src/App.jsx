import './App.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import HomePage from './Components/Pages/HomePage'
import Collections from './Components/Collections'
import Product from "./Components/Product";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header />
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/collections/:category' element={<Collections />} />
        <Route path='/product/:slug' element={<Product />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
