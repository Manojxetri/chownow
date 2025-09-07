import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Menu from '../../components/exploreMenu/Menu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appDownload/AppDownload'
import Footer from '../../components/footer/Footer'

const Home = () => {
  const[category,setCategory]=useState("All")
  return (
    <>
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}/>
       <AppDownload/>  
    </div>
     </>
  )
}

export default Home
