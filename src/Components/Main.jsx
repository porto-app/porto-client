import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios';

function Main(props) {

    const [search, setSearch] = useState('')
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        getAllProfiles()
    }, [])

    const getAllProfiles = async () => {
        console.log("Attempting to retrieve all profiles...")

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `https://deployed-heroku-api.com/profiles`
                    : `http://localhost:4000/profiles`

            const allProfiles = await axios(url)
            setProfiles(allProfiles.data)
        } catch (error) {
            console.warn("API call isn't fully set up yet.")
        }
    }

    return (
        <div className="searchMain">
            <h3>Search For A Portfolio:</h3>
            <input type="text"
                   className="searchField"
                   placeholder="Search by name or job title...."
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
            <Button className="searchButton" variant="outline-primary">Search</Button>{' '}
        </div>
    );
}

export default Main;
