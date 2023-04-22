import React, {useState, useEffect} from 'react'
import './ItemListPage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ItemCard from './../../components/ItemCard/ItemCard';

function ItemListPage() {
    const [itemList, setItemList] = useState([])
    const {item} = useParams();
    const [pages, setPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(0)
    const [pageNumbers, setPageNumbers] = useState([])

    useEffect(
        ()=>{
            axios.get(`https://eldenring.fanapis.com/api/${item}?limit=100&page=${currentPage}`)
            .then(res => {
                console.log(res.data)
                setItemList(res.data.data)
                {
                    if(res.data.total/100 > 1 && res.data.total%100 > 0) {
                        setPages(Math.ceil(res.data.total/100))
                    } else if(res.data.total/100> 1 && res.data.total%100 === 0) {
                        setPages(res.data.total/100)
                    }
                }
            })
            .catch(err=>console.log(err))
        }, [currentPage]
    )

    useEffect(
        ()=>{
            let arr = []
            for(let i = 1; i <= pages; i++) {
                arr = [...arr, i]
                setPageNumbers(arr)
            }
        }, [pages]
    )

    const handlePageChange = (number) => {
        setCurrentPage(number)
    }

  return (
    <div>
        <h1>{`${item}`}</h1>
        <div className="list-container">
            {
                itemList.map(item => <ItemCard  key={`${item.id}`} item={item}/>)
            }
        </div>
        <div className="page-numbers">
            {
                pageNumbers.map(num => <button key={num} onClick={()=>handlePageChange(num-1)}>{num}</button>)
            }
        </div>
    </div>
  )
}

export default ItemListPage