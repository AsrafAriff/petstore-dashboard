import React from "react";
import Navbar from "./components/util/Navbar";
import AppRouter from "./components/util/Router";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Your App Content</h1>
      <AppRouter></AppRouter>
    </div>
  );
};

export default App;
