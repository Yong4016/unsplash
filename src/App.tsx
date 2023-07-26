import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ImageDetails from "./pages/ImageDetails";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
        <Route
          path="/:id"
          element={<ImageDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
