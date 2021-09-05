import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'

function Main(props) {

    const [search, setSearch] = useState('')

    useEffect(() => {
        getAllProfiles()
    }, [])

    const getAllProfiles = () => {
        console.log("Retrieving all profiles...");

        const url = `https://placeholder.com`

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.warn("API call was successful.", res);
            })
            .catch(console.warn("API call isn't fully set up yet."))
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
