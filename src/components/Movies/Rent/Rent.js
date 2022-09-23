import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../../../redux/actions/movieAction.js";

export const Rent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movieDetails);
  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <section class="my-5">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-3 mx-auto mb-3 mb-md-0">
              <img
                class="img-fluid rounded-15 shadow"
                id="movieImage"
                src={movie.image}
                alt={movie.title}
                title={movie.title}
              />
            </div>
            <div class="col-12 col-md-9 mx-auto mb-3 mb-md-0">
              <h1 class="text-dark mb-3">{movie.title}</h1>
              <p class="fs-6 text-muted mb-2">
                <strong>Rate:</strong> ${movie.price}/m{" "}
              </p>
              <p class="fs-6 text-muted mb-2">
                <strong>Available Quantity:</strong> {movie.quantity}
              </p>
              <button
                class="btn btn-info rounded border-0 shadow lh-1"
                onclick="handleRentMovie(event)"
              >
                Get Movie
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
