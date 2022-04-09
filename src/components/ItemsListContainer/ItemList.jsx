import { Item } from "./Item"
import {Grid as ChakraGrid} from "@chakra-ui/react"

export const ItemList = ({items})  =>{

    return  (
        <ChakraGrid gap={50} templateColumns="repeat(auto-fill, minmax(256px, 1fr))" width="100%">
            {
            items.map( (item) => <Item {...item} key={item.id} />)
            }
        </ChakraGrid>   
        )

}

export default ItemList