import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <h2>ChowNow – Your Hunger, Delivered Fast!</h2>
        <p>
          Craving something delicious? ChowNow connects you with the best
          restaurants around, delivering hot and fresh meals right to your
          doorstep. Simple, fast, and convenient — satisfying your hunger has
          never been this easy!
        </p>
      <a href="#menu">
         <button>View Menu</button>
        </a> 
      </div>
    </div>
  );
};

export default Header;
