import { useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import {stock} from '../../data/stock.js'
import getItem from "../helpers/getItem.js"
import Loader from "../Loader/Loader"
import  ItemList  from "./ItemList"
// import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore"

export const ItemListContainer = ( {greeting} ) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const { category } = useParams ()
  
    useEffect(() => {
        if ( category ){
            setLoading(true)
            getItem(stock)
            .then((resp) => setItems(resp.filter (prod => prod.category === category)))
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))    
        }
        else{
            setLoading(true)
            getItem(stock)
            .then((response) => setItems(response))
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))    
        }
    }, [category])

    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryCollection = doc(db,'items')
    //     getDocs(queryCollection)
    //     .then(resp => console.log(resp))
    //     // const queryColection = collection(db, 'items')
    //     // console.log(queryColection)
    // },[])
    

    return (
        <div className="row text-center py-3 px-auto">
            <h1 style={{fontSize:"2.1rem", fontWeight:"bold", borderBottom:"2rem", color:"#F58A1F", textShadow: "1.2px 1px 0.5px black"}}>{greeting}</h1>
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
