import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <main>Weather Now</main>
    </Router>
  );
};

export default App;
