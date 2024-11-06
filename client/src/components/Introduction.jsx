import React, { useContext } from 'react'
import { GlobalState } from '../GlobalState';
import { Link } from 'react-router-dom';

export default function Introduction() {
    const state = useContext(GlobalState);
    const userInfor = state.userAPI.userInfor;
    return (
        <div className="col-md-12 d-flex justify-content-center p-3">
            <div className="col-md-5 text-center">
                <span className='fs-1 fw-bolder'>Welcome to SmileKart<span className='text-info'> {userInfor[0].name} </span></span>
                <p className='fs-6'>Shop the latest trends with unbeatable prices!</p>
                <Link to={'/product'} className="btn bg-danger mt-3">Shop Now</Link>
            </div>
        </div>
    )
}
