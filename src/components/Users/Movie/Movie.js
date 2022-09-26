import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const Movie = ({ movie, isRented }) => {
  const { movies } = useSelector((state) => state.movies);
  const handleReturn = (e) => {
    e.preventDefault();
    console.log("Return");
    axios
      .post(`/api/return-movie/${movie._id}/${movies._id}`, {})
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
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
        {isRented ? (
          <button
            className="btn btn-primary rounded border-0 shadow lh-1"
            onClick={handleReturn}
          >
            Return
          </button>
        ) : (
          <Link
            to={`/movie/${movie._id}`}
            className="btn btn-primary rounded border-0 shadow lh-1"
          >
            View
          </Link>
        )}
      </div>
    </div>
  );
};

export default Movie;
