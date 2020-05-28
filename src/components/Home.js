import React from "react";
import {NavLink} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Reel Estate</h1>
      <img src="https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg"></img>
      <br></br>
      <NavLink className="Listings" to="/Listings"><button >Listings</button></NavLink>
      <br></br>
      <NavLink className="AboutUs" to="/AboutUs"><button>About us</button></NavLink>
      <br></br>
    </div>
  );
}
