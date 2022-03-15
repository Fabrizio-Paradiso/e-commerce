import { useState } from "react"
import {AddIcon,MinusIcon} from "@chakra-ui/icons";
import { Button,Text } from "@chakra-ui/react";

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
        <>
        <div className="d-flex mx-auto my-3 justify-content-center">
            <Button borderColor="black" borderRadius="3" bg="black" boxShadow="sm" mx="15" styledisabled={count===0} onClick={substract}><MinusIcon color="white" fontSize="large"/></Button>
            <Text my="auto">Cantidad: {count}</Text>
            <Button borderColor="black" borderRadius="3" bg="black" boxShadow="sm" mx="15" styledisabled={count===stock} onClick={addition}><AddIcon color="white" fontSize="large"/></Button>
        </div>
        <div className="d-flex-column text-center">
            <Text py="1" color="red">Only {stock} in stock </Text>
            <Button borderColor="black" borderRadius="3" bg="black" boxShadow="sm" mx="15" color="white" height="30" textAlign="center" onClick={handleAdd}>
                <Text my="auto" type="button" styleDisabled={count===0} badgeContent={count}>Add to cart</Text>
            </Button>
        </div>

        </>
    )
}

export default ItemCount

