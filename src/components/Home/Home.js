import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../../redux/actions/movieAction.js";

import Movie from "../Movies/Movie/Movie.js";
import Metadata from "../Metadata/Metadata.js";
import Loader from "../Loader/Loader.js";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, movies } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Home | Vishwas Acharya" />
          {movies.length > 0 ? (
            <section className="my-5">
              <div className="container">
                <div className="row">
                  {movies &&
                    movies.map((movie) => (
                      <div
                        key={movie._id}
                        className="col-12 col-md-6 col-lg-3 mb-4 mx-auto mx-md-0"
                      >
                        <Movie movie={movie} />
                      </div>
                    ))}
                </div>
              </div>
            </section>
          ) : (
            <section className="my-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-5 mx-auto text-center">
                    <h1>No Movies Available</h1>
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <img
                        loading="eager"
                        className="mb-3"
                        src="/images/logo.png"
                        width="200"
                        height="200"
                        alt="Logo"
                        title="Logo"
                      />
                      <Link
                        to={"/movies/add"}
                        className="mb-3 btn btn-dark lh-1 shadow border-0"
                      >
                        Go To Add Movie
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;