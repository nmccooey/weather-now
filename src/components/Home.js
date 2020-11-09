import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Jumbotron className="mt-4">
      <Container>
        <h1>Weather Now</h1>
        <p>Showing current weather conditions wherever you are.</p>
      </Container>
    </Jumbotron>
  );
};

export default Home;
