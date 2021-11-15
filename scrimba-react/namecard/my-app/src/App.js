import React from "react"
import Footer from "./components/Footer"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import './index.css';

export default function App(){
    return(
        <div className="container">
            <div className="card">
                <Info/>
                <About/>
                <Interests/>
                <Footer/>
            </div>

        </div>
    )
}