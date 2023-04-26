import React from 'react'
import ItemDetailsPage from '../../pages/ItemDetailsPage/ItemDetailsPage'
import './ItemCard.css'
import { Link } from 'react-router-dom'

function ItemCard({item, category}) {
  return (
    <Link to={`/${category}/${item.id}`} className="card-container">
        <img src={`${item.image}`}/>
        <h2>{`${item.name}`}</h2>
    </Link>
  )
}

export default ItemCard