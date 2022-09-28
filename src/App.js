import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Error from "./components/Error/Error.js";
// import Header from "./components/Header/Header.js";
// import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home.js";
// import Signup from "./components/Auth/Signup.js";
// import Signin from "./components/Auth/Signin.js";
// import Signout from "./components/Auth/Signout.js";
// import Loader from "./components/Loader/Loader.js";
// import MovieDetails from "./components/Movies/MovieDetails/MovieDetails.js";
// import { Add as MovieAdd } from "./components/Movies/Add/Add.js";
// import { Edit as MovieEdit } from "./components/Movies/Edit/Edit.js";
// import { Rent as MovieRent } from "./components/Movies/Rent/Rent.js";
// import { UserDetails } from "./components/Users/UserDetails/UserDetails.js";
// import { AllUsers } from "./components/Users/AllUsers/AllUsers.js";
// import UserProfile from "./components/Users/UserProfile/UserProfile.js";
// import { Test } from "./components/Test.js";
// import Random from "./components/Random/Random.js";

// const Footer = React.lazy(() => import("./components/Footer/Footer"));
const Header = React.lazy(() => import("./components/Header/Header.js"));
const Home = React.lazy(() => import("./components/Home/Home.js"));
const Signup = React.lazy(() => import("./components/Auth/Signup.js"));
const Signin = React.lazy(() => import("./components/Auth/Signin.js"));
const Signout = React.lazy(() => import("./components/Auth/Signout.js"));
const Loader = React.lazy(() => import("./components/Loader/Loader.js"));
const Test = React.lazy(() => import("./components/Test.js"));
const Random = React.lazy(() => import("./components/Random/Random.js"));
const Error = React.lazy(() => import("./components/Error/Error.js"));

const MovieDetails = React.lazy(() =>
  import("./components/Movies/MovieDetails/MovieDetails.js")
);
const MovieAdd = React.lazy(() =>
  import("./components/Movies/Add/Add.js").then((module) => ({
    default: module.Add,
  }))
);
const MovieEdit = React.lazy(() =>
  import("./components/Movies/Edit/Edit.js").then((module) => ({
    default: module.Edit,
  }))
);
const MovieRent = React.lazy(() =>
  import("./components/Movies/Rent/Rent.js").then((module) => ({
    default: module.Rent,
  }))
);

const UserDetails = React.lazy(() =>
  import("./components/Users/UserDetails/UserDetails.js").then((module) => ({
    default: module.UserDetails,
  }))
);
const AllUsers = React.lazy(() =>
  import("./components/Users/AllUsers/AllUsers.js").then((module) => ({
    default: module.AllUsers,
  }))
);
const UserProfile = React.lazy(() =>
  import("./components/Users/UserProfile/UserProfile.js")
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signout" element={<Signout />} />

          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />

          <Route path="/movies/add" element={<MovieAdd />} />
          <Route path="/movies/edit/:id" element={<MovieEdit />} />
          <Route path="/movies/rent/:id" element={<MovieRent />} />

          <Route path="/account/:id" element={<UserDetails />} />
          <Route path="/account/users" element={<AllUsers />} />
          <Route path="/account/profile/:id" element={<UserProfile />} />

          <Route path="/test" element={<Test />} />
          <Route path="/random" element={<Random />} />

          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </Suspense>
    </Router>
  );
}

export default App;
