import { useState, useEffect } from "react"
import  getFetch  from "../../helpers/getFetch"

import Loader from "../Loader/Loader"
import CartProduct from "./CartProduct"

function ItemListContainer( {greeting} )  {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
        getFetch
        .then((resp) => setProducts(resp))
        .finally(()=> setLoading(false))    
        }, [])

    const onAdd = (count) => { console.log(` ${count} products have been added to cart ` ) }

    return (
        <div className="row text-center py-3 px-auto">
            <h1>{greeting}</h1>
            {   
            loading ? <Loader/> : <CartProduct products={products} onAdd={onAdd} /> }    
        </div>
    )}

export default ItemListContainer
