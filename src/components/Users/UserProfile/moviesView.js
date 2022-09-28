import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const moviesView = ({ movies, moviesCount }) => {
  return (
    <Fragment>
      <div>
        <h3 className="text-start mb-0">Movies</h3>
        <p className="text-muted mb-3" style={{ fontSize: "small" }}>
          List of all your rented movies.
        </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                #
              </th>
              <th scope="col" className="text-center">
                Image
              </th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col" className="text-center">
                Genre
              </th>
              <th scope="col" className="text-center">
                Year
              </th>
              <th scope="col" className="text-center">
                Created At
              </th>
              <th scope="col" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          {moviesCount > 0 && movies !== undefined ? (
            movies.map((movie, index) => (
              <tbody key={movie._id}>
                <tr>
                  <th scope="row" className="text-center">
                    {index + 1}
                  </th>
                  <td className="text-center">
                    <img src={movie.image} alt={movie.title} width="30" />
                  </td>
                  <td className="text-start" style={{ fontSize: "small" }}>
                    {movie.title}
                  </td>
                  <td className="text-center" style={{ fontSize: "small" }}>
                    {movie.genre}
                  </td>
                  <td className="text-center" style={{ fontSize: "small" }}>
                    {movie.year}
                  </td>
                  <td className="text-center" style={{ fontSize: "small" }}>
                    {movie.created_at.split("T")[0]}
                  </td>
                  <td className="text-center">
                    <Link
                      to={`/movie/${movie._id}`}
                      className="btn btn-sm btn-dark lh-1"
                      style={{ fontSize: "small" }}
                    >
                      GO
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td className="text-center" colSpan="7">
                  No movies rented yet.
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </Fragment>
  );
};

export default moviesView;
