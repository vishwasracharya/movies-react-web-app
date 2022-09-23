import React from "react";

export const Add = () => {
  return (
    <>
      <section class="my-5">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-5 mx-auto">
              <h1 class="text-center">Add Movie</h1>
              <form action="<%=site_url%>/api/add-movie" method="POST">
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
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary rounded border-0 shadow lh-1"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
