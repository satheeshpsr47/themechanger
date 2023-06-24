import React from "react";

export default function Main(props){
    return (
        <main className={props.darkmode ? "dark" : " "}>
            <h1 className="main--title">fun facts about react</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by jordan walke</li>
                <li>Has well over 100k stars in github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers 1000 of enterprise apps and mobile apps</li>
            </ul>
        </main>
    )
}