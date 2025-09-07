import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Menu from './components/exploreMenu/Menu'
// import MenuPage from './pages/menupage/MenuPage'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app">
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/placeOrder' element={<PlaceOrder/>}/>
      </Routes>
     </div>
     <Footer/>
    </>
  )
}

export default App
