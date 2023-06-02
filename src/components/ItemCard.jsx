import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemCard = ({ nombrePelicula, descripcionPelicula, generoPelicula }) => {
  return (
    <>
      <Card>
        <Card.Header>{nombrePelicula}</Card.Header>
        <Card.Body className="d-flex justify-content-center flex-column align-items-center">
          <div>{descripcionPelicula}</div>
          <Card.Title>{generoPelicula}</Card.Title>
          <Card.Text>{descripcionPelicula}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCard;
