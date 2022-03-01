import { useState } from "react"

const ItemCount = ({initial, stock=0, onAdd}) => {
    
    const [count, setCount] = useState(initial)
    
    const addition = () => ( count < stock ? setCount(count+1) : null )  

    const substract = () => ( count > initial ? setCount(count - 1) : null )

    const handleAdd = (e) => {     
        setCount(0)
        onAdd(count) 
    }

    return (
        <>
            <button type="button" disabled={count===0} className="btn btn-dark m-3" onClick={substract}> - </button>
            <span className="text-center"> Cantidad: { count } </span>
            <button type="button" disabled={count===stock}className="btn btn-dark m-3" onClick={addition}> + </button>
            <button type="button" disabled={count===0} className="btn btn-dark m-3" onClick={handleAdd}>Add to Cart</button>
        </>
    )
}

export default ItemCount

