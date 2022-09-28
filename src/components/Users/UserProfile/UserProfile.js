import React, { Fragment, useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";

import { Auth } from "../../../controllers/auth.js";
import { getUser } from "../../../redux/actions/userAction.js";

import MoviesView from "./moviesView.js";
import axios from "axios";

const UserProfile = () => {
  const auth = Auth();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, moviesCount } = useSelector((state) => state.userDetails);
  const [movies] = useState(user.movies);

  const [passwordError, setPasswordError] = useState("");
  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .put(
        `/api/user/${id}`,
        {
          firstName: data.firstName,
          lastName: data.lastName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    axios
      .put(
        `/api/user/password/${id}`,
        {
          oldPassword: data.oldPassword,
          newPassword: data.newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setPasswordError(res.data.message);
      })
      .catch((err) => {
        setPasswordError(err.response.data.message);
      });
  }

  return (
    <Fragment>
      {auth ? (
        <Fragment>
          <section className="my-5">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                  <div className="row">
                    <div className="col-12 col-md-3 mx-auto mb-5 mb-md-0">
                      <div className="card border-0 shadow-sm rounded-15">
                        <div className="card-body">
                          <div className="d-flex justify-content-center align-items-center mb-3">
                            <img
                              loading="eager"
                              className="img-fluid"
                              src="/images/profile.png"
                              width="100"
                              height="100"
                              alt="Profile"
                              title="Profile"
                            />
                          </div>
                          <div className="d-flex align-items-start justify-content-start flex-column">
                            <button
                              className="text-decoration-none btn btn-sm btn-light mb-3 w-100"
                              id="detailsTab"
                              onClick={() => {
                                document
                                  .querySelectorAll(".tab-pane")
                                  .forEach((el) => el.classList.add("d-none"));
                                document
                                  .querySelector("#detailsView")
                                  .classList.remove("d-none");
                              }}
                            >
                              Details
                            </button>
                            <button
                              className="text-decoration-none btn btn-sm btn-light mb-3 w-100"
                              id="moviesTab"
                              onClick={() => {
                                document
                                  .querySelectorAll(".tab-pane")
                                  .forEach((el) => el.classList.add("d-none"));
                                document
                                  .querySelector("#moviesView")
                                  .classList.remove("d-none");
                              }}
                            >
                              Movies
                            </button>
                            <button
                              className="text-decoration-none btn btn-sm btn-light mb-3 w-100"
                              id="passwordTab"
                              onClick={() => {
                                document
                                  .querySelectorAll(".tab-pane")
                                  .forEach((el) => el.classList.add("d-none"));
                                document
                                  .querySelector("#passwordView")
                                  .classList.remove("d-none");
                              }}
                            >
                              Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-9 mx-auto">
                      <div id="detailsView" className="tab-pane">
                        <h3 className="text-start mb-0">Profile</h3>
                        <p
                          className="text-muted mb-3"
                          style={{ fontSize: "small" }}
                        >
                          View and Update your details.
                        </p>
                        <form className="mb-4" onSubmit={handleFormSubmit}>
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
                                  defaultValue={user.firstName}
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
                                  defaultValue={user.lastName}
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
                              defaultValue={user.email}
                              readOnly
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary rounded border-0 shadow w-100"
                          >
                            Update
                          </button>
                        </form>
                      </div>
                      <div id="moviesView" className="d-none tab-pane">
                        <MoviesView movies={movies} moviesCount={moviesCount} />
                      </div>
                      <div id="passwordView" className="d-none tab-pane">
                        <h3 className="text-start mb-0">Password</h3>
                        <p
                          className="text-muted mb-3"
                          style={{ fontSize: "small" }}
                        >
                          Update your password.
                        </p>
                        <form className="mb-4" onSubmit={handlePasswordSubmit}>
                          <div className="form-group mb-3">
                            <label htmlFor="oldPassword">Old Password</label>
                            <input
                              type="password"
                              className="form-control mb-3"
                              id="oldPassword"
                              name="oldPassword"
                              placeholder="Enter Old Password"
                              required
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="newPassword">New Password</label>
                            <input
                              type="password"
                              className="form-control mb-3"
                              id="newPassword"
                              name="newPassword"
                              placeholder="Enter New Password"
                              required
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="confirmPassword">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              className="form-control mb-3"
                              id="confirmPassword"
                              name="confirmPassword"
                              placeholder="Enter Confirm Password"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary rounded border-0 shadow w-100"
                            {...(passwordError ? { disabled: true } : {})}
                          >
                            {passwordError ? passwordError : "Update"}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      ) : (
        <Navigate to="/auth/signin" />
      )}
    </Fragment>
  );
};

export default UserProfile;
