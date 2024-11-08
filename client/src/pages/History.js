import React from "react";
import NavigationBar from "../components/NavigationBar";

export default function History() {
  return (
    <>
      <NavigationBar />
      <div className="col-md-12 d-flex justify-content-center">
        <div className="col-md-5 text-center">
          <h1>Order History</h1>
          <p>Your order history will be displayed here.</p> <br />
          <p className="fs-1 fw-bolder text-danger p-5">No Order History</p>
        </div>
      </div>
    </>
  );
}
