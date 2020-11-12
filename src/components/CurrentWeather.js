import React from "react";
import { Card } from "react-bootstrap";

const CurrentWeather = () => {
  return (
    <>
      <Card className="p-2 my-4" style={{ width: "18rem" }}>
        <Card.Img className="py-4" variant="top" src="img/mostly-cloudy.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CurrentWeather;
