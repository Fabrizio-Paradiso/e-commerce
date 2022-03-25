import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {stock} from '../../data/stock.js'
import {ItemDetail} from "./ItemDetail"
import getItem from "../helpers/getItem.js"
import Loader from "../Loader/Loader"
// import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore"

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

    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryDb = doc(db,'items','0zfUwrVjXCrKS4cHA7g3')
    //     getDoc(queryDb)
    //     .then(resp => setItem({id: resp.id, ...resp.data()}))
    //     // const queryColection = collection(db, 'items')
    //     // console.log(queryColection)
    // },[])

    return (
        <div className="row text-center py-3 px-auto">
            {
                loading? 
                (<Loader/>) 
                : 
                (<ItemDetail item={item}/>)
            }
        </div>
    )
}

export default ItemDetailContainer
