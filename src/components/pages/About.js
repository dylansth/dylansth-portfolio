import Container from 'react-bootstrap/Container';
import selfPortrait from "../../Assets/portrait1.png";

function About() {
    return (
        <Container style={{ textAlign: "center"}}>
            <p>Hello, my name is Dylan St. Hilaire and I am currently enrolled in UofT</p>
            <img src={selfPortrait} alt="self portrait" style={{ width: "25%"}}/>
        </Container>
    );
}

export default About;