import React from "react"

export default function Navbar() {
const immg = url('https://github.com/ayxxn-shxrif/AIRBNB-STATIC-CLONE-REACT/blob/main/public/static/images/airbnb-logo.png')
  return (
        <nav>
            <img src={immg} className="nav--logo" />
        </nav>
    )
}
