import React, {useState} from 'react'
import './SearchResults.css'
import { Link } from 'react-router-dom';

function SearchResults({thing, query}) {

  return (
    <Link to={`/${category}/${thing?.id}`} className="search-link" onClick={()=>query('')}>
        <p>{`${thing?.name}`}</p>
    </Link>
  )
}

export default SearchResults