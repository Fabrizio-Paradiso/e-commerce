import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from "./ItemDetail"
import Loader from "../Loader/Loader"
import { collection, getDocs, getFirestore} from "firebase/firestore"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    // const [itemStock, setItemStock] = useState(0)
    const [loading, setLoading] = useState(false)
    const { id } = useParams ()
  
    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        let queryCollection = collection(db,'items')
        getDocs(queryCollection)
        .then (queryItems => setItem(queryItems.docs.map(item=>({id:item.id, ...item.data()})).find(item=>item.id===id)))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))    
    }, [id])

    return (
        <div className="row text-center py-3 px-auto">
            {
                loading? 
                (<Loader/>) 
                : 
                (<ItemDetail item={item} stock={item.stock}/>)
            }
        </div>
    )
}

export default ItemDetailContainer
