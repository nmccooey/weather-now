import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-2">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
