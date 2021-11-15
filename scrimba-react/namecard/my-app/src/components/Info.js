import React from "react"
import Profile from "../images/profile.png"
import Email from "../images/email.png"
import Linkedin from "../images/linkedin-white.png"

export default function Info(){
    return(
        <div className="info">
            <img className="profilepic" src={Profile} alt="profile pic"/>
            <h4 className="name">
                Laura Smith
            </h4>
            <p className="job">
                Frontend Developer
            </p>
            <p className="website">
                <a href src="google.com">laurasmith.website</a>
            </p>
            <div className="buttons">
                <button className="emailbtn">
                    <img src={Email} className="emailicon" alt="email icon"/>
                    <p>Email</p>
                </button>
                <button className="linkedinbtn"  >
                    <img src={Linkedin} className="linkedinicon" alt="linkedin icon"/>
                    <p>Linkedin</p>
                </button>
            </div>
        </div>
    )
}