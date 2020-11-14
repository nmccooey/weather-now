import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import CurrentWeather from "./CurrentWeather";

const Home = () => {
  const [location, setLocation] = useState({
    lat: null,
    long: null,
  });

  useEffect(() => {
    // Update user location using location services.
    if (location.lat || location.long === null) {
      window.navigator.geolocation.getCurrentPosition((position) =>
        setLocation(
          ((location.lat = position.coords.latitude),
          (location.long = position.coords.longitude))
        )
      );
    }
  }, [location]);

  console.log(location);

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
