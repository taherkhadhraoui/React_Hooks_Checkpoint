import { Rating } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

const MoviesCard = ({ movieslistprops }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movieslistprops.image} />
        <Card.Body>
          <Card.Title>{movieslistprops.name}</Card.Title>
          <Card.Title>{movieslistprops.description}</Card.Title>
          <Rating value={movieslistprops.rating} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MoviesCard;
