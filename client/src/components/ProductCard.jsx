import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, isAdmin, addCart }) {
  return (
    <>
      <div className="col-md-3 mb-4 text-black">
        <div className="card">
          {
            isAdmin ? (<input className="col-md-2 form-check" type="checkbox" checked={product.checked} />) : ''
          }
          <img className="card-img-top p-3 rounded" src={product.images.url} alt={product.title} height={400} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">${product.price}</p>
            <div className="d-flex justify-content-evenly">
              {isAdmin ?
                (<>
                  <Link to="#" className="btn btn-success">
                    Delete
                  </Link>
                  <Link className="btn btn-primary" to="#">
                    Edit
                  </Link>
                </>) :
                (<>
                  <Link to='#' className="btn btn-success" onClick={() => addCart(product)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Buy Now
                  </Link>
                  <Link className="btn btn-primary" to={`/details/${product._id}`}>
                    View Now
                  </Link>
                </>)
              }
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="bg-dark modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Product Added to cart
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
