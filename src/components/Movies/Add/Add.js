import axios from "axios";
import React, { Fragment, useRef } from "react";
import { Navigate } from "react-router-dom";

import { Auth } from "../../../controllers/auth.js";
import Metadata from "../../Metadata/Metadata.js";
import API_URL from "../../../helpers/ApiUrl.js";


export const Add = () => {
  const auth = Auth();
  const user = JSON.parse(localStorage.getItem("user"));
  const title = useRef();
  const description = useRef();
  const director = useRef();
  const genre = useRef();
  const rating = useRef();
  const image = useRef();
  const year = useRef();
  let price = useRef();
  let quantity = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    let NewMovie = {
      title: title.current.value,
      description: description.current.value,
      director: director.current.value,
      genre: genre.current.value,
      rating: rating.current.value,
      image: image.current.value,
      year: year.current.value,
    };

    if (user.isAdmin) {
      NewMovie = {
        ...NewMovie,
        price: price.current.value,
        quantity: quantity.current.value,
      };
    }
    console.log(NewMovie);

    axios
      .post(`${API_URL}/api/add-movie`, NewMovie, {
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
      <Metadata title="Add Movie" />
      {auth ? (
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5 mx-auto">
                <h1 className="text-center">Add Movie</h1>
                <form
                  action="/api/add-movie"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group mb-3">
                    <div className="row">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          placeholder="Enter title"
                          ref={title}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="rating">Rating</label>
                        <input
                          type="number"
                          className="form-control"
                          id="rating"
                          name="rating"
                          min="1"
                          max="5"
                          placeholder="Enter rating (1-5)"
                          ref={rating}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="genre">Genre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="genre"
                      name="genre"
                      placeholder="Enter genre"
                      ref={genre}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <div className="row">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <label htmlFor="director">Director</label>
                        <input
                          type="text"
                          className="form-control"
                          id="director"
                          name="director"
                          placeholder="Enter Director"
                          ref={director}
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="year">Year</label>
                        <input
                          type="number"
                          className="form-control"
                          id="year"
                          name="year"
                          placeholder="Enter Year (2022)"
                          ref={year}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="image">Image Link</label>
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      name="image"
                      placeholder="Paste Image Link here"
                      ref={image}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="description">description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      placeholder="Description Here"
                      style={{ resize: "none" }}
                      ref={description}
                      required
                    ></textarea>
                  </div>
                  {user && user.isAdmin && (
                    <Fragment>
                      <div className="form-group mb-3">
                        <div className="row">
                          <div className="col-12 col-md-6 mb-3 mb-md-0">
                            <label htmlFor="price">Price</label>
                            <input
                              type="number"
                              className="form-control"
                              id="price"
                              name="price"
                              placeholder="Enter Price"
                              ref={price}
                              required
                            />
                          </div>
                          <div className="col-12 col-md-6 mb-3 mb-md-0">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                              type="number"
                              className="form-control"
                              id="quantity"
                              name="quantity"
                              placeholder="Enter Quantity"
                              ref={quantity}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary rounded border-0 shadow lh-1"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Navigate to="/auth/signin" />
      )}
    </Fragment>
  );
};
