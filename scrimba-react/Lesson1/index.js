// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
import React from "react"
import ReactDOM from "react-dom"

const page = (
    <div id = "root">
    <img src="react-logo.png" width ="40px"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Over 100k stars on Github</li>
            <li>Maintained by Facebook</li>
            <li>Powers 1000s of enterprise apps</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))