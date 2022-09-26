import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3 bg-light footer">
          <div className="d-flex align-items-center justify-content-center">
            <p className="my-2 text-muted" style={{ fontSize: "small" }}>
              <Link
                className="my-2 text-muted text-decoration-none"
                style={{ fontSize: "small" }}
                to="/"
                target="_blank"
                rel="noreferrer"
              >
                Vishwas Acharya
              </Link>
              <span className="text-muted mx-1">&#8226;</span>
              <Link
                className="my-2 text-muted text-decoration-none"
                style={{ fontSize: "small" }}
                to="https://www.buymeacoffee.com/vishwasacharya"
                target="_blank"
                rel="noreferrer"
              >
                Buy me a coffee
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
