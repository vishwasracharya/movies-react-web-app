import React from "react";
import { Link } from "react-router-dom";

import { Auth } from "../../controllers/auth";

const Header = () => {
  const auth = Auth();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              loading="eager"
              className="my-auto"
              src="/images/logo.png"
              width="24"
              height="24"
              alt="Logo"
              title="Logo"
            />
            Movies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={"/movies/add"}
                >
                  Add Movie
                </Link>
              </li>

              {auth ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to={"/auth/SignOut"}
                    >
                      SignOut
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to={"/auth/SignIn"}
                    >
                      SignIn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to={"/auth/SignUp"}
                    >
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {auth ? (
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={`/account/${user._id}`}>
                    Hello {user.firstName}
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Header;
