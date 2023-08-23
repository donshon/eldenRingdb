import React, {useState, useEffect} from 'react'
import './ItemDetailsPage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Comment from './../../components/Comment/Comment';

function ItemDetailsPage() {
  const {category, id} = useParams();
  const [object, setObject] = useState({})

  useEffect(
    ()=>{
      axios.get(`https://eldenring.fanapis.com/api/${category}/${id}`)
      .then(res => {
        console.log(res.data.data)
        setObject(res.data.data)
      })
      .catch(err=>console.log(err))
    }, []
  )

  return (
    <div className="details-page-container">
        <p>{object.description}</p>
        <div className="object-img-container">
          <h2>{object.name}</h2>
          <img src={object.image}/>
        </div>
        <Comment itemId={`${id}`}/>
    </div>
  )
}

export default ItemDetailsPage