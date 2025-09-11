import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='placeorder'>
      <div className="order-left">
           <p className="title">Delivery Infromation</p>
           <div className="multi-fields">
            <input type="text" placeholder='first name'/>
            <input type="text" placeholder='last name'/>
           </div>
           <input type="email" placeholder='Email address' />
           <input type="text"  placeholder='steet'/>
           <div className="multi-fields">
            <input type="text" placeholder='city'/>
            <input type="text" placeholder='State'/>
           </div>
           <div className="multi-fields">
            <input type="text" placeholder='ZIP code'/>
            <input type="text" placeholder='Country'/>
           </div>
           <input type="text" placeholder='Phone' />
      </div>
      
      <div className="order-right">
        <div className="cart-bottom">
        <div className="total">
          <h2>Cart Total</h2>
          <div>
            <div className="total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
        </div>
      </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
