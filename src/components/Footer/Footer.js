import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3 bg-light footer">
          <div className="d-flex align-items-center justify-content-center">
            <p className="my-2 text-muted" style={{ fontSize: "small" }}>
              <a
                className="my-2 text-muted text-decoration-none"
                style={{ fontSize: "small" }}
                href="https://vishwasracharya.herokuapp.com"
                target="_blank"
                rel="noreferrer"
              >
                Vishwas Acharya
              </a>
              <span className="text-muted mx-1">&#8226;</span>
              <a
                className="my-2 text-muted text-decoration-none"
                style={{ fontSize: "small" }}
                href="https://www.buymeacoffee.com/vishwasacharya"
                target="_blank"
                rel="noreferrer"
              >
                Buy me a coffee
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
