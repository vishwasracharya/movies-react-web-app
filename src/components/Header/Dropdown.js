import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { Auth } from "../../controllers/auth.js";

const Dropdown = ({ user }) => {
  const auth = Auth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

  return (
    <Fragment>
      {auth ? (
        <div className="dropdown" onClick={toggleOpen}>
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Hello {user.firstName}
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to={`/account/profile/${user._id}`}>
              Profile
            </Link>
            <Link className="dropdown-item" to={`/account/${user._id}`}>
              My Movies
            </Link>
            <Link className="dropdown-item" to={"/auth/SignOut"}>
              SignOut
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export { Dropdown };
