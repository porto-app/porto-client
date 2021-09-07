import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal, Form, Card, Placeholder } from 'react-bootstrap';
import { DataContext } from './DataContext'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Profile(props) {

    const { currentProfileId, activeProfile, setActiveProfile } = useContext(DataContext);

    // Modal Commands
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


 
    console.log("currentProfile id is", currentProfileId);

    useEffect(() => {
        getOneProfile()
    }, [show])

    const getOneProfile = async () => {
        console.log("Attempting to retrieve one profile...")

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `https://deployed-heroku-api.com/profiles/${currentProfileId}`
                    : `http://localhost:5000/profiles/${currentProfileId}`

            const response = await axios(url)
            console.log("Response data: ", response);
            setActiveProfile(response.data)
        } catch (error) {
            console.warn("Error when retrieving one profiles.")
        }
    }

    const handleDelete = async () => {
        console.log("Attempting to delete one profile...")

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `https://deployed-heroku-api.com/profiles/${currentProfileId}`
                    : `http://localhost:5000/profiles/${currentProfileId}`

            axios.delete(url);
            console.log("Delete successful!");
        } catch (error) {
            console.warn("Error when deleting one profile.")
        }
    }

    const submitEdit = async () => {
        console.log("Attempting to edit one profile...")
        let firstNameEdited = document.querySelector(".firstNameEdit").value
        let middleNameEdited = document.querySelector(".middleNameEdit").value
        let lastNameEdited = document.querySelector(".lastNameEdit").value

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `https://deployed-heroku-api.com/profiles/${currentProfileId}`
                    : `http://localhost:5000/profiles/${currentProfileId}`

            axios.put(url, {
                firstName: firstNameEdited,
                middleName: middleNameEdited,
                lastName: lastNameEdited
            });
            console.log("Edit successful!");
        } catch (error) {
            console.warn("Error when editing one profile.")
        }
    }

    return (
        <div>
                
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formGroupFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control className="firstNameEdit"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupMiddleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control className="middleNameEdit"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control className="lastNameEdit"/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={() => {
                        submitEdit()
                        handleClose()
                        getOneProfile()
                    }}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <div className="myProfile">
            <img className="pic" src="https://user-images.githubusercontent.com/86509310/132135371-0e04c8fd-5780-4b8d-84f6-b6e8ffb12994.png" alt="" />

                <h2>
                    <div className="name">Name: {activeProfile.firstName} {activeProfile.middleName} {activeProfile.lastName}</div>
                    <div className="title">Title: {activeProfile.title}</div>
                    <div className="location">Location: {activeProfile.location}</div>
                </h2>
                </div>
            <div>
                <button className="contactButton">Contact</button>
                <button className="resumeButton">Resume </button>
            </div>

            <Button className="editButton" onClick={handleShow}>
                Edit Profile
            </Button>
            <Link to={`/searchresults`} key={props.id}>
                <Button className="deleteButton" onClick={handleDelete}>Delete Profile</Button>
            </Link>
            <div className="projectsCard">
                <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
        Here is an example of a project that I built using technologies: Javascript, HTML, CSS, React. 
            </Card.Text>
            <Button variant="primary">Click here</Button>
            </Card.Body>
        </Card>

        </div>
        <div className="projectsCard">
                <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
        Here is an example of a project that I built using technologies: Javascript, HTML, CSS, React. 
            </Card.Text>
            <Button variant="primary">Click here</Button>
            </Card.Body>
        </Card>
        </div>
        <div className="projectsCard">
                <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
        Here is an example of a project that I built using technologies: Javascript, HTML, CSS, React. 
            </Card.Text>
            <Button variant="primary">Click here</Button>
            </Card.Body>
        </Card>
        </div>
        <div className="projectsCard">
                <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Project 4</Card.Title>
                <Card.Text>
        Here is an example of a project that I built using technologies: Javascript, HTML, CSS, React. 
            </Card.Text>
            <Button variant="primary">Click here</Button>
            </Card.Body>
        </Card>
        </div>
       </div>
      
  );
}

export default Profile;
