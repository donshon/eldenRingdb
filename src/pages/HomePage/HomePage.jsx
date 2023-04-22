import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="home-container">
        <h1>Elden Ring Database</h1>
        <input type="text" placeholder="Search..."/>
        <div className="categories">
            <button><Link to='/categories/ammos'>Ammos</Link></button>
            <button><Link to='/categories/armors'>Armors</Link></button>
            <button><Link to='/categories/ashes'>Ashes of War</Link></button>
            <button><Link to='/categories/bosses'>Bosses</Link></button>
            <button><Link to='/categories/classes'>Classes</Link></button>
            <button><Link to='/categories/creatures'>Creatures</Link></button>
            <button><Link to='/categories/incantations'>Incantations</Link></button>
            <button><Link to='/categories/locations'>Locations</Link></button>
            <button><Link to='/categories/npcs'>NPC's</Link></button>
            <button><Link to='/categories/shields'>Shields</Link></button>
            <button><Link to='/categories/sorceries'>Sorceries</Link></button>
            <button><Link to='/categories/spirits'>Spirits</Link></button>
            <button><Link to='/categories/talismans'>Talismans</Link></button>
            <button><Link to='/categories/weapons'>Weapons</Link></button>
        </div>
    </div>
  )
}

export default HomePage