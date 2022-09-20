import React, { useState } from "react";
import DurationService from "../Services/DurationService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

const Durations = () => {
  const [loading, setLoading] = useState(false);
  const [startStation, setStartStatio] = useState("");
  const [finalDestination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");

  const handleStartChange = ({ target }) => {
    const { value } = target;
    setStartStatio(value);
  };

  const clean = () => {
    setDuration("");
    setError("");
  };

  const handleDestinationChange = ({ target }) => {
    const { value } = target;
    setDestination(value);
  };

  const handleCalculateDuration = async (e) => {
    clean();
    e.preventDefault();
    setLoading(true);
    try {
      debugger;
      const response = await DurationService.getDuration(
        startStation,
        finalDestination
      );
      if (response) {
        setDuration(response.duration);
        setStartStatio(response.start);
        setDestination(response.destination);
      }
    } catch (err) {
      console.error(err);
      setError(err.response.data.message);
    }finally{
      setLoading(false);
    }
  };

  const formatDuration = (duration) => {
    let result = "";
    if (duration.days > 0) {
      result += `${duration.days} days `;
    }
    if (duration.hours > 0 ) {
      result += `${duration.hours} hours `;
    }
    if (duration.minutes > 0) {
      result += `${duration.minutes} minutes `;
    }
    if (duration.seconds > 0) {
      result += `${duration.seconds} seconds. `;
    }
    return result;
  };

  return (
    <Container className="col-md-12 text-center">
      <span className="display-1 d-block">Time Duration</span>
      <br />
      <Form onSubmit={handleCalculateDuration}>
        <Form.Group className="mb-3" controlId="from">
          <Form.Label>Start station</Form.Label>
          <Form.Control
            onChange={handleStartChange}
            value={startStation}
            type="text"
            placeholder="Enter start location"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="to">
          <Form.Label>Destionation</Form.Label>
          <Form.Control
            onChange={handleDestinationChange}
            type="text"
            value={finalDestination}
            placeholder="Enter final destination"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Show average duration
        </Button>
      </Form>
      <br/>
      <div>{loading ? <Spinner animation="grow" /> : ''}</div>
      <h4 text-primary>
        {duration ? `Average time duration is ${formatDuration(duration)}` : ""}
      </h4>
      <h4 className="text-danger">{error ? error : ""}</h4>
    </Container>
  );
};

export default Durations;
