import React from "react";
import Logo from "../images/airbnb-logo.png"

export default function Navbar(){
    return (
        <div className="navbar">
            <img src={Logo} className="logo"/>
        </div>
    )
}