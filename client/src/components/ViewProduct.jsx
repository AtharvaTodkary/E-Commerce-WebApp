import React from "react";

export default function ViewProduct({ productInfo, addCart }) {
    // Log the productInfo to check its structure
    console.log(productInfo);

    // Check if images and url properties exist
    const imageUrl = productInfo.images?.url;

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12 p-3 bg-dark-emphasis">
                    <span >{productInfo.category}</span>
                </div>
                <div className="col-12 col-md-4 bg-primary d-flex justify-content-center align-items-center p-5">
                    <img
                        className="rounded"
                        src={imageUrl}
                        alt={productInfo.title}
                        style={{ maxHeight: "400px", maxWidth: "100%" }}
                    />
                </div>
                <div className="col-12 col-md-5 bg-success p-2 mb-3 mb-md-0">
                    <div className="p-3">
                        <p className="fs-1">{productInfo.title}.</p>
                        <hr />
                        <div className="aboutThis">
                            <p className="fs-5 fw-bolder">About this Product</p>
                            <small>{productInfo.description}</small>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 bg-white text-black p-4">
                    <p className="fs-2">
                        <sup>$</sup>
                        <span className="fw-medium">{productInfo.price}</span>
                        <sup>00</sup>
                    </p>
                    <button className="btn btn-warning col-12 rounded-pill p-2 mt-2">
                        Add to Cart
                    </button>
                    <button className="btn btn-info col-12 rounded-pill mt-2 p-2">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
