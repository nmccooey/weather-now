import React from "react";
import { Jumbotron, Container, Card, CardGroup } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Jumbotron className="mt-4">
        <Container>
          <h1>Your 3 Day Forecast</h1>
          <p>Showing current weather conditions wherever you are.</p>
        </Container>
      </Jumbotron>
      <Container>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="img/mostly-cloudy.png" />
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
            <Card.Img variant="top" src="img/mostly-cloudy.png" />
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
            <Card.Img variant="top" src="img/mostly-cloudy.png" />
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
        </CardGroup>
      </Container>
    </>
  );
};

export default Home;
