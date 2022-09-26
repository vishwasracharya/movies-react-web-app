import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import { Auth } from "../../../controllers/auth.js";

const AllUsers = () => {
  const auth = Auth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/account/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteUser = (id) => {
    console.log(id);
    axios
      .delete(`/account/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      {auth ? (
        <Fragment>
          {users ? (
            <Fragment>
              <section className="my-5">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-9 mx-auto">
                      <h1 className="text-center mb-5">All Users</h1>
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col" className="text-center">
                              #
                            </th>
                            <th scope="col" className="text-center">
                              First Name
                            </th>
                            <th scope="col" className="text-center">
                              Last Name
                            </th>
                            <th scope="col" className="text-center">
                              Email
                            </th>
                            <th scope="col" className="text-center">
                              Created At
                            </th>
                            <th scope="col" className="text-center">
                              Movies Rented
                            </th>
                            <th scope="col" className="text-center">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        {users.map((user, index) => (
                          <tbody key={index}>
                            <tr>
                              <th className="text-center">{index + 1}</th>
                              <td className="text-center">{user.firstName}</td>
                              <td className="text-center">{user.lastName}</td>
                              <td className="text-center">{user.email}</td>
                              <td className="text-center">
                                {user.created_at.split("T")[0]}
                              </td>
                              <td className="text-center">
                                {user.movies.length}
                              </td>
                              <td className="text-center">
                                <button
                                  onClick={() => deleteUser(user._id)}
                                  className="btn btn-danger rounded border-0 shadow lh-1"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </Fragment>
          ) : (
            <Fragment>
              <section className="my-5">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                      <h1 className="text-center mb-5">No Users Available</h1>
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          loading="eager"
                          className="img-fluid"
                          src="/images/profile.png"
                          width="200"
                          height="200"
                          alt="Profile"
                          title="Profile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Navigate to="/auth/signin" />
      )}
    </Fragment>
  );
};

export { AllUsers };
