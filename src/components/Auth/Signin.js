import React, { Fragment, useRef, useState } from 'react';

const Signin = () => {
  return (
    <Fragment>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 mx-auto">
              <div className="mb-4">
                <h1 className="text-center">LOGIN</h1>
                <h2 className="lead text-center text-muted">Enter Credentials</h2>
              </div>
              <form action="<%=site_url%>/auth/signin" method="post">
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
                <button
                  type="submit"
                  className="btn btn-primary rounded border-0 shadow w-100"
                >
                  Sign in
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
