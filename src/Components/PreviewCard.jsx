import React from "react";
import { Card, Button } from 'react-bootstrap';


function PreviewCard({ name, title, location, url }) {

    return (
        <div className="preview-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{location} || {title}</Card.Text>
                    <Button variant="primary">User Profile</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PreviewCard;
