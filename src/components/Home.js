import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import CurrentWeather from "./CurrentWeather";

const Home = () => {
  return (
    <>
      <Jumbotron className="mt-4">
        <Container>
          <h1>Weather Now</h1>
          <p>Showing current weather conditions wherever you are.</p>
        </Container>
      </Jumbotron>
      <Container className="d-flex flex-column align-items-center">
        <h2>Location:</h2>
        <input className="mx-2" placeholder="Boston, MA"></input>
        <CurrentWeather />
      </Container>
    </>
  );
};

export default Home;
