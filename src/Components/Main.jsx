import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { DataContext } from './DataContext';

function Main(props) {

    const { search, setSearch } = useContext(DataContext);

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
            <br />
            <Link to={`/createprofile`}>
                <Button variant="primary" className="create-button">Create New Profile</Button>
            </Link>
        </div>
    );
}

export default Main;
