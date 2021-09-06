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
    const [Project1Name, setProject1Name] = useState("")
    const [Project1Description, setProject1Description] = useState("")
    const [Project1URL, setProject1URL] = useState("")
    const [Project1Img, setProject1Img] = useState("")
    const [Project2Name, setProject2Name] = useState("")
    const [Project2Description, setProject2Description] = useState("")
    const [Project2URL, setProject2URL] = useState("")
    const [Project2Img, setProject2Img] = useState("")
    const [Project3Name, setProject3Name] = useState("")
    const [Project3Description, setProject3Description] = useState("")
    const [Project3URL, setProject3URL] = useState("")
    const [Project3Img, setProject3Img] = useState("")
    const [Project4Name, setProject4Name] = useState("")
    const [Project4Description, setProject4Description] = useState("")
    const [Project4URL, setProject4URL] = useState("")
    const [Project4Img, setProject4Img] = useState("")



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
            urlPic,
            Project1Name,
            Project1Description,
            Project1URL,
            Project1Img,
            Project2Name,
            Project2Description,
            Project2URL,
            Project2Img,
            Project3Name,
            Project3Description,
            Project3URL,
            Project3Img,
            Project4Name,
            Project4Description,
            Project4URL,
            Project4Img
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

    const storeProject1Name = (e) => {
        setProject1Name(e.target.value)
    }
    const storeProject1Description = (e) => {
        setProject1Description(e.target.value)
    }
    const storeProject1URL = (e) => {
        setProject1URL(e.target.value)
    }
    const storeProject1Img = (e) => {
        setProject1Img(e.target.value)
    }

    const storeProject2Name = (e) => {
        setProject2Name(e.target.value)
    }
    const storeProject2Description = (e) => {
        setProject2Description(e.target.value)
    }
    const storeProject2URL = (e) => {
        setProject2URL(e.target.value)
    }
    const storeProject2Img = (e) => {
        setProject2Img(e.target.value)
    }

    const storeProject3Name = (e) => {
        setProject3Name(e.target.value)
    }
    const storeProject3Description = (e) => {
        setProject3Description(e.target.value)
    }
    const storeProject3URL = (e) => {
        setProject3URL(e.target.value)
    }
    const storeProject3Img = (e) => {
        setProject3Img(e.target.value)
    }

    const storeProject4Name = (e) => {
        setProject4Name(e.target.value)
    }
    const storeProject4Description = (e) => {
        setProject4Description(e.target.value)
    }
    const storeProject4URL = (e) => {
        setProject4URL(e.target.value)
    }
    const storeProject4Img = (e) => {
        setProject4Img(e.target.value)
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
                        <Form.Control onChange={storeProject1Name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP1Desc">
                        <Form.Label>Project 1 - Description</Form.Label>
                        <Form.Control onChange={storeProject1Description} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP1Url">
                        <Form.Label>Project 1 - URL</Form.Label>
                        <Form.Control onChange={storeProject1URL} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP1Image">
                        <Form.Label>Project 1 - Image URL</Form.Label>
                        <Form.Control onChange={storeProject1Img} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP2Name">
                        <Form.Label>Project 2 - Name</Form.Label>
                        <Form.Control onChange={storeProject2Name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP2Desc">
                        <Form.Label>Project 2 - Description</Form.Label>
                        <Form.Control onChange={storeProject2Description} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP2Url">
                        <Form.Label>Project 2 - URL</Form.Label>
                        <Form.Control onChange={storeProject2URL} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP2Image">
                        <Form.Label>Project 2 - Image URL</Form.Label>
                        <Form.Control onChange={storeProject2Img} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP3Name">
                        <Form.Label>Project 3 - Name</Form.Label>
                        <Form.Control onChange={storeProject3Name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP3Desc">
                        <Form.Label>Project 3 - Description</Form.Label>
                        <Form.Control onChange={storeProject3Description} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP3Url">
                        <Form.Label>Project 3 - URL</Form.Label>
                        <Form.Control onChange={storeProject3URL} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP3Image">
                        <Form.Label>Project 3 - Image URL</Form.Label>
                        <Form.Control onChange={storeProject3Img} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP4Name">
                        <Form.Label>Project 4 - Name</Form.Label>
                        <Form.Control onChange={storeProject4Name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP4Desc">
                        <Form.Label>Project 4 - Description</Form.Label>
                        <Form.Control onChange={storeProject4Description} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP4Url">
                        <Form.Label>Project 4 - URL</Form.Label>
                        <Form.Control onChange={storeProject4URL} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP4Image">
                        <Form.Label>Project 4 - Image URL</Form.Label>
                        <Form.Control onChange={storeProject4Img} />
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
