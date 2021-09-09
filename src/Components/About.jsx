import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

function About() {
    return (
        <section className="aboutPage">

            <Row className="aboutDescription">
                <Col sm={12}>
                    <div className="aboutUs">
                        <Card className="aboutUsCard">
                           <Card.Title className="aboutUsTitle">About Our App</Card.Title>
                           <Card.Text className="aboutUsText">
                           Porto was created with the idea that artists, creators, coders, and everyone with something to show should have an organized,
                           fun place to showcase their work. We took the attractiveness of social media and applied it to a real-world need! Now, you
                           can confidently show off your own portfolio by simply creating a profile and submitting the projects you're most proud of.
                           </Card.Text>
                        </Card>
                    </div>
                </Col>
            </Row>

            <div className="creators">
                <Row className="aboutAuthors">
                    <Col sm={12} md={3}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://ca.slack-edge.com/T0351JZQ0-U025GP50H0E-afb4522c2307-512" />
                        <Card.Body>
                            <Card.Title className="creatorName">Andy Zhong</Card.Title>
                            <a href="https://github.com/andyjzhong" target="_blank" rel="noreferrer"><Button variant="primary" className="githubButton">Github</Button></a>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={3}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://ca.slack-edge.com/T0351JZQ0-U0270EWMBGA-2dba5aa36616-512" />
                        <Card.Body>
                            <Card.Title className="creatorName">Kimberly Kruedelbach</Card.Title>
                            <a href="https://github.com/Kimberlybree" target="_blank" rel="noreferrer"><Button variant="primary" className="githubButton">Github</Button></a>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={3}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://ca.slack-edge.com/T0351JZQ0-U027Q5TFQCQ-d8c023b30c40-512" />
                        <Card.Body>
                            <Card.Title className="creatorName">Lawrence Hau</Card.Title>
                            <a href="https://github.com/LawrenceHau" target="_blank" rel="noreferrer"><Button variant="primary" className="githubButton">Github</Button></a>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={3}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://ca.slack-edge.com/T0351JZQ0-U0270LX6L7M-eb9abb54944f-512" />
                        <Card.Body>
                            <Card.Title className="creatorName">Roxie Schnoor</Card.Title>
                            <a href="https://github.com/roxieetc" target="_blank" rel="noreferrer"><Button variant="primary" className="githubButton">Github</Button></a>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={3}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://i.imgur.com/SttwVPv.png" />
                        <Card.Body>
                            <Card.Title className="creatorName">Zak Rehbein</Card.Title>
                            <a href="https://github.com/zrehbein" target="_blank" rel="noreferrer"><Button variant="primary" className="githubButton">Github</Button></a>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default About;
