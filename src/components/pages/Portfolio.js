import Card from 'react-bootstrap/Card';
import spaceStock1 from '../../Assets/spacestock1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Portfolio() {
    return (

            <Container style={{ marginTop: "10%", marginBottom: "10%"}}>
                <Row>
                    <Col md={6}>
                    <a href='https://study-guide1-fc24eca05b24.herokuapp.com/#gsc.tab=0' target="_blank" rel="noopener noreferrer" >
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    Web Development Blog & Study Guide.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </a>
                    </Col>
                    <Col md={6}>
                    <a href='https://dylan-express-note-taker-fb84ae9ee1e4.herokuapp.com/' target="_blank" rel="noopener noreferrer" >
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    Take Notes with Express.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <a href='https://dylansth.github.io/weather-dashboard/' target="_blank" rel="noopener noreferrer" >
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    Weather Forcast Dashboard.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </a>
                    </Col>
                    <Col md={6}>
                    <a href='https://dylansth.github.io/daily-scheduler/' target="_blank" rel="noopener noreferrer" >
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    Daily Scheduler.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <a href='https://github.com/dylansth/nosql-social-network' target="_blank" rel="noopener noreferrer" >
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    NoSQL Social Network.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </a>
                    </Col>
                    <Col md={6}>
                    <a href='https://github.com/dylansth/readme-generator' target="_blank" rel="noopener noreferrer" >
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    README.md Generator.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </a>
                    </Col>
                </Row>
            </Container>
    );
}

export default Portfolio;