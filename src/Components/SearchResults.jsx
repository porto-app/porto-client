import React, { useEffect, useContext } from 'react';
import PreviewCard from './PreviewCard';
import { DataContext } from './DataContext';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function SearchResults() {

    // AZ: Similar to useState, but the state is defined in App and stored in useContext
    const { setProfiles } = useContext(DataContext);
    const placeholderPic = "https://a.ltrbxd.com/avatar/twitter/4/3/8/3/8/2/shard/http___pbs.twimg.com_profile_images_959679433505497089__0ShmWMC.jpg?k=cd3effc45f"

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
        <Container>
            <Row>
                <Col>
                    <PreviewCard
                        name="Andy Zhong"
                        title="Software Engineer"
                        location="Boston"
                        url={placeholderPic}
                    />

                    <PreviewCard
                        name="Kimberly Kruedelbach"
                        title="Software Engineer"
                        location="New York"
                        url={placeholderPic}
                    />

                    <PreviewCard
                        name="Lawrence Hau"
                        title="Software Engineer"
                        location="New York"
                        url={placeholderPic}
                    />

                    <PreviewCard
                        name="Roxie Schnoor"
                        title="Software Engineer"
                        location="California"
                        url={placeholderPic}
                    />

                    <PreviewCard
                        name="Zachary Rehbein"
                        title="Software Engineer"
                        location="Arizona"
                        url={placeholderPic}
                    />

                    <PreviewCard
                        name="Random Man"
                        title="Software Engineer"
                        location="Kansas"
                        url={placeholderPic}
                    />
                </Col>
            </Row>
        </Container >
    )
}

export default SearchResults;
