import React, { useEffect, useContext } from 'react';
import PreviewCard from './PreviewCard';
import { DataContext } from './DataContext';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function SearchResults() {

    // AZ: Similar to useState, but the state is defined in App and stored in useContext
    const { profiles, setProfiles, search, setSearch, filteredProfiles, setFilteredProfiles } = useContext(DataContext);

    let listOfProfiles = [];

    useEffect(() => {
        console.log("Search criteria entered: ", search);
        getAllProfiles()
    }, [])

    const getAllProfiles = async () => {
        console.log("Attempting to retrieve all profiles...")

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `http://porto-app-server.herokuapp.com/profiles`
                    : `http://localhost:5000/profiles`

            const response = await axios(url)
            setProfiles(response.data)
            console.log("Response data: ", response);

            const responseData = response.data;
            const filteredResults =responseData.filter((profile) => {
                return profile.location === search
            })

            setFilteredProfiles(filteredResults)

        } catch (error) {
            console.warn("Error when retrieving all profiles.")
        }
    }

    if (filteredProfiles.length >= 1) {
        listOfProfiles = filteredProfiles.map((profile, index) => {
            return (
                <PreviewCard
                    dataObject={profile}
                    id={profile._id}
                    firstName={profile.firstName}
                    middleName={profile.middleName}
                    lastName={profile.lastName}
                    title={profile.title}
                    location={profile.location}
                    url={profile.urlPic}
                    key={profile._id}
                />
            )
        })
    } else {
        listOfProfiles = profiles.map((profile, index) => {
            return (
                <PreviewCard
                    dataObject={profile}
                    id={profile._id}
                    firstName={profile.firstName}
                    middleName={profile.middleName}
                    lastName={profile.lastName}
                    title={profile.title}
                    location={profile.location}
                    url={profile.urlPic}
                    key={profile._id}
                />
            )
        })
    }

    return (
        <Container>
            <Row>
                <Col>
                    {listOfProfiles}
                </Col>
            </Row>
        </Container >
    )
}

export default SearchResults;
