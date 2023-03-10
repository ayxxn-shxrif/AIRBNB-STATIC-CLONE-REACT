import React from "react"

export default function Hero(props) {
    return (
     <div className={props.darkMode ? "dark" : ""}>
    <section className="hero" >
            <img src="/static/images/photo-grid.png" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
        </div>
    )
}
