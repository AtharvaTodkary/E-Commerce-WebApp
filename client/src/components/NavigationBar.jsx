import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";
import axios from "axios";

export default function NavigationBar() {

  const state = useContext(GlobalState);
  // console.log(state)
  const [isLogged, setIsLogged] = state.userAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;
  const userInfor = state.userAPI.userInfor;
  const [cart] = state.userAPI.cart;

  // console.log(userInfor)

  async function handleLogout() {
    await axios.get('/user/logout');
    localStorage.clear();
    setIsAdmin(false);
    setIsLogged(false);
    window.location.reload();
  }

  const adminRouter = () => {
    return (
      <>
        <li className="nav-item"><Link className="nav-link" to='/createProduct'>Create Products</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/categories'>Categories</Link></li>
      </>
    )
  }

  const loggedRouter = () => {
    return (
      <div className=" d-flex justify-content-between ">
        <li className="nav-item"><Link className="nav-link" to='/history'>History</Link></li>
        <li className="nav-item"><Link className="nav-link text-danger" onClick={handleLogout} to='/'>Logout</Link></li>
      </div>
    )
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to="/">
            {/* <div className="col-md-5"> */}
              <img src="../images/SmileKart.png" alt="" style={{ objectFit: "contain" }} height={50}/>
            {/* </div> */}
            {isAdmin ? ' : Admins' : ''}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5 " id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  {isAdmin ? 'Products' : 'Shop'}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              {isAdmin && adminRouter()}
              {
                isLogged ? loggedRouter() :
                  (<li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login or Register
                    </Link>
                  </li>)
              }

            </ul>
            {isAdmin ? '' :
              <div className="ShopCart">
                <span>{cart.length}</span>
                <Link to="/kart">
                  <i className="fa-solid fa-cart-shopping me-sm-2 mt-2 me-5 fs-3"></i>
                </Link>
              </div>
            }
          </div>
        </div>
      </nav>
      {isLogged ?
        <div className=" d-flex justify-content-end p-3">
          <div className="me-5 p-2 border">
            Welcome {userInfor[0].name}
          </div>
        </div> : ''}
    </>
  );
}
