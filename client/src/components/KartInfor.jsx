import React, { useContext } from 'react'
import { GlobalState } from '../GlobalState';
import { Link } from 'react-router-dom';

export default function KartInfor({item}) {

    const state = useContext(GlobalState);
    const addCart = state.userAPI.addCart;
    const removeCart = state.userAPI.removeCart;

    return (
        <div className="d-flex justify-content-center border-bottom py-3 row">
            <div className="d-flex justify-content-center col-md-2">
                <img
                    src={item.images.url}
                    alt="Product"
                    className="img-fluid rounded"
                    style={{ width: "100px", height: "100px", objectFit: "contain" }}
                />
            </div>
            <div className="col-md-4 d-flex justify-content-center row">
                <div className='col-md-12 align-items-center row'>
                    <h5>{item.title}</h5>
                    <p className="">{item.description}</p>
                </div>
            </div>
            <div className="d-flex justify-content-center col-md-2 align-items-center">
                <>
                    <button onClick={() => { removeCart(item) }} className="btn btn-secondary btn-sm mr-2">-</button>
                    <input
                        type="text"
                        className="form-control form-control-sm text-center"
                        value={item.quantity}
                        style={{ "maxWidth": "50px" }}
                        readOnly
                    />
                    <button onClick={() => { addCart(item) }} className="btn btn-secondary btn-sm ml-2">+</button>
                </>
            </div>
            <div className="col-md-3 d-flex justify-content-center row">
                <div className="col-md-8 align-items-center row">
                    <span className="fs-5 fw-medium text-center p-3">₹{item.price}</span>
                    <Link to={`/details/${item._id}`} className="btn btn-primary">View Product</Link>
                </div>
            </div>
        </div>
    )
}
