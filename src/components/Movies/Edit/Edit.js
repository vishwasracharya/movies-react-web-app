import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../../../redux/actions/movieAction.js";

export const Edit = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movieDetails);

  const title = useRef();
  const description = useRef();
  const director = useRef();
  const genre = useRef();
  const rating = useRef();
  const image = useRef();
  const year = useRef();
  const price = useRef();
  const quantity = useRef();

  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  // after submit button is clicked this function will be called and it will update the movie details
  const updateMovie = useCallback(async () => {
    axios
      .post(
        `/api/edit-movie/${id}`,
        {
          title: title.current.value,
          description: description.current.value,
          director: director.current.value,
          genre: genre.current.value,
          rating: rating.current.value,
          image: image.current.value,
          year: year.current.value,
          price: price.current.value,
          quantity: quantity.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("Movie updated successfully");
          // window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setIsUpdated(true);
  }, [
    id,
    title,
    description,
    director,
    genre,
    rating,
    image,
    year,
    price,
    quantity,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie();
  };

  return (
    <Fragment>
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
            <div className="col-12 col-md-8 mx-auto mb-3 mb-md-0">
              <form
                action={`/api/edit-movie/${id}`}
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
                        defaultValue={movie.title}
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
                        defaultValue={movie.rating}
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
                    defaultValue={movie.genre}
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
                        defaultValue={movie.director}
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
                        defaultValue={movie.year}
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
                    defaultValue={movie.image}
                    ref={image}
                    onKeyUp={useCallback(() => {
                      document.getElementById("movieImage").src =
                        image.current.value;
                    }, [image])}
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
                    required
                    defaultValue={movie.description}
                    ref={description}
                  ></textarea>
                </div>
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
                          defaultValue={movie.price}
                          ref={price}
                          {...(user && user.isAdmin ? {} : { disabled: true })}
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
                          defaultValue={movie.quantity}
                          ref={quantity}
                          {...(user && user.isAdmin ? {} : { disabled: true })}
                        />
                      </div>
                    </div>
                  </div>
                </Fragment>
                <button
                  type="submit"
                  className="btn btn-warning rounded border-0 shadow lh-1"
                  {...(isUpdated ? { disabled: true } : {})}
                >
                  {isUpdated ? "Updated" : "Update"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
