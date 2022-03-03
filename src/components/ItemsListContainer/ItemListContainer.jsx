import { useState, useEffect } from "react"
import {stock} from '../../data/stock.js'
import getFetch from "../helpers/getFetch.js"
import Loader from "../Loader/Loader"
import  ItemList  from "./ItemList"

export const ItemListContainer = ( {greeting} ) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
        setLoading(true)
        getFetch(stock)
        .then((response) => setItems(response))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))    
    }, [])

    return (
        <div className="row text-center py-3 px-auto">
            <h1>{greeting}</h1>
                { 
                loading? 
                    (<Loader/>) 
                    : 
                    (<ItemList items={items}/>) 
                }
        </div>
    )
}

export default ItemListContainer
