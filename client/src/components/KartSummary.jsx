import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../GlobalState';

export default function KartSummary(props) {

    const state = useContext(GlobalState);
    const [cart] = state.userAPI.cart;
    console.log(cart);

    const [totalPrice, setTotalPrice] = useState(0);
    // let totalPrice = 0;
    useEffect(()=>{
        let newTotalPrice = 0;
        cart.forEach((item)=>{
            newTotalPrice += (item.price*item.quantity);
        })
        setTotalPrice(newTotalPrice);
    },[cart])
    console.log(totalPrice);
    return (
        <div
            className="cart-summary p-4 mt-4 rounded"
            style={props.cardStyle.cardHeaderSummary}
        >
            <h4 className="mb-3">Order Summary</h4>
            <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹ {totalPrice}</span>
            </div>
            <div className="d-flex justify-content-between">
                <span>Tax</span>
                <span>₹ {0.16*totalPrice}</span>
            </div>
            <div className="d-flex justify-content-between font-weight-bold">
                <span>Total</span>
                <span>₹ {totalPrice*1.16}</span>
            </div>
            <span
                className="btn btn-checkout btn-block mt-4"
                style={props.cardStyle.btnCheckOut}
            >
                Proceed to Checkout
            </span>
        </div>
    )
}
