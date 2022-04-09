const ItemCount = ({count, availableStock, handleCount}) => {
    
    const addition = () => ( count < availableStock ? handleCount(count+1) : null )  

    const substract = () => ( count > 0 ? handleCount(count-1) : null )

    return (
        <div style={{paddingTop:"1.5rem"}}>
            <button value="1" type="button" class="d-flex justify-content-around align-items-center" style={{width:"70px", backgroundColor:"#F58A1F", boxShadow: "0px 1px black", border:"0.06rem black solid"}}>
                <button style={{all:"unset"}} className="py-auto" disabled={count===0} onClick={substract}> <svg fill="#fff" stroke-width="0" filter= "drop-shadow(1.2px 1px 0.5px black)" viewBox="0 0 1024 1024" height="1rem" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg> </button>
                <p class="my-auto" style={{color:"#fff", fontWeight:"bold" , textShadow: "1.2px 1px 0.5px black" ,  padding:"0 0.2rem 0 0.2rem"}}>{count}</p>
                <button style={{all:"unset"}} className="py-auto" disabled={count===availableStock} onClick={addition}> <svg fill="#fff" stroke-width="0" filter= "drop-shadow(1.2px 1px 0.5px black)" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg> </button> 
            </button>
        </div>
    )
}

export default ItemCount

