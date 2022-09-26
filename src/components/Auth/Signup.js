import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Fragment>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 mx-auto">
              <div className="mb-4">
                <h1 className="text-center">SIGN UP</h1>
                <h2 className="lead text-center text-muted">
                  Create An Account
                </h2>
              </div>
              <form
                className="mb-4"
                action="<%=site_url%>/auth/signup"
                method="post"
              >
                <div className="form-group mb-3">
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <label for="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter First Name"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label for="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter Last Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Email address"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label for="re-enter-password">Re-enter Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="re-enter-password"
                    name="re-enter-password"
                    placeholder="Re-Enter Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded border-0 shadow w-100"
                >
                  Sign Up
                </button>
              </form>

              <div className="mb-4 text-center">
                <p className="text-center text-muted">
                  Already Registered, <Link to={"/auth/signin"}>SignIn</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Signup;
