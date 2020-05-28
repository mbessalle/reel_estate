import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [language, setLanguage] = useState("English");

  const l2aboutUs = {
    English: "About us",
    Dutch: "Over ons",
    German: "Über uns",
    Spanish: "Sobre nosotras",
  };
  const l2listings = {
    English: "See listings",
    Dutch: "Bekijk woningen",
    German: "Immobilienangebote",
    Spanish: "Venta propiedades",
  };

  return (
    <div>
      <h1>Welcome to Reel Estate</h1>
      <img src="https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg"></img>
      <br></br>
      <NavLink className="Listings" to="/Listings">
        <button>{l2listings[language]}</button>
      </NavLink>
      <br></br>
      <NavLink className="AboutUs" to={`/AboutUs/${language}`}>
        <button>{l2aboutUs[language]}</button>
      </NavLink>
      <br></br>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="English">English</option>
        <option value="Dutch">Dutch</option>
        <option value="German">German</option>
        <option value="Spanish">Spanish</option>
      </select>
    </div>
  );
}
