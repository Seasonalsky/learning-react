import React from "react";
import Twitter from "../images/twitter.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import Github from "../images/github.png"

export default function Footer() {
    return(
        <div className="footer">
            <img src={Twitter} alt="twitter icon"/>
            <img src={Facebook} alt="facebook icon"/>
            <img src={Instagram} alt="instagram icon"/>
            <img src={Github} alt="github icon"/>
        </div>
    )
}