import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../redux/actions/userAction";
import { useForm } from "react-hook-form";

import { Auth } from "../../controllers/auth.js";
import { RequiredErrorMsg } from "../BasicComponents/RequiredErrorMsg";
import { RequiredMark } from "../BasicComponents/RequiredMark";
import Metadata from "../Metadata/Metadata";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

  const onSubmit = () => {
    dispatch(signUp(firstName, lastName, email, password));
  };

  useEffect(() => {
    if (isAuthenticated || auth) {
      window.location.href = "/";
    }
  }, [error, loading, isAuthenticated, auth]);

  function handlePasswordMatch(e) {
    if (e.target.value !== password) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }

  return (
    <Fragment>
      <Metadata title="Sign Up" />
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
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group mb-3">
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <label htmlFor="firstName">First Name <RequiredMark /></label>
                      <input
                        type="text"
                        className="form-control mb-2"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter First Name"
                        {...register("firstName", { required: true })}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <RequiredErrorMsg errors={errors} name="firstName" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="lastName">Last Name <RequiredMark /></label>
                      <input
                        type="text"
                        className="form-control mb-2"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter Last Name"
                        {...register("lastName", { required: true })}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <RequiredErrorMsg errors={errors} name="lastName" />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address <RequiredMark /></label>
                  <input
                    type="email"
                    className="form-control mb-2"
                    id="email"
                    name="email"
                    placeholder="Enter Email address"
                    {...register("email", { required: true })}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <RequiredErrorMsg errors={errors} name="email" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password <RequiredMark /></label>
                  <input
                    type="password"
                    className="form-control mb-2"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    {...register("password", { required: true })}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <RequiredErrorMsg errors={errors} name="password" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="re-enter-password">Re-enter Password <RequiredMark /></label>
                  <input
                    type="password"
                    className="form-control mb-2"
                    id="re-enter-password"
                    name="re-enter-password"
                    placeholder="Re-Enter Password"
                    {...register("re-enter-password", { required: true })}
                    onKeyUp={handlePasswordMatch}
                  />
                  <RequiredErrorMsg errors={errors} name="re-enter-password" />
                  <p className="text-danger" style={{ fontSize: "small" }}>
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
