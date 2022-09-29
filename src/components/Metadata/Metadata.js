import React from "react";
import { Helmet } from "react-helmet";

const Metadata = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="A React App which uses the existing api developed with nodejs." />
      <meta name="keywords" content="react, nodejs, api, authentication, authorization, jwt, cookies" />
      <meta name="author" content="Vishwas Acharya" />
    </Helmet>
  );
};

export default Metadata;
