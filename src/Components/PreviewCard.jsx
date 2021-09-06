import React from "react";
import { Card, Button } from 'react-bootstrap';


function PreviewCard(props) {

    return (
        <div className="preview-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.url} />
                    <Card.Body>
                    <Card.Title>{props.firstName} {props.middleName} {props.lastName} </Card.Title>
                    <Card.Text>{props.location} || {props.title}</Card.Text>
                    <Button variant="primary">User Profile</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PreviewCard;
