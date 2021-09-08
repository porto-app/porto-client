import React, { useEffect, useContext } from 'react';
import PreviewCard from './PreviewCard';
import { DataContext } from './DataContext';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function SearchResults() {

    // AZ: Similar to useState, but the state is defined in App and stored in useContext
    const { profiles, setProfiles, search, setSearch, filteredProfiles, setFilteredProfiles } = useContext(DataContext);
    const placeholderPic = "https://a.ltrbxd.com/avatar/twitter/4/3/8/3/8/2/shard/http___pbs.twimg.com_profile_images_959679433505497089__0ShmWMC.jpg?k=cd3effc45f"

    let listOfProfiles = [];
    const fakeResponseData = [
        {
            name: "Andy Zhong",
            title: "Software Engineer",
            location: "Boston",
            url: placeholderPic
        },
        {
            name: "Kimberly Kruedelbach",
            title: "Software Engineer",
            location: "New York",
            url: placeholderPic
        },
        {
            name: "Lawrence Hau",
            title: "Software Engineer",
            location: "New York",
            url: placeholderPic
        },
        {
            name: "Roxie Schnoor",
            title: "Software Engineer",
            location: "California",
            url: placeholderPic
        },
        {
            name: "Zachary Rehbein",
            title: "Software Engineer",
            location: "Boston",
            url: placeholderPic
        },
        {
            name: "Spongebob Squarepants",
            title: "Frycook",
            location: "Bikini Bottom",
            url: placeholderPic
        },
    ]

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
            // Returning all response data.
            setProfiles(response.data)
            console.log("Response data: ", response);
            // Filter response data by search criteria.
            const responseData = response.data;

            const filteredResults =responseData.filter((profile) => {
                console.log("THING WE ARE SEARCHING", search);
                return profile.location === search
            })

            console.log("Filtered results are: ", filteredResults);

            // Store filtered data into a state.
            setFilteredProfiles(filteredResults)

            // Display on Search Results screen.
        } catch (error) {
            console.warn("Error when retrieving all profiles.")
        }
    }

    // fakeResponseData will be replaced by the real response data once available.
    if (filteredProfiles.length > 1) {
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
        // TODO: CAN WE ADD A NULL CHECK HERE?
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
