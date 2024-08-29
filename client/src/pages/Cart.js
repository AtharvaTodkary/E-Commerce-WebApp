import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";

export default function Cart() {
  const state = useContext(GlobalState);
  const [cart] = state.userAPI.cart;
  const removeCart = state.userAPI.removeCart;
  console.log(cart);

  if (cart.length === 0)
    return (
      <>
        <NavigationBar />
        <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
      </>
    );

  return (
    <>
      <NavigationBar />
      <div>
        <div className="container border">
          <h2 className="p-3 fs-1 fw-bold">Shopping Cart</h2>
          {cart.map((item) => (
            <div
              key={item._id}
              className="border d-flex justify-content-evenly p-3 m-4"
            >
              <div className="col-md-3 d-flex justify-content-center">
                <img src={item.images.url} alt="" height={200} />
              </div>
              <div className="col-md-8 box-detail">
                <div className="d-flex">
                    <div className="col-md-10">{item.title} | {item.content}</div>
                    <div className="col-md-2 text-center fs-5 fw-bold"> ₹{item.price} </div>
                </div>
                {/* <div>Price: {item.price}</div> */}
                {/* <div>Name: {item.title}</div> */}
                <div> 
                  <Link to="#" onClick={()=>removeCart(item)}>Delete </Link> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
