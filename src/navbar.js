import React from "react";

export default function Navbar(props){
    return (
        <nav className={props.darkmode ? "dark" : " "}>
            <img className="nav--logo" src="logo192.png" alt="react logo" />
            <h1 className="nav--logoText">ReactFacts</h1>
            <div className="nav--toggler">
                <p className="toggler--light">light</p>
                <div className="toggler--slider"
                    onClick={props.toggler}
                >
                    <div className="toggler--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
        
    )
}