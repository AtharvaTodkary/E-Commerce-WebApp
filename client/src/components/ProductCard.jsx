import React, { useContext, useState } from "react";
import { GlobalState } from "../GlobalState";
import Modal from "../utils/Modal";
import ProductView from "./ProductView";
import Stars from "../utils/Stars";

export default function ProductCard({ product }) {

  const state = useContext(GlobalState);
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    boxShadow: isHovered ? "10px 10px 20px rgba(255, 255, 255, 0.3)" : "",
    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
    transition: "transform 0.3s, box-shadow 0.3s"
  };

  return (
    <>
      <div className="col-md-3 mb-4" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="card text-light bg-dark" style={cardStyle}>
          {
            isAdmin ? (<input className="col-md-2 form-check" type="checkbox" checked={product.checked} />) : ''
          }
          <img className="card-img-top p-3 rounded" style={{ "objectFit": "contain" }} src={product.images.url} alt={product.title} height={400} />
          <div className="card-body row">
            <h5 className="card-title fs-6">{product.title}</h5>
            <Stars />
            <p className="card-text text-dark">₹{product.price}</p>
            <ProductView product={product} isAdmin={isAdmin} />
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}
