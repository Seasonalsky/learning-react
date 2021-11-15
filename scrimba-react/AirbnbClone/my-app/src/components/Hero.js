import React from "react";
import Photo from "../images/photo-grid.png"

export default function Hero(){
    return(
        <div className="hero">
            <img src={Photo} className="heroimg"/>
            <h1 className="herotitle">
            Online Experiences
            </h1>
            <h3 className="herodesc">
            Join unique interactive activities led by one-of-a-kind
            hosts—all without leaving home.
            </h3>
        </div>
    )
}