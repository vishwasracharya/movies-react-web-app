import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home.js";
import Signup from "./components/Auth/Signup.js";
import Signin from "./components/Auth/Signin.js";
import Error from "./components/Error/Error.js";
import MovieDetails from "./components/Movies/MovieDetails/MovieDetails.js";

import { Add as MovieAdd } from "./components/Movies/Add/Add.js";
import { Edit as MovieEdit } from "./components/Movies/Edit/Edit.js";
import { Rent as MovieRent } from "./components/Movies/Rent/Rent.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/signin" element={<Signin />} />
        
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        

        <Route path="/movies/add" element={<MovieAdd />} />
        <Route path="/movies/edit/:id" element={<MovieEdit />} />
        <Route path="/movies/rent/:id" element={<MovieRent />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
