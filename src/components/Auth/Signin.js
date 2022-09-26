import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/userAction";

import { Auth } from '../../controllers/auth.js'

const Signin = () => {
  const auth = Auth();
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (isAuthenticated || auth) {
      window.location.href = "/";
    }
  }, [error, loading, isAuthenticated, auth]);

  return (
    <Fragment>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 mx-auto">
              <div className="mb-4">
                <h1 className="text-center">LOGIN</h1>
                <h2 className="lead text-center text-muted">
                  Enter Credentials
                </h2>
              </div>
              <form action="/auth/signin" method="post" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Email address"
                    value={loginEmail}
                    onChange={(e) => setloginEmail(e.target.value)}
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
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded border-0 shadow w-100"
                  disabled={error ? true : false}
                >
                  {loading ? (
                    <Fragment>
                      <div
                        class="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></div>{" "}
                      {error ? error : "Login"}
                    </Fragment>
                  ) : (
                    <Fragment>{error ? error : "Login"}</Fragment>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Signin;
