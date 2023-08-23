import React, {useState, useEffect} from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import SearchResults from '../../components/SearchResults/SearchResults'
import axios from 'axios'

function HomePage() {
  const [category, setCategory] = useState("")

  //state for search
  const [query, setQuery] = useState("")
  const [queryResults, setQueryResults] = useState([])

  const handleSearch = (e) => {
    //store search input in state
    setQuery(e.target.value)
    //call api to get matching search input
    axios.get(`https://eldenring.fanapis.com/api/${category}?name=${query}`)
    .then(res => {
      //console.log(res.data.results)
      setQueryResults(res.data.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="home-container">
        <h1>Elden Ring Database</h1>
        <div>
          <input placeholder="Search..." className="searchBox" onChange={handleSearch}/>
          {
              query?
              <div className="search-results-container">
                {
                  queryResults.map(item => <SearchResults key={item.id} thing={item} query={setQuery}/>)
                }
              </div>
              :
              null
            }
        </div>
        <div className="categories">
            <button><Link to='/categories/ammos'>Ammos</Link></button>
            <button><Link to='/categories/armors'>Armors</Link></button>
            <button><Link to='/categories/ashes'>Ashes of War</Link></button>
            <button><Link to='/categories/bosses'>Bosses</Link></button>
            <button><Link to='/categories/classes'>Classes</Link></button>
            <button><Link to='/categories/creatures'>Creatures</Link></button>
            <button><Link to='/categories/incantations'>Incantations</Link></button>
            <button><Link to='/categories/items'>Items</Link></button>
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