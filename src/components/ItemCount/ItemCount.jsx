import {AddIcon,MinusIcon} from "@chakra-ui/icons";
import { Button,Text } from "@chakra-ui/react";

const ItemCount = ({count, availableStock, handleCount}) => {
    
    const addition = () => ( count < availableStock ? handleCount(count+1) : null )  

    const substract = () => ( count > 0 ? handleCount(count-1) : null )

    return (
        <>
        <div className="d-flex mx-auto my-3 justify-content-center">
            <Button borderColor="black" borderRadius="3" bg="black" boxShadow="sm" mx="15" disabled={count===0} onClick={substract}><MinusIcon color="white" fontSize="large"/></Button>
            <Text my="auto">Cantidad: {count}</Text>
            <Button borderColor="black" borderRadius="3" bg="black" boxShadow="sm" mx="15" disabled={count===availableStock} onClick={addition}><AddIcon color="white" fontSize="large"/></Button>
        </div>
        </>
    )
}

export default ItemCount

