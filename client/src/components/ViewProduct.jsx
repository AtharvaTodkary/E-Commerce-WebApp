import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";

export default function ViewProduct({ productInfo }) {

    const state = useContext(GlobalState);
    const addCart = state.userAPI.addCart;
    // console.log(productInfo)

    const inforStyles = {
        card: { "backgroundColor": "#1e1e1e", "border": "none", "color": "white" },
        price: { "color": "#ff5c5c", "fontSize": "1.5rem" },
        btnCart: { "backgroundColor": "#ff5c5c", "color": "#fff" },
    }

    return (
        <div className="container my-5">
            <div className="card p-3" style={inforStyles.card}>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
                        <img src={productInfo.images?.url} alt="Product" className="img-fluid rounded" height={300} width={300} />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mt-3 fw-bolder fs-1">{productInfo.title}</h2>
                        <p className=""><span className="fw-bolder">Category:</span> {productInfo.category}</p>
                        <p className="price" style={inforStyles.price}>$299.99</p>
                        <p>
                            This is a detailed description of the product. It includes all the key features, benefits, and other important details that help the customer make a buying decision.
                        </p>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="quantity" className="form-label fw-bolder">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" min="1" max="10" value="1" className="form-control w-25" />
                        </div>
                        <div className="d-flex justify-content-start">
                            <div className="col-md-5 d-flex justify-content-between">
                                <span onClick={()=>{addCart(productInfo)}} className="btn btn-cart mr-3"  style={inforStyles.btnCart}>Add to Cart</span>
                                <span className="btn btn-outline-light">Buy Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
