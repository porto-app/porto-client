import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal, Form, Card } from 'react-bootstrap';
import { DataContext } from './DataContext';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Profile(props) {

    const { activeProfile, setActiveProfile } = useContext(DataContext);

    // Modal Commands
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // P1 Modal Commands
    const [p1show, setP1Show] = useState(false);
    const p1handleClose = () => setP1Show(false);
    const p1handleShow = (e) => {
        e.preventDefault();
        setP1Show(true)
    };
    // P2 Modal Commands
    const [p2show, setP2Show] = useState(false);
    const p2handleClose = () => setP2Show(false);
    const p2handleShow = (e) => {
        e.preventDefault();
        setP2Show(true)
    };
    // P3 Modal Commands
    const [p3show, setP3Show] = useState(false);
    const p3handleClose = () => setP3Show(false);
    const p3handleShow = (e) => {
        e.preventDefault();
        setP3Show(true)
    };
    // P4 Modal Commands
    const [p4show, setP4Show] = useState(false);
    const p4handleClose = () => setP4Show(false);
    const p4handleShow = (e) => {
        e.preventDefault();
        setP4Show(true)
    };

    useEffect(() => {
        getOneProfile()
    }, [show, p1show, p2show, p3show, p4show])

    let mongoId = props.history.location.pathname.substring(9)

    const getOneProfile = async () => {
        console.log("Attempting to retrieve one profile...")
        console.log(mongoId);

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `http://porto-app-server.herokuapp.com/profiles/${mongoId}`
                    : `http://localhost:5000/profiles/${mongoId}`

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
                    ? `http://porto-app-server.herokuapp.com/profiles/${mongoId}`
                    : `http://localhost:5000/profiles/${mongoId}`

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
                    ? `http://porto-app-server.herokuapp.com/profiles/${mongoId}`
                    : `http://localhost:5000/profiles/${mongoId}`

            axios.put(url, {
                firstName: firstNameEdited,
                middleName: middleNameEdited,
                lastName: lastNameEdited,
                email: emailEdited,
                urlResume: resumeEdited,
            });
            console.log("Edit successful!");
        } catch (error) {
            console.warn("Error when editing one profile.")
        }
    }

    const submitP1Edit = async () => {

        let project1DescriptionEdited = document.querySelector(".project1DescriptionEdit").value
        let project1NameEdited = document.querySelector(".project1NameEdit").value
        let project1ImgEdited = document.querySelector(".project1ImgEdit").value
        let project1URLEdited = document.querySelector(".project1URLEdit").value

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `http://porto-app-server.herokuapp.com/profiles/${mongoId}`
                    : `http://localhost:5000/profiles/${mongoId}`

            axios.put(url, {
                Project1Description: project1DescriptionEdited,
                Project1Name: project1NameEdited,
                Project1Img: project1ImgEdited,
                Project1URL: project1URLEdited
            });
            console.log("Edit successful!");
        } catch (error) {
            console.warn("Error when editing one profile.")
        }
    }

    const submitP2Edit = async () => {

        let project2DescriptionEdited = document.querySelector(".project2DescriptionEdit").value
        let project2NameEdited = document.querySelector(".project2NameEdit").value
        let project2ImgEdited = document.querySelector(".project2ImgEdit").value
        let project2URLEdited = document.querySelector(".project2URLEdit").value

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `http://porto-app-server.herokuapp.com/profiles/${mongoId}`
                    : `http://localhost:5000/profiles/${mongoId}`

            axios.put(url, {
                Project2Description: project2DescriptionEdited,
                Project2Name: project2NameEdited,
                Project2Img: project2ImgEdited,
                Project2URL: project2URLEdited
            });
            console.log("Edit successful!");
        } catch (error) {
            console.warn("Error when editing one profile.")
        }
    }

    const submitP3Edit = async () => {

        let project3DescriptionEdited = document.querySelector(".project3DescriptionEdit").value
        let project3NameEdited = document.querySelector(".project3NameEdit").value
        let project3ImgEdited = document.querySelector(".project3ImgEdit").value
        let project3URLEdited = document.querySelector(".project3URLEdit").value

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `http://porto-app-server.herokuapp.com/profiles/${mongoId}`
                    : `http://localhost:5000/profiles/${mongoId}`

            axios.put(url, {
                Project3Description: project3DescriptionEdited,
                Project3Name: project3NameEdited,
                Project3Img: project3ImgEdited,
                Project3URL: project3URLEdited
            });
            console.log("Edit successful!");
        } catch (error) {
            console.warn("Error when editing one profile.")
        }
    }

    const submitP4Edit = async () => {

        let project4DescriptionEdited = document.querySelector(".project4DescriptionEdit").value
        let project4NameEdited = document.querySelector(".project4NameEdit").value
        let project4ImgEdited = document.querySelector(".project4ImgEdit").value
        let project4URLEdited = document.querySelector(".project4URLEdit").value

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `http://porto-app-server.herokuapp.com/profiles/${mongoId}`
                    : `http://localhost:5000/profiles/${mongoId}`

            axios.put(url, {
                Project4Description: project4DescriptionEdited,
                Project4Name: project4NameEdited,
                Project4Img: project4ImgEdited,
                Project4URL: project4URLEdited
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
                        <Form.Control className="firstNameEdit" defaultValue={activeProfile.firstName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupMiddleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control className="middleNameEdit" defaultValue={activeProfile.middleName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control className="lastNameEdit" defaultValue={activeProfile.lastName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="emailEdit" defaultValue={activeProfile.email}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupResume">
                        <Form.Label>Resume</Form.Label>
                        <Form.Control className="resumeEdit" defaultValue={activeProfile.urlResume}/>
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

            <Modal show={p1show} onHide={p1handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project 1</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formGroupP1Name">
                        <Form.Label>Project 1 Name</Form.Label>
                        <Form.Control className="project1NameEdit" defaultValue={activeProfile.Project1Name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP1Desc">
                        <Form.Label>Project 1 Description</Form.Label>
                        <Form.Control className="project1DescriptionEdit" defaultValue={activeProfile.Project1Description}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP1Image">
                        <Form.Label>Project 1 Image URL</Form.Label>
                        <Form.Control className="project1ImgEdit" defaultValue={activeProfile.Project1Img}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP1Url">
                        <Form.Label>Project 1 Deployed URL</Form.Label>
                        <Form.Control className="project1URLEdit" defaultValue={activeProfile.Project1URL}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={p1handleClose}>Close</Button>
                    <Button variant="primary" onClick={() => {
                        submitP1Edit()
                        p1handleClose()
                        getOneProfile()
                    }}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={p2show} onHide={p2handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project 2</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formGroupP1Name">
                        <Form.Label>Project 2 Name</Form.Label>
                        <Form.Control className="project2NameEdit" defaultValue={activeProfile.Project2Name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP2Desc">
                        <Form.Label>Project 2 Description</Form.Label>
                        <Form.Control className="project2DescriptionEdit" defaultValue={activeProfile.Project2Description}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP2Image">
                        <Form.Label>Project 2 Image URL</Form.Label>
                        <Form.Control className="project2ImgEdit" defaultValue={activeProfile.Project2Img}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP2Url">
                        <Form.Label>Project 2 Deployed URL</Form.Label>
                        <Form.Control className="project2URLEdit" defaultValue={activeProfile.Project2URL}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={p2handleClose}>Close</Button>
                    <Button variant="primary" onClick={() => {
                        submitP2Edit()
                        p2handleClose()
                        getOneProfile()
                    }}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={p3show} onHide={p3handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project 3</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formGroupP1Name">
                        <Form.Label>Project 3 Name</Form.Label>
                        <Form.Control className="project3NameEdit" defaultValue={activeProfile.Project3Name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP3Desc">
                        <Form.Label>Project 3 Description</Form.Label>
                        <Form.Control className="project3DescriptionEdit" defaultValue={activeProfile.Project3Description}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP3Image">
                        <Form.Label>Project 3 Image URL</Form.Label>
                        <Form.Control className="project3ImgEdit" defaultValue={activeProfile.Project3Img}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupP3Url">
                        <Form.Label>Project 3 Deployed URL</Form.Label>
                        <Form.Control className="project3URLEdit" defaultValue={activeProfile.Project3URL}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={p3handleClose}>Close</Button>
                    <Button variant="primary" onClick={() => {
                        submitP3Edit()
                        p3handleClose()
                        getOneProfile()
                    }}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={p4show} onHide={p4handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project 4</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-4" controlId="formGroupP1Name">
                        <Form.Label>Project 4 Name</Form.Label>
                        <Form.Control className="project4NameEdit" defaultValue={activeProfile.Project4Name}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupP4Desc">
                        <Form.Label>Project 4 Description</Form.Label>
                        <Form.Control className="project4DescriptionEdit" defaultValue={activeProfile.Project4Description}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupP4Image">
                        <Form.Label>Project 4 Image URL</Form.Label>
                        <Form.Control className="project4ImgEdit" defaultValue={activeProfile.Project4Img}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupP4Url">
                        <Form.Label>Project 4 Deployed URL</Form.Label>
                        <Form.Control className="project4URLEdit" defaultValue={activeProfile.Project4URL}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={p4handleClose}>Close</Button>
                    <Button variant="primary" onClick={() => {
                        submitP4Edit()
                        p4handleClose()
                        getOneProfile()
                    }}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <div className="myProfile">
                <img className="pic" src={activeProfile.urlPic} alt="" />
                <h2>
                    <div className="profileAbout"><h3>Profile Info</h3></div>
                    <div className="name">Name: {activeProfile.firstName} {activeProfile.middleName} {activeProfile.lastName}</div>
                    <div className="title">Title: {activeProfile.title}</div>
                    <div className="location">Location: {activeProfile.location}</div>
                    <button className="contactButton">
                        <a className="mailto" href={'mailto:' + activeProfile.email}>Contact</a>
                    </button>
                    <button className="resumeButton">
                        <a className="Resume" target="_blank" rel="noreferrer" href={activeProfile.urlResume}>Resume</a>
                    </button>
                </h2>
            </div>

                    <hr />
                    <hr />

                    <h2 className="currentProjectTitle">Current Projects</h2>

            <div className="projectsCard">
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={activeProfile.Project1Img} />
                    <Card.Body>
                        <Card.Title>{activeProfile.Project1Name}</Card.Title>
                        <Card.Text>{activeProfile.Project1Description}</Card.Text>
                        <a href={activeProfile.Project1URL}>
                            <Button variant="primary" onClick={p1handleShow}>Edit Project</Button>
                        </a>
                        <a href={activeProfile.Project1URL} target="_blank" rel="noreferrer">
                            <Button varient="primary" className="projectButton">View Project</Button>
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
                            <Button variant="primary" onClick={p2handleShow}>Edit Project</Button>
                        </a>
                        <a href={activeProfile.Project1URL} target="_blank" rel="noreferrer">
                            <Button varient="primary" className="projectButton">View Project</Button>
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
                            <Button variant="primary" onClick={p3handleShow}>Edit Project</Button>
                        </a>
                        <a href={activeProfile.Project1URL} target="_blank" rel="noreferrer">
                            <Button varient="primary" className="projectButton">View Project</Button>
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
                            <Button variant="primary" onClick={p4handleShow}>Edit Project</Button>
                        </a>
                        <a href={activeProfile.Project1URL} target="_blank" rel="noreferrer">
                            <Button varient="primary" className="projectButton">View Project</Button>
                        </a>
                    </Card.Body>
                </Card>
            </div>
            <div>
            <Button className="editButton" onClick={handleShow}>Edit Profile</Button>
            <Link to={`/searchresults`} key={props.id}>
                <Button className="deleteButton" onClick={handleDelete}>Delete Profile</Button>
            </Link>
            </div>
        </div>
  );
}

export default Profile;
