import React from "react"
import icon from "../images/react-icon-small.png"

export default function Navbar() {
    return(
        <nav id="navbar">
            <img src={icon} alt="pic of icon" id="icon"></img>
            <h3 id="logo_text">ReactFacts</h3>
            <h4 id="title">React Course - Project 1</h4>
        </nav>
    )
}
