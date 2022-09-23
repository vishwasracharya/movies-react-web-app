import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../../../redux/actions/movieAction.js";

export const Edit = () => {
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
            <div class="col-12 col-md-8 mx-auto mb-3 mb-md-0">
              <form
                action="<%=site_url%>/api/edit-movie/<%=movie._id%>"
                method="POST"
              >
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                      <label for="title">Title</label>
                      <input
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"
                        placeholder="Enter title"
                        value={movie.title}
                        required
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <label for="rating">Rating</label>
                      <input
                        type="number"
                        class="form-control"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        placeholder="Enter rating (1-5)"
                        value={movie.rating}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <label for="genre">Genre</label>
                  <input
                    type="text"
                    class="form-control"
                    id="genre"
                    name="genre"
                    placeholder="Enter genre"
                    value={movie.genre}
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                      <label for="director">Director</label>
                      <input
                        type="text"
                        class="form-control"
                        id="director"
                        name="director"
                        placeholder="Enter Director"
                        value={movie.director}
                        required
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <label for="year">Year</label>
                      <input
                        type="number"
                        class="form-control"
                        id="year"
                        name="year"
                        placeholder="Enter Year (2022)"
                        value={movie.year}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <label for="image">Image Link</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    name="image"
                    placeholder="Paste Image Link here"
                    value={movie.image}
                    onkeyup="updateImageView(event)"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="description">description</label>
                  <textarea
                    class="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    placeholder="Description Here"
                    style={{ resize: "none" }}
                    required
                  >
                    {movie.description}
                  </textarea>
                </div>
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                      <label for="price">Price</label>
                      <input
                        type="number"
                        class="form-control"
                        id="price"
                        name="price"
                        placeholder="Enter Price"
                        value={movie.price}
                        required
                      />
                    </div>
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                      <label for="quantity">Quantity</label>
                      <input
                        type="number"
                        class="form-control"
                        id="quantity"
                        name="quantity"
                        placeholder="Enter Quantity"
                        value={movie.quantity}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-warning rounded border-0 shadow lh-1"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
