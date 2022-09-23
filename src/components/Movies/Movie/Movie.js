import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Link
      key={movie._id}
      className="text-decoration-none"
      to={`/movie/${movie._id}`}
    >
      <div className="border-0 rounded-15 card-hover-img">
        <div className="p-1 d-flex align-items-center justify-content-center">
          <img
            src={movie.image}
            className="img-fluid rounded-15 movie-img"
            alt={movie.title}
            title={movie.title}
          />
        </div>
        <div className="p-3">
          <h5 className="text-dark">{movie.title}</h5>
          <p className="desc fs-smaller text-dark">{movie.description}</p>
          <Link
            to={`/movie/${movie._id}`}
            className="btn btn-primary rounded border-0 shadow lh-1"
          >
            View
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
