import ItemCount from "../ItemCount/ItemCount"

export const Item = ({img,price,name,description,stock}) => {
    return  (
            <div className='col-md-4'>                   
                <div className="card m-5" style={{backgroundColor:"white", borderRadius:"sm", boxShadow:"5px grey", padding:"6px", width:"256px" , height:"400px"}}>
                    <div className="card-body d-flex flex-column mx-auto text-center">
                        <img src={img} alt={description} className='w-100' style={{ width: "150px", height: "200px" }} />
                        <span>${price}</span>                                                           
                    </div>
                    <div className="card-header">
                        {`${name}`}
                    </div>
                    <div className="card-footer">
                        <span>{`${description}`}</span>                                                                                 
                    </div>
                    <ItemCount initial = {0} stock = {stock}/>
                </div>
            </div>
            )
} 

export default Item
