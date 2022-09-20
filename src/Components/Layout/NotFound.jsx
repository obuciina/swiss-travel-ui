import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="col-md-12 text-center">
      <span className="display-1 d-block">404</span>
      <div className="mb-4 lead">
        The page you are looking for was not found.
      </div>
      <Link to="/" className="text-decoration-none btn btn-primary">
        Back to Home
      </Link>
    </Container>
  );
};

export default NotFound;
