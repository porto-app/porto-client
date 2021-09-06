import React, { useEffect, useContext } from 'react';
import PreviewCard from './PreviewCard';
import { DataContext } from './DataContext';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function SearchResults() {

    // AZ: Similar to useState, but the state is defined in App and stored in useContext
    const { profiles, setProfiles } = useContext(DataContext);
    const placeholderPic = "https://a.ltrbxd.com/avatar/twitter/4/3/8/3/8/2/shard/http___pbs.twimg.com_profile_images_959679433505497089__0ShmWMC.jpg?k=cd3effc45f"

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
        getAllProfiles()
    }, [])

    const getAllProfiles = async () => {
        console.log("Attempting to retrieve all profiles...")

        try {
            const url =
                process.env.NODE_ENV === 'production'
                    ? `https://deployed-heroku-api.com/profiles`
                    : `http://localhost:5000/profiles`

            const response = await axios(url)
            setProfiles(response.data)
            console.log(response.data);
            console.log("response IS", response);
        } catch (error) {
            console.warn("API call isn't fully set up yet.")
        }
    }

    // fakeResponseData will be replaced by the real response data once available.
    let listOfProfiles = profiles.map((profile, index) => {
        return (
            <PreviewCard
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
