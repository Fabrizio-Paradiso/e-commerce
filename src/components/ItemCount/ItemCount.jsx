import {AddIcon,MinusIcon} from "@chakra-ui/icons";

const ItemCount = ({count, availableStock, handleCount}) => {
    
    const addition = () => ( count < availableStock ? handleCount(count+1) : null )  

    const substract = () => ( count > 0 ? handleCount(count-1) : null )

    return (
        <>
        <div className="d-flex mx-auto my-2 justify-content-center" style={{paddingTop:"0.8rem"}}>
            <button className="text-center mx-2 py-auto" style={{all:"unset", cursor:"pointer", backgroundColor:"#F58A1F", width:"20px", height:"25px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}} disabled={count===0} onClick={substract}>
                <MinusIcon style={{fontSize:"0.9rem", fontWeight:"bold" ,color:"#fff"}}/>
            </button>
            <span className="my-auto">Cantidad: {count}</span>
            <button className="text-center mx-2 p-auto" style={{all:"unset", cursor:"pointer", backgroundColor:"#F58A1F", width:"20px", height:"25px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}} disabled={count===availableStock} onClick={addition}>
                <AddIcon style={{fontSize:"0.9rem", fontWeight:"bold" ,color:"#fff"}}/>
            </button>
        </div>
        </>
    )
}

export default ItemCount

