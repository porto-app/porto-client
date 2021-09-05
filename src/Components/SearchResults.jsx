import React, { useEffect, useContext } from 'react';
import { DataContext } from './DataContext'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

function SearchResults() {

    // AZ: Similar to useState, but the state is defined in App and stored in useContext
    const { setProfiles } = useContext(DataContext);

    useEffect(() => {
        getAllProfiles()
    }, [])

    const getAllProfiles = async () => {
        console.log("Attempting to retrieve all profiles...")

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `https://deployed-heroku-api.com/profiles`
                    : `http://localhost:4000/profiles`

            const allProfiles = await axios(url)
            setProfiles(allProfiles.data)
        } catch (error) {
            console.warn("API call isn't fully set up yet.")
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                    <Card.Title>Andy Zhong</Card.Title>
                    <Card.Text>Boston || Software Engineer</Card.Text>
                    <Button variant="primary">User Profile</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                        <Card.Title>Kimberly Kruedelbach</Card.Title>
                        <Card.Text>New York || Software Engineer</Card.Text>
                        <Button variant="primary">User Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                        <Card.Title>Lawrence Hau</Card.Title>
                        <Card.Text>New York || Software Engineer</Card.Text>
                        <Button variant="primary">User Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                        <Card.Title>Roxie Schnoor</Card.Title>
                        <Card.Text>California || Software Engineer</Card.Text>
                        <Button variant="primary">User Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                        <Card.Title>Zachary Rehbein</Card.Title>
                        <Card.Text>Arizona || Software Engineer</Card.Text>
                        <Button variant="primary">User Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                    <Card.Title>Random Man</Card.Title>
                    <Card.Text>Kansas || Software Engineer</Card.Text>
                    <Button variant="primary">User Profile</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchResults;
