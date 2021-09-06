import React from "react";
import { Button, Form, Container } from 'react-bootstrap'


function CreateProfile() {

    return (
        <div className="create-profile">
            <h3 className="create-profile-title">Create a New Profile!</h3>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupMiddleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupProfilePic">
                        <Form.Label>Profile Pic URL</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP1Name">
                        <Form.Label>Project 1 - Name</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP1Desc">
                        <Form.Label>Project 1 - Description</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP1Url">
                        <Form.Label>Project 1 - URL</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP1Image">
                        <Form.Label>Project 1 - Image URL</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default CreateProfile;
