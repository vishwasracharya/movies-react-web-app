import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import axios from "axios";

import { getMovieDetails } from "../../../redux/actions/movieAction.js";

const MovieDetails = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movieDetails);
  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  const options = {
    edit: false,
    color: "#ffd700",
    activeColor: "#ffd700",
    size: window.innerWidth < 768 ? 20 : 25,
    isHalf: true,
    value: movie.rating,
  };

  const handleDeleteMovie = (e) => {
    e.preventDefault();
    axios
      .delete(`/api/delete-movie/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mx-auto mb-3 mb-md-0">
              <img
                className="img-fluid rounded-15 shadow"
                src={movie.image}
                alt={movie.title}
                title={movie.title}
              />
            </div>
            <div className="col-12 col-md-9 mx-auto mb-3 mb-md-0">
              <h1 className="text-dark">{movie.title}</h1>
              <ReactStars {...options} />
              <p className="fs-6 text-muted mb-2">
                <strong>Genre:</strong> {movie.genre}
              </p>
              <p className="fs-6 text-muted mb-2">
                <strong>Director:</strong> {movie.director}
              </p>
              <p className="fs-6 text-muted mb-2">
                <strong>Year:</strong> {movie.year}
              </p>
              <p className="text-muted">{movie.description}</p>
              <Link
                to={`/movies/edit/${movie._id}`}
                className="btn btn-primary rounded border-0 shadow lh-1 me-2"
              >
                Edit
              </Link>
              <Link
                to={`/movies/rent/${movie._id}`}
                className="btn btn-dark rounded border-0 shadow lh-1 mx-2"
              >
                Rent
              </Link>
              {user.isAdmin && (
                <button
                  className="btn btn-danger rounded border-0 shadow lh-1 mx-2"
                  onClick={handleDeleteMovie}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MovieDetails;
