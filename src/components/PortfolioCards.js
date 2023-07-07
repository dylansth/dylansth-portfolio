import Card from 'react-bootstrap/Card';
import spaceStock1 from '../Assets/spacestock1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function portfolioCards() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={{ width: "75%" }}>
                            <Card.Img variant="top" src={spaceStock1} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default portfolioCards;