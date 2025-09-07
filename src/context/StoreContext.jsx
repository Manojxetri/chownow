import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext= createContext(null)


const StoreContextProvider = (props)=>{

    const [cartItems,setCartItems]=useState({});


   
    const addToCart = (itemID)=>{
         //if the customer add the item for the first time in the cart
            if(!cartItems[itemID]){
                setCartItems((prev)=>({...prev,[itemID]:1}))
            }
            else{
                     setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
            }
    }


    const removeFromCart =(itemID)=>{
                    setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }


    useEffect(()=>{

    },[cartItems])

    const contextValue={
            food_list,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;