import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import API_URL from "../../../helpers/ApiUrl.js";

const Movie = ({ movie, isRented, moviesCount, user }) => {
  const [movieLengthState, setMovieLengthState] = useState(moviesCount);
  const returnMovie = useCallback(async () => {
    try {
      await axios.post(`${API_URL}/api/return-movie/${movie._id}/${user._id}`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMovieLengthState(movieLengthState - 1);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }, [movie._id, user._id, movieLengthState]);

  const handleReturn = (e) => {
    e.preventDefault();
    returnMovie();
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
