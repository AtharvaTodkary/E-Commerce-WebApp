import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import Modal from "./Modal";
import ProductAdminView from "./ProductAdminView";
import Stars from "../utils/Stars";

export default function ProductCard({product}) {

  const state = useContext(GlobalState);
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;

  return (
    <>
      <div className="col-md-3 mb-4 text-black">
        <div className="card">
          {
            isAdmin ? (<input className="col-md-2 form-check" type="checkbox" checked={product.checked} />) : ''
          }
          <img className="card-img-top p-3 rounded" style={{ "objectFit": "contain" }} src={product.images.url} alt={product.title} height={400} />
          <div className="card-body row">
            <h5 className="card-title fs-6">{product.title}</h5>
            <Stars />
            <p className="card-text text-dark">₹{product.price}</p>
            <ProductAdminView product={product} isAdmin={isAdmin} />
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal />
    </>
  );
}
