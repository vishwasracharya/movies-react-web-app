import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../redux/actions/userAction";

import { Auth } from "../../controllers/auth.js";

const Signup = () => {
  const auth = Auth();
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(firstName, lastName, email, password));
  };

  useEffect(() => {
    if (isAuthenticated || auth) {
      window.location.href = "/";
    }
  }, [error, loading, isAuthenticated, auth]);

  function handlePasswordMatch (e) {
    if (e.target.value !== password) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }

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
                action="/auth/signup"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="form-group mb-3">
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="re-enter-password">Re-enter Password</label>
                  <input
                    type="password"
                    className="form-control mb-2"
                    id="re-enter-password"
                    name="re-enter-password"
                    placeholder="Re-Enter Password"
                    onKeyUp={handlePasswordMatch}
                    required
                  />
                  <p className="text-danger" style={{fontSize: 'small'}}>
                    {isError ? "Passwords do not match" : ""}
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded border-0 shadow w-100"
                  disabled={error || isError ? true : false}
                >
                  {loading ? (
                    <Fragment>
                      <div
                        class="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></div>
                      {error ? error : "Sign Up"}
                    </Fragment>
                  ) : (
                    <Fragment>{error ? error : "Sign Up"}</Fragment>
                  )}
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
