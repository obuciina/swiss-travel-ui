import { Component, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class Duration extends Component {
    constructor(props) {
        super(props);
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeDestination = this.onChangeDestination.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            start: '',
            destination: '',
            duration: ''
        }

    }
    onChangeStart(e){
        this.setState({
            start: e.target.value
        })
    }

    onChangeDestination(e){
        this.setState({
            destination: e.target.value
        })
    }

    onSubmit= async (e) =>{
        e.preventDefault();
        console.log(this.state);
        const connection = {
            start: this.state.start,
            destination: this.state.destination
        }
        //let res = await axios.get(`http://localhost:8080/api/v1/connections/${connection.start}/${connection.destination}`);
        const res = await axios.get(`http://localhost:8080/api/v1/connections/${connection.start}/${connection.destination}`);
        console.log(res.data.duration)
            this.setState({
            duration: res.data.duration
           })
    }

    render() {
        return (
            <Container className='col-md-12 text-center'>
                <span className='display-1 d-block'>Time Duration</span>
                <br />
                <Form onSubmit={(e)=>this.onSubmit(e)}>
                    <Form.Group className="mb-3" controlId="from">
                        <Form.Label>Start station</Form.Label>
                        <Form.Control onChange={(e) => this.onChangeStart(e)}  type="text" placeholder="Enter start location" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="to">
                        <Form.Label>Destionation</Form.Label>
                        <Form.Control onChange={(e) => this.onChangeDestination(e)}  type="text" placeholder="Enter final destination" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Show average duration
                    </Button>
                </Form>
                <p>{this.state.duration ? (this.state.duration.days+ " " + this.state.duration.hours) : ''}</p>
            </Container>
        )
    }
}

export default Duration;