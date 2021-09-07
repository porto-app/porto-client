import React, { useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { DataContext } from './DataContext'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Profile(props) {


    const { currentProfileId, activeProfile, setActiveProfile } = useContext(DataContext);

    console.log("currentProfile id is", currentProfileId);

    useEffect(() => {
        getOneProfile()
    }, [])

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
        let firstName = "Spongebob"

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `https://deployed-heroku-api.com/profiles/${currentProfileId}`
                    : `http://localhost:5000/profiles/${currentProfileId}`

            axios.put(url, {
                firstName
            });
            console.log("Edit successful!");
        } catch (error) {
            console.warn("Error when editing one profile.")
        }
    }

    return (
        <div>
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
                <button className="resumeButton">Resume</button>
            </div>

            <Link to={`/searchresults`} key={props.id}>
                <Button variant="warning" onClick={submitEdit}>Edit Profile</Button>
            </Link>
            <Link to={`/searchresults`} key={props.id}>
                <Button variant="danger" onClick={handleDelete}>Delete Profile</Button>
            </Link>
        </div>
    );
}

export default Profile;
