import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

  
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div>
      <div className="food-item">
        <div className="image-container">
            <img className='food-item-image' src={image} alt="image" />
            {
              !cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}></img>
              :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="icon" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="green add" />
              </div>
            }
        </div>
        <div className="food-info">
            <div className="food-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="rating" />
            </div>
            <p className="food-description">
                {description}
            </p>
            <p className='food-price'>${price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
