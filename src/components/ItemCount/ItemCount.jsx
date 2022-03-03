import { useState } from "react"
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const ItemCount = ({initial, stock=0}) => {
    
    const [count, setCount] = useState(initial)
    
    const addition = () => ( count < stock ? setCount(count+1) : null )  

    const substract = () => ( count > initial ? setCount(count - 1) : null )

    const onAdd = (count) => (
        console.log(`${count} items have been added to cart`)
    )
    
    const handleAdd = () => {     
        setCount(0)
        onAdd(count) 
    }

    return (
        <div className="d-flex mx-auto">
            <Button className="bg-dark mx-2" type="button" styledisabled={count===0} onClick={substract}><RemoveIcon color="primary" fontSize="medium"/></Button>
            <Button className="bg-dark mx-2" type="button" disabled={count===stock} onClick={addition}><AddIcon color="primary" fontSize="medium"/></Button>
            <Button onClick={handleAdd}>
                <Badge color="secondary" type="button" styleDisabled={count===0} badgeContent={count}><ShoppingCartIcon/>{""}</Badge>
            </Button>
             
        </div>
    )
}

export default ItemCount

