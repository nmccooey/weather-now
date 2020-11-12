import React from "react";
import { Jumbotron, Container, Card, CardDeck } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Jumbotron className="mt-4">
        <Container>
          <h1>Your 3 Day Forecast</h1>
          <p>Showing current weather conditions wherever you are.</p>
        </Container>
      </Jumbotron>
      <Container className="d-flex flex-column align-items-center">
        <h2>Location:</h2>
        <input className="mx-2" placeholder="Boston, MA"></input>
        <CardDeck className="py-4">
          <Card>
            <Card.Img
              className="p-4"
              variant="top"
              src="img/mostly-cloudy.png"
            />
            <Card.Body>
              <Card.Title>Monday</Card.Title>
              <Card.Text>Mostly Cloudy</Card.Text>
              <Card.Text>
                Rain early...then remaining cloudy with showers overnight. Low
                61F. Winds SW at 5 to 10 mph. Chance of rain 100%. Rainfall near
                a quarter of an inch.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="p-4"
              variant="top"
              src="img/mostly-cloudy.png"
            />
            <Card.Body>
              <Card.Title>Tuesday</Card.Title>
              <Card.Text>Mostly Cloudy.</Card.Text>
              <Card.Text>
                Rain early...then remaining cloudy with showers overnight. Low
                61F. Winds SW at 5 to 10 mph. Chance of rain 100%. Rainfall near
                a quarter of an inch.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="p-4"
              variant="top"
              src="img/mostly-cloudy.png"
            />
            <Card.Body>
              <Card.Title>Wednesday</Card.Title>
              <Card.Text>Mostly Cloudy</Card.Text>
              <Card.Text>
                Rain early...then remaining cloudy with showers overnight. Low
                61F. Winds SW at 5 to 10 mph. Chance of rain 100%. Rainfall near
                a quarter of an inch.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
};

export default Home;
