import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const[menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")}   className={menu==="home"?"active":""} >
               <Link to='/'>Home</Link> 
                </li>
            <li onClick={()=>setMenu("menu")}  className={menu==="menu"?"active":""}>
                <Link to='/menu'>
                 Menu
                </Link>
                </li>
            <li onClick={()=>setMenu("mobile-app")}  className={menu==="mobile-app"?"active":""}>
                 <Link to='/mobile-app'>
                 Mobile-App
                </Link>
            </li>
            <li onClick={()=>setMenu("contact")}  className={menu==="contact"?"active":""}>
                 <Link to='/contact'>
                 Contact
                </Link>
            </li>
            
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="search-icon" className='search'/>
            <div className="navbar-search">
                <img src={assets.basket_icon} alt="basket-icon" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
