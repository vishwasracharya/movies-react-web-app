import React, { Fragment } from "react";

export const RequiredErrorMsg = ({ errors, name }) => {
  return (
    <Fragment>
      {errors[name] && <p className="text-danger">This field is required</p>}
    </Fragment>
  );
};
