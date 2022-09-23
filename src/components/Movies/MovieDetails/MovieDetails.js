import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { getMovieDetails } from "../../../redux/actions/movieAction.js";

const MovieDetails = () => {
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
              {/* <button
                    className="btn btn-danger rounded border-0 shadow lh-1 mx-2"
                    onclick="handleDeleteMovie(event)"
                  >
                    Delete
                  </button> */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MovieDetails;
