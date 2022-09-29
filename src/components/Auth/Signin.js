import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/userAction";
import { useForm } from "react-hook-form";

import { Auth } from "../../controllers/auth.js";

import { RequiredMark } from "../BasicComponents/RequiredMark";
import { RequiredErrorMsg } from "../BasicComponents/RequiredErrorMsg";

const Signin = () => {
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

  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onSubmit = () => {
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address <RequiredMark /></label>
                  <input
                    type="email"
                    className="form-control mb-2"
                    id="email"
                    name="email"
                    placeholder="Enter Email address"
                    {...register("email", { required: true })}
                    onChange={(e) => setloginEmail(e.target.value)}
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
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <RequiredErrorMsg errors={errors} name="password" />
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
