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
import { use } from 'react'
import LoginPopup from './components/loginPopup/LoginPopup'

function App() {
  // const [count, setCount] = useState(0)
  const[showlogin,setShowlogin]=useState(false)

  return (
    <>
    {showlogin?<LoginPopup setShowLogin={setShowlogin}/>:<></>}
     <div className="app">
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
     </div>
     <Footer/>
    </>
  )
}

export default App
