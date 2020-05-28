import React from 'react'
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return (
        <div className="navbar">
            <NavLink className="Home" to="/Home">Home</NavLink>
            <NavLink className="Listings" to="/Listings">Listings</NavLink>
            <NavLink className="ScheduleViewing" to="/ScheduleViewing">Schedule viewing</NavLink>
            <NavLink className="AboutUs" to="/AboutUs/English">About us</NavLink>
        </div>
    )
}