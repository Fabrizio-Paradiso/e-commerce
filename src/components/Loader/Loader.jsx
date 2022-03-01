import {Spinner} from 'reactstrap'

export const Loader = () =>{
    return(
        <div className="w-100 mt-3 text-center d-flex flex-column">
            <span>Loading...</span>
            <Spinner className="mx-auto" color ="dark"/>  
        </div>
    )
}

export default Loader