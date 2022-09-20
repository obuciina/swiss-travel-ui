import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Container className='col-md-12 text-center'>
            <span className='display-1 d-block'>About</span>
            <div className='mb-4 lead'>Simple tool that would accept 2 locations and return the amount of time required to go between them using Swiss public transport.</div>
            <Link to="/duration" className='text-decoration-none btn btn-success'>
                Go to Solution
            </Link>
        </Container>
    );
};

export default About;