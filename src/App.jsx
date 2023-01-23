import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                  key={item.id}
                  {...item}
                
            />
        )
    })        
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    } 
    return (
        <div>
            <Navbar 
               darkMode={darkMode} 
               toggleDarkMode={toggleDarkMode}/>
            <Hero 
               darkMode={darkMode} />
            <section className="cards-list">
                {cards} 
            </section>
        </div>
    )
}
