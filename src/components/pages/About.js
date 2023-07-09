import Container from 'react-bootstrap/Container';
import selfPortrait from "../../Assets/portrait1.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <img src={selfPortrait} alt="self portrait" style={{ width: "75%", marginTop: "50%"}}/>
                    </Col>
                <Col sm={8} >
                <p style={{ marginTop: "25%", }}>I have a passion for technology with an ability to keep operations running efficiently by supporting clients with a variety of technology needs. My expertise involves troubleshooting and creating tools to resolve a variety of complex issues related to computer hardware and software across many platforms. My keen eye for detail and resourceful mindset allows me to ensure a task is thoroughly completed while using various tools to solve problems effectively.</p>
                    </Col>
            </Row>
        
        </Container>
    );
}

export default About;