import React from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";

const Product = ({ product, buy }) => {
  // let new_prod = Object.assign({}, product);
  // const { id, price, name, description, sold, location, image, owner } =
  // new_prod._product;
  const { id, price, name, description, sold, location, image, owner } =
  product;
    console.log(name);

    // console.log(product);

    // console.log("This is the id: ")
    // console.log(product.id)
  const triggerBuy = () => {
    buy(id, price);
  };

  return (
    <Col key={id}>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="font-monospace text-secondary">{owner}</span>
            <Badge bg="secondary" className="ms-auto">
              {sold} Sold
            </Badge>
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={image} alt={name} style={{ objectFit: "cover" }} />
        </div>
        <Card.Body className="d-flex  flex-column text-center">
          { <Card.Title>{name}</Card.Title> }
          <Card.Text className="flex-grow-1 ">{description}</Card.Text>
          <Card.Text className="text-secondary">
            <span>{location}</span>
          </Card.Text>
          <Button
            variant="outline-dark"
            onClick={triggerBuy}
            className="w-100 py-3"
          >
           Buy for { Number(price)/1000000000000000000000000 } NEAR
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  buy: PropTypes.func.isRequired,
};

export default Product;