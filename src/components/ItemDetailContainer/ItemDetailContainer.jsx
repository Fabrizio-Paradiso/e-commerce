import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {stock} from '../../data/stock.js'
import {ItemDetail} from "./ItemDetail"
import getItem from "../helpers/getItem.js"
import Loader from "../Loader/Loader"


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams ()
  
    useEffect(() => {
        setLoading(true)
        getItem(stock)
        .then((res) => setItem(res.find(prod => prod.id === parseInt(id))))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))    
    }, [id])

    return (
        <div className="row text-center py-3 px-auto">
            {
                loading? 
                (<Loader/>) 
                : 
                (<ItemDetail {...item}/>)
            }
        </div>
    )
}

export default ItemDetailContainer
