import React from 'react'
import ItemDetailsPage from '../../pages/ItemDetailsPage/ItemDetailsPage'
import './ItemCard.css'

function ItemCard({item}) {
  return (
    <div className="card-container">
        <img src={`${item.image}`}/>
        <h2>{`${item.name}`}</h2>
    </div>
  )
}

export default ItemCard