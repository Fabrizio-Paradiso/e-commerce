import ItemCount from "../ItemCount/ItemCount"

export const CartProduct = ({products, onAdd}) =>{
    return(
        products.map((prod) => <div 
                                key={prod.id}
                                className='col-md-4'
                                >                        
                                    <div className="card w-100 mt-5">
                                        <div className="card-header">
                                            {`${prod.name}`}
                                        </div>
                                        <div className="card-body d-flex flex-column mx-auto text-center">
                                            <img src={prod.img} alt={prod.description} className='w-100' style={{ width: "150px", height: "200px" }} />
                                            <span>${prod.price}</span>                                                           
                                        </div>
                                        <div className="card-footer">
                                            <span>{`${prod.description}`}</span>                                                                                 
                                        </div>
                                        <ItemCount initial = {0} stock = {prod.stock} onAdd={onAdd}/>
                                    </div>
                                </div>
        )
    )}
export default CartProduct