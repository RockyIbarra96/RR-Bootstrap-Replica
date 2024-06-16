import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#home">
                        <img
                            src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg"
                            alt="instacart-logo"
                            style={{ height: '40px' }}
                        />
                    </Navbar.Brand>
                    <Nav className="d-flex align-items-center">
                        <Nav.Link href="#LogIn" style={{ marginRight: '10px', color: "#343538", fontSize: '18px', fontWeight: 'bolder' }}>Log In</Nav.Link>
                        <Button variant="success" style={{ fontSize: '18px' }}>Sign Up</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

