import React, { Fragment } from "react";

export const RequiredErrorMsg = ({ errors, name }) => {
  return (
    <Fragment>
      {errors[name] && <p className="text-danger" style={{ fontSize: "small" }}>This field is required</p>}
    </Fragment>
  );
};
