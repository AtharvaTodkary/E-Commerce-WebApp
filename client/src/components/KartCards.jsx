import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../GlobalState';
import KartSummary from './KartSummary';
import KartInfor from './KartInfor';

export default function KartCards() {

    const state = useContext(GlobalState);
    const [cart] = state.userAPI.cart;
    console.log(cart);

    if (cart.length === 0)
        return (
            <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
        );

    const cardStyle = {
        card: { backgroundColor: "#1e1e1e", border: "none", color: "white" },
        cardHeaderSummary: { backgroundColor: "#282828", color: "white" },
        btnCheckOut: { backgroundColor: "#ff5c5c", color: "#fff" },
        removeBtn: { color: "#ff5c5c", cursor: "pointer" },
    };

    return (
        <div className="container my-5">
            <div className="card" style={cardStyle.card}>
                <div
                    className="card-header text-center"
                    style={cardStyle.cardHeaderSummary}
                >
                    <h2>Shopping Cart</h2>
                </div>
                {cart.map((item) => (
                    <div className="card-body" key={item._id}>
                        <KartInfor item={item} />
                    </div>
                ))}
            </div>
            <KartSummary cardStyle={cardStyle} />
        </div>
    )
}
