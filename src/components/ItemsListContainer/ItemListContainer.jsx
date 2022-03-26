import { useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader"
import  ItemList  from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


export const ItemListContainer = ( {greeting} ) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const { category } = useParams ()
  
    useEffect( () => {
        setLoading(true)
        const db = getFirestore()
        let queryCollection = collection(db,'items')
        if(category){ queryCollection = query(queryCollection, where('category','==',category)) }
        getDocs(queryCollection)
        .then (queryItems => setItems(queryItems.docs.map(item=>({id:item.id, ...item.data()}))))
        .finally(()=> setLoading(false))
    },[category])
    

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
