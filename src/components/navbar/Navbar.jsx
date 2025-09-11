import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowlogin}) => {
    const[menu,setMenu]=useState("home")
    const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="logo" className="logo" /></Link> 
        <ul className="navbar-menu">
            <Link onClick={()=>setMenu("home")}   className={menu==="home"?"active":""} >
             Home   </Link>
            <a href='#menu' onClick={()=>setMenu("menu")}  className={menu==="menu"?"active":""}>

                 Menu
               
                </a>


                <a href='#app-download' onClick={()=>setMenu("mobile-app")}  className={menu==="mobile-app"?"active":""}>
                   Mobile-App
               
                </a>
           
            <a  href='#footer' onClick={()=>setMenu("contact")}  className={menu==="contact"?"active":""}>
               
                 Contact
               
            </a>
            
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="search-icon" className='search'/>
            <div className="navbar-search">
              <Link to='/cart'>
              <img src={assets.basket_icon} alt="basket-icon" />
              </Link>  
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowlogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
