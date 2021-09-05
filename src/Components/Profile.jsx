import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'


function Profile(props) {
    return (
        <div>
        <div className="myProfile">

        <img className="pic" src="https://user-images.githubusercontent.com/86509310/132135371-0e04c8fd-5780-4b8d-84f6-b6e8ffb12994.png" alt=" "></img>

   
        <h2>
        <div className="name">Name: First LastName </div>
        <div className="location">Location: New York</div>
        <div className="title">Title: UX Designer</div>
        </h2>
    
        </div>
            
     
      <button className="contactButton">Contact</button> 
      <button className="resumeButton">Resume</button>
      
        
        </div>
    );
}

export default Profile;