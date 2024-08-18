import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

export default function LoginCard() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-4 p-3 rounded my-5 border">
          <h1 className="fw-bold p-3 pt-3 text-center">Login</h1>
          <hr />
          <div className="d-flex justify-content-center pt-2">
            <LoginForm />
          </div>
            <div className="col-md-5">
                <p>Haven't Registered Yet? <Link to="/register">Register</Link></p>
            </div>
        </div>
      </div>
    </>
  );
}
