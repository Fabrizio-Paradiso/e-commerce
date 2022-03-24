
const ItemCount = ({count, availableStock, handleCount}) => {
    
    const addition = () => ( count < availableStock ? handleCount(count+1) : null )  

    const substract = () => ( count > 0 ? handleCount(count-1) : null )

    return (
        <>
        <div className="d-flex mx-auto my-2 justify-content-center" style={{paddingTop:"0.8rem"}}>
            <button className="text-center mx-auto py-auto" style={{all:"unset", cursor:"pointer", backgroundColor:"#F58A1F", width:"20px", height:"25px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}} disabled={count===0} onClick={substract}>
                <span style={{fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>-</span>
            </button>
            <span className="my-auto">Cantidad: {count}</span>
            <button className="text-center mx-auto p-auto" style={{all:"unset", cursor:"pointer", backgroundColor:"#F58A1F", width:"20px", height:"25px" , boxShadow: "0px 1px black", border:"0.06rem black solid"}} disabled={count===availableStock} onClick={addition}>
                <span style={{fontSize:"1.1rem", fontWeight:"bold", borderBottom:"2rem" ,color:"#fff", textShadow: "1.2px 1px 0.5px black"}}>+</span>
            </button>
        </div>
        </>
    )
}

export default ItemCount

