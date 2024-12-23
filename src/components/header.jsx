import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function AppHeader() {
    return (
        
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="navbar">
                <Navbar.Brand href="#home" className='texto-colorido'>ProAtivos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{ color: '#fff'} }>Home</Nav.Link>
                        <Nav.Link href="#services" style={{ color: '#fff'} }>Serviços</Nav.Link>
                        <Nav.Link href="#faq" style={{ color: '#fff'} }>FAQ</Nav.Link>
                        <Nav.Link href="#orcamento" style={{ color: '#fff'} }>Orçamentos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}