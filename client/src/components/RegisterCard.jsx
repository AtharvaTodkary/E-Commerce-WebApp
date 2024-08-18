import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

export default function RegisterCard() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-4 p-3 rounded my-5 border">
          <h1 className="fw-bold p-3 pt-3 text-center">Join with us</h1>
          <hr />
          <div className="d-flex justify-content-center pt-2">
            <RegisterForm />
          </div>
            <div className="col-md-5">
                <p>Account exists ?<Link to="/login">Login</Link></p>
            </div>
        </div>
      </div>
    </>
  );
}
