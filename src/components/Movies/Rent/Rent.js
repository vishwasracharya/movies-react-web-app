import React, { Fragment, useEffect, useState, useCallback } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../../../redux/actions/movieAction.js";
import { getUserDetails } from "../../../redux/actions/movieAction.js";
import Metadata from "../../Metadata/Metadata.js";
import API_URL from "../../../helpers/ApiUrl.js";

export const Rent = () => {
  const [rented, setRented] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movieDetails);

  const rentMovie = useCallback(async () => {
    try {
      await axios.post(`${API_URL}/api/rent-movie/${id}/${user._id}`, {}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setRented(true);
    } catch (error) {
      console.log(error);
    }
  }, [id, user._id, token]);

  useEffect(() => {
    dispatch(getMovieDetails(id));
    dispatch(getUserDetails(user._id));
  }, [dispatch, id, user._id]);

  const handleRentMovie = (e) => {
    e.preventDefault();
    rentMovie();
  };

  return (
    <Fragment>
      <Metadata title="Rent Movie" />
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mx-auto mb-3 mb-md-0">
              <img
                className="img-fluid rounded-15 shadow"
                id="movieImage"
                src={movie.image}
                alt={movie.title}
                title={movie.title}
              />
            </div>
            <div className="col-12 col-md-9 mx-auto mb-3 mb-md-0">
              <h1 className="text-dark mb-3">{movie.title}</h1>
              <p className="fs-6 text-muted mb-2">
                <strong>Rate:</strong> ${movie.price}/m{" "}
              </p>
              <p className="fs-6 text-muted mb-2">
                <strong>Available Quantity:</strong> {movie.quantity}
              </p>
              <button
                className="btn btn-info rounded border-0 shadow lh-1"
                onClick={handleRentMovie}
                {...(movie.quantity <= 0 ? { disabled: true } : {})}
                {...(rented ? { disabled: true } : {})}
              >
                {rented ? "Rented" : "Get Movie"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
