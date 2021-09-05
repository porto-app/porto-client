import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function Main(props) {

    const [search, setSearch] = useState('')

    return (
        <div className="searchMain">
            <h3>Search For A Portfolio:</h3>
            <input type="text"
                   className="searchField"
                   placeholder="Search by name or job title...."
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={`/searchResults`}>
            <Button className="searchButton" variant="outline-primary">Search</Button>
            </Link>
        </div>
    );
}

export default Main;
