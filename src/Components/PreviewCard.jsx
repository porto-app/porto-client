import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


function PreviewCard(props) {
    console.log("props in Preview Card is", props);

    const [currentProfile, setCurrentProfile] = useState("");

    const handleViewProfile = () => {
        setCurrentProfile(props.id);
    }

    return (
        <div className="preview-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.url} />
                    <Card.Body>
                    <Card.Title>{props.firstName} {props.middleName} {props.lastName} </Card.Title>
                    <Card.Text>{props.location} || {props.title}</Card.Text>
                    <Link to={`/profile/${props.id}`} key={props.id}>
                        <Button variant="primary" onClick={handleViewProfile}>View Profile</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PreviewCard;
