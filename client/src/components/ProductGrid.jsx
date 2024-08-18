import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { GlobalState } from "../GlobalState";
export default function ProductGrid() {

  const state = useContext(GlobalState);
  const products = state.productAPI.products;
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;
  const addCart = state.userAPI.addCart;

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return <ProductCard key={product._id} isAdmin={isAdmin} product={product} addCart={addCart}/>;
          })}
        </div>
      </div>
    </div>
  );
}
