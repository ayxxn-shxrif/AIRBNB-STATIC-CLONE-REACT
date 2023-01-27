import React from "react"

export default function Hero() {

  const imgs = url('https://github.com/ayxxn-shxrif/AIRBNB-STATIC-CLONE-REACT/blob/main/public/static/images/photo-grid.png?raw=true')

  return (
        <section className="hero">
            <img src={imgs} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
