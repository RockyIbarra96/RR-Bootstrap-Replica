import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Background() {
    return (
        <Container fluid style={{ maxHeight: "100vh", backgroundColor: "#DEEED6", display: 'flex', alignItems: 'center' }}>
            <Row style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <Col md={11} className="d-flex justify-content-start">
                    <Card style={{ backgroundColor: "#DEEED6", border: "none" }} className="text-black">
                        <Card.Body style={{ marginLeft: "50px" }}>
                            <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                                Order groceries for delivery <br /> or pickup today
                            </Card.Text>
                            <Card.Text style={{ fontSize: "1em" }}>
                                Whatever you want from local stores, brought right to your door.
                            </Card.Text>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control size="lg" type="text" placeholder="Enter your address ->" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={1} className="d-flex justify-content-end">
                    <img
                        style={{ height: "100%", width: "100%", maxHeight: "428px", backgroundSize: "20px", backgroundRepeat: "no-repeat", position: "relative", left: "550px" }}
                        src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg"
                        alt="Card image"
                    />
                </Col>
            </Row>
        </Container>
    );
}

