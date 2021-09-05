import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'


function Profile(props) {
    return (
        <div>
            <h2>User profile will go here!</h2>

            <InputGroup className="mb-3">
            <InputGroup.Text>First and last name</InputGroup.Text>
            <FormControl aria-label="First name" />
            <FormControl aria-label="Last name" />
            </InputGroup>
        </div>
    );
}

export default Profile;