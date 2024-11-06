import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../GlobalState';

export default function ProductView({product, isAdmin}) {
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart;
    return (
        <div className="d-flex justify-content-evenly">
            {isAdmin ?
                (<>
                    <Link to="#" className="btn btn-success">
                        Delete
                    </Link>
                    <Link className="btn btn-primary" to="#">
                        Edit
                    </Link>
                </>) :
                (<>
                    <Link to='#' className="btn btn-success" onClick={() => addCart(product)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Buy Now
                    </Link>
                    <Link className="btn btn-primary" to={`/details/${product._id}`}>
                        View Now
                    </Link>
                </>)
            }
        </div>
    )
}
