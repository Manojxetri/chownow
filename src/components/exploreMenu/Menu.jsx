import React from "react";
import "./Menu.css";
import { menu_list } from "../../assets/assets";

const Menu = ({category,setCategory}) => {
  return (
    <div className="menu" id="mneu">
      <h1>Explore our menu</h1>
      <p className="menu-text">
        Discover a world of flavors with ChowNow! From sizzling starters and
        cheesy delights to refreshing beverages and sweet treats, our menu has
        something for every craving. Browse through a wide range of dishes and
        pick your favorites — your next delicious meal is just a tap away!
      </p>
      <div className="menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>{
                    setCategory(prev=>prev===item.menu_name?"All":item.menu_name)
                }} key={index} className="menu-item"> 
                       <img  src={item.menu_image} alt="menu-image" className={category===item.menu_name?"active":""} />
                       <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
    
  );
};

export default Menu;
