import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap'
import axios from 'axios';


function CreateProfile() {

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [urlPic, setUrlPic] = useState("")

    const submitNewProfile = async (e) => {
        e.preventDefault();
        console.log("Attempting to submit new profile...")
        console.log("email", email);

        axios.post('http://localhost:5000/profiles', {
            email,
            firstName,
            middleName,
            lastName,
            title,
            location,
            urlPic
        })
        .then((res) => {
            console.log("Success!")
        })
        .catch(console.error)
    }

    const storeEmail = (e) => {
        setEmail(e.target.value)
    }

    const storeFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const storeMiddleName = (e) => {
        setMiddleName(e.target.value)
    }

    const storeLastName = (e) => {
        setLastName(e.target.value)
    }

    const storeTitle = (e) => {
        setTitle(e.target.value)
    }

    const storeLocation = (e) => {
        setLocation(e.target.value)
    }

    const storeUrlPic = (e) => {
        setUrlPic(e.target.value)
    }

    return (
        <div className="create-profile">
            <h3 className="create-profile-title">Create a New Profile!</h3>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={storeEmail}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onChange={storeFirstName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupMiddleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control onChange={storeMiddleName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onChange={storeLastName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={storeTitle}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control onChange={storeLocation}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupProfilePic">
                        <Form.Label>Profile Pic URL</Form.Label>
                        <Form.Control onChange={storeUrlPic}/>
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
                    <Link to='/searchResults'>
                        <Button variant="primary" type="submit" onClick={submitNewProfile}>Submit</Button>
                    </Link>
                </Form>
            </Container>
        </div>
    )
}

export default CreateProfile;
