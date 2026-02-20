import './App.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import HomePage from './Components/Pages/HomePage'
import Collections from './Components/Collections'
import Product from "./Components/Product";
import TravelMode from "./Components/Pages/TravelMode";
import TravelGuide from "./Components/Pages/TravelGuide";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/men' element={<HomePage initialCategory="MEN" />} />
        <Route path='/women' element={<HomePage initialCategory="WOMEN" />} />
        <Route path='/juniors' element={<HomePage initialCategory="JUNIORS" />} />
        <Route path='/collections/:category' element={<Collections />} />
        <Route path='/product/:slug' element={<Product />} />
        <Route path='/travel-mode' element={<TravelMode />} />
        <Route path='/travel-guide/:id' element={<TravelGuide />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
