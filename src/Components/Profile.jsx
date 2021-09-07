import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


function Profile(props) {

    const [activeProfile, setActiveProfile] = useState("");

    useEffect(() => {
        getOneProfile()
    }, [])

    const getOneProfile = async () => {
        console.log("Attempting to retrieve one profile...")

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `https://deployed-heroku-api.com/profile/:id`
                    : `http://localhost:5000/profiles/613607edab5ce26f5c7d27a0`

            const response = await axios(url)
            console.log("Response data: ", response);
            setActiveProfile(response.data)
        } catch (error) {
            console.warn("Error when retrieving one profiles.")
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

            <Button variant="warning">Edit Profile</Button>
            <Button variant="danger">Delete Profile</Button>
        </div>
    );
}

export default Profile;
