import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Purchase/Purchase";
import About from "../Customer/Customer";
import Contact from "../Customer/Customer";
import NotFound from "../util/NotFoundPage";
import Navbar from "./Navbar"; // Import the Navbar component here

const AppRouter = () => {
  return (
    <Router>
      {/* Place the Navbar component here, inside the Router */}
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
