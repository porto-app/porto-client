import React, { useState ,useEffect } from 'react';
import axios from 'axios';


function Profile(props) {
    console.log("props is", props);

    useEffect(() => {
        getOneProfile()
    }, [])

    const getOneProfile = async () => {
        console.log("Attempting to retrieve one profile...")

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `https://deployed-heroku-api.com/profile/:id`
                    : `http://localhost:5000/profile/:id`

            const response = await axios(url)
            console.log("Response data: ", response);
        } catch (error) {
            console.warn("Error when retrieving one profiles.")
        }
    }

    return (
        <div>
            <div className="myProfile">
                <img className="pic" src="https://user-images.githubusercontent.com/86509310/132135371-0e04c8fd-5780-4b8d-84f6-b6e8ffb12994.png" alt="" />
                <h2>
                    <div className="name">Name: </div>
                    <div className="title">Title: </div>
                    <div className="location">Location: </div>
                </h2>
            </div>
            <div>
                <button className="contactButton">Contact</button>
                <button className="resumeButton">Resume</button>
            </div>
        </div>
    );
}

export default Profile;
