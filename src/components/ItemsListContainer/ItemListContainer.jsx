import { useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader"
import  ItemList  from "./ItemList"
import { collection, getDocs, getFirestore, query, where, orderBy} from "firebase/firestore"
import { Button, Stack, Text } from "@chakra-ui/react"

export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [sort, setSort] = useState("Most Recent")
    const { category } = useParams ()

    useEffect( () => {
        setLoading(true)
        const db = getFirestore()
        let queryCollection = collection(db,'items')
        if(category){ queryCollection = query(queryCollection, where("category","==",category)) }
        if (sort === String("Lowest Price")  ) { queryCollection = query(queryCollection, orderBy("price")) }
        if (sort === String("Highest Price") ) { queryCollection = query(queryCollection, orderBy("price","desc")) }
        getDocs(queryCollection)
        .then (queryItems => setItems(queryItems.docs.map(item=>({id:item.id, ...item.data()}))))
        .finally(()=> setLoading(false))
    },[category,sort])
    

    const handleSort = (e) =>{
        if(e.target.id === "Most Recent"  ) { setSort("Most Recent")   }
        if(e.target.id === "Lowest Price" ) { setSort("Lowest Price")  }
        if(e.target.id === "Highest Price") { setSort("Highest Price") }
    }
    

    return (
        <div className="row text-center py-3 px-auto">
            <Stack className="flex-row align-items-center">
                <Text style={{margin:"1rem 0 0rem 3rem", fontWeight:"bold", color:"black",  textShadow: "1px 1px 1px gray", display:"flex"}}>Sort By:</Text>
                <Stack>
                    <Button onClick={handleSort} style={{all:"unset"}}>
                        <Stack
                            style={{boxShadow: "2px 2px 2px black", borderRadius: '10px! important', margin:"1rem 0 0rem 3rem",}}
                            height="32px"
                            width="120px"
                            alignItems="center"
                            backgroundColor={ sort === String("Most Recent")? "#f58a1f" : "#fff" }
                            borderRadius={9999}
                            borderWidth={1}
                            color="primary.500"
                            direction="row"
                            fontSize="sm"
                            cursor={ sort !== String("Most Recent")? "pointer":"not-allowed" }
                            fontWeight="100"
                            justifyContent="center"
                            spacing={4}
                        >
                            <Text id="Most Recent" color={ sort === String("Most Recent")? "#fff":"#f58a1f" } style={{marginBottom:"0px", fontWeight:"bold", textShadow: "1.2px 1px 0.5px black"}}>Most Recent</Text>
                        </Stack>
                    </Button>
                </Stack>
                <Stack>
                    <Button onClick={handleSort} style={{all:"unset"}}>
                        <Stack
                            style={{boxShadow: "2px 2px 2px black", borderRadius: '10px! important', margin:"1rem 0 0rem 3rem",}}
                            height="32px"
                            width="120px"
                            alignItems="center"
                            backgroundColor={ sort === String("Highest Price")? "#f58a1f" : "#fff"}
                            borderRadius={9999}
                            borderWidth={1}
                            color="primary.500"
                            direction="row"
                            fontSize="sm"
                            cursor={ sort !== String("Highest Price")? "pointer":"not-allowed" }
                            fontWeight="100"
                            justifyContent="center"
                            spacing={4}
                        >
                            <Text id="Highest Price" color={ sort === String("Highest Price")? "#fff":"#f58a1f" } style={{marginBottom:"0px", fontWeight:"bold", textShadow: "1.2px 1px 0.5px black"}}>Highest Price</Text>
                        </Stack>
                    </Button>
                </Stack>
                <Stack>
                    <Button onClick={handleSort} style={{all:"unset"}}>
                        <Stack
                            style={{boxShadow: "2px 2px 2px black", borderRadius: '10px! important', margin:"1rem 0 0rem 3rem",}}
                            height="32px"
                            width="120px"
                            alignItems="center"
                            backgroundColor={ sort === String("Lowest Price")? "#f58a1f":"fff" }
                            borderRadius={9999}
                            borderWidth={1}
                            color="primary.500"
                            direction="row"
                            fontSize="sm"
                            cursor={ sort !== String("Lowest Price")? "pointer":"not-allowed" }
                            fontWeight="100"
                            justifyContent="center"
                            spacing={4}
                        >
                            <Text id="Lowest Price" color={ sort === String("Lowest Price")? "#fff":"#f58a1f" } style={{marginBottom:"0px", fontWeight:"bold", textShadow: "1.2px 1px 0.5px black"}}>Lowest Price</Text>
                        </Stack>
                    </Button>
                </Stack>
            </Stack>
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
