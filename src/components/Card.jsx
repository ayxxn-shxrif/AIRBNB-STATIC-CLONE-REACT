import React from "react"

export default function Card(props) {
  const coverImg = `/static/images/${props.coverImg}`
  const starImg = `/static/images/star.png`
  let badgeText
  
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
 <div className={props.darkMode ? "dark" : ""}>
    <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={coverImg} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src={starImg} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
  </div>)
}
