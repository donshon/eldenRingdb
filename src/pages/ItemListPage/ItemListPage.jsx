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
    const [category, setCategory] = useState('')

    useEffect(
        ()=>{
            const cancelToken = axios.CancelToken.source()

            axios.get(`https://eldenring.fanapis.com/api/${item}?limit=100&page=${currentPage}`, {cancelToken: cancelToken.token})
            .then(res => {
                //console.log(res.data)
                setItemList(res.data.data)
                setCategory(item)
                {
                    if(res.data.total/100 > 1 && res.data.total%100 > 0) {
                        setPages(Math.ceil(res.data.total/100))
                    } else if(res.data.total/100> 1 && res.data.total%100 === 0) {
                        setPages(res.data.total/100)
                    }
                }
            })
            .catch(err=>{
                if(axios.isCancel(err)) {
                    console.log("Cancelled")
                } else {
                    console.log(err)
                }
            })

            return () => {
                cancelToken.cancel();
            };
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
        {
            category==='weapons'?
            <div>
                <p>Filter by:</p>
                <button>Axe</button>
                <button>Ballista</button>
                <button>Bow</button>
                <button>Claw</button>
                <button>Colossal Sword</button>
                <button>Colossal Weapon</button>
                <button>Crossbow</button>
                <button>Curved Greatsword</button>
                <button>Curved Sword</button>
                <button>Dagger</button>
                <button>Flail</button>
                <button>Fist</button>
                <button>Glintstone Staff</button>
                <button>Great Spear</button>
                <button>Halberd</button>
                <button>Hammer</button>
                <button>Heavy Thrusting Sword</button>
                <button>Sacred Seal</button>
            </div>
            :
            null
        }
        <div className="list-container">
            {
                itemList.map(item => <ItemCard  key={`${item.id}`} item={item} category={category}/>)
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