import React from "react";
import {Container,Button} from "react-bootstrap";
import "../styles/Home.css";


export const Home = () => {
    return(
        <Container>
            <h1>Welcome to the page</h1>
            <p>Here to server you 
                !
            </p>
            <Button variant="primary" type="submit">Get Started</Button>

        </Container>
    )
}
