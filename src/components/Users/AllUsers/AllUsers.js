import React, { Fragment, useState, useEffect, useCallback } from "react";
import axios from "axios";
// import { Navigate } from "react-router-dom";

import { Auth } from "../../../controllers/auth.js";
import API_URL from "../../../helpers/ApiUrl.js";

import Error from "../../Error/Error.js";
import Metadata from "../../Metadata/Metadata.js";

const AllUsers = () => {
  const [auth, setAuth] = useState(Auth());
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/api/all-users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      setAuth(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`/account/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Metadata title="All Users" />
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
        <Error />
      )}
    </Fragment>
  );
};

export { AllUsers };
