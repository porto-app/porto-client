import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal, Form, Card, Placeholder } from 'react-bootstrap';
import { DataContext } from './DataContext';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Profile(props) {

    const { currentProfileId, activeProfile, setActiveProfile } = useContext(DataContext);

    // Modal Commands
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getOneProfile()
    }, [show])

    const getOneProfile = async () => {
        console.log("Attempting to retrieve one profile...")

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `http://porto-app-server.herokuapp.com/profiles/${currentProfileId}`
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
                    ? `http://porto-app-server.herokuapp.com/profiles/${currentProfileId}`
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
        let emailEdited = document.querySelector(".emailEdit").value
        let resumeEdited = document.querySelector(".resumeEdit").value

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `http://porto-app-server.herokuapp.com/profiles/${currentProfileId}`
                    : `http://localhost:5000/profiles/${currentProfileId}`

            axios.put(url, {
                firstName: firstNameEdited,
                middleName: middleNameEdited,
                lastName: lastNameEdited,
                email: emailEdited,
                urlResume: resumeEdited
            });
            console.log("Edit successful!");
        } catch (error) {
            console.warn("Error when editing one profile.")
        }
    }


    return (
        <div className="profile-page">
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
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="emailEdit"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupResume">
                        <Form.Label>Resume</Form.Label>
                        <Form.Control className="resumeEdit"/>
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
                <img className="pic" src={activeProfile.urlPic} alt="" />
                <h2>
                    <div className="name">Name: {activeProfile.firstName} {activeProfile.middleName} {activeProfile.lastName}</div>
                    <div className="title">Title: {activeProfile.title}</div>
                    <div className="location">Location: {activeProfile.location}</div>
                    <button className="contactButton">
                        <a class="mailto" href={'mailto:' + activeProfile.email}>Contact</a>
                    </button>
                    <button className="resumeButton">
                        <a class="Resume" target="_blank" rel="noreferrer" href={activeProfile.urlResume}>Resume</a>
                    </button>
                </h2>
            </div>

            <div className="projectsCard">
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={activeProfile.Project1Img} />
                    <Card.Body>
                        <Card.Title>{activeProfile.Project1Name}</Card.Title>
                        <Card.Text>{activeProfile.Project1Description}</Card.Text>
                        <a href={activeProfile.Project1URL}>
                            <Button variant="primary">Click here</Button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

            <div className="projectsCard">
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={activeProfile.Project2Img} />
                    <Card.Body>
                        <Card.Title>{activeProfile.Project2Name}</Card.Title>
                        <Card.Text>{activeProfile.Project2Description}</Card.Text>
                        <a href={activeProfile.Project2URL}>
                            <Button variant="primary">Click here</Button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

            <div className="projectsCard">
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={activeProfile.Project3Img} />
                    <Card.Body>
                        <Card.Title>{activeProfile.Project3Name}</Card.Title>
                        <Card.Text>{activeProfile.Project3Description}</Card.Text>
                        <a href={activeProfile.Project3URL}>
                            <Button variant="primary">Click here</Button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

            <div className="projectsCard">
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={activeProfile.Project4Img} />
                    <Card.Body>
                        <Card.Title>{activeProfile.Project4Name}</Card.Title>
                        <Card.Text>{activeProfile.Project4Description}</Card.Text>
                        <a href={activeProfile.Project4URL}>
                            <Button variant="primary">Click here</Button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

            <Button className="editButton" onClick={handleShow}>Edit Profile</Button>
            <Link to={`/searchresults`} key={props.id}>
                <Button className="deleteButton" onClick={handleDelete}>Delete Profile</Button>
            </Link>

        </div>
  );
}

export default Profile;
