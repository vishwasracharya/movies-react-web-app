import React from "react";

const Loader = () => {
  return (
    <div className="vertical-center d-flex align-items-center justify-content-center">
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
