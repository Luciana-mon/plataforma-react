import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

    export function Menu() {
    return (
        <div className="menu">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Menu</Navbar.Brand>
                    <Nav className="me-auto">
                        <Button variant="#home" >
                            <Link to="/">Home</Link>
                        </Button>

                        <Button variant="#features">
                            <Link to="/blog">Blog</Link>
                        </Button>

                        <Button variant="#pricing">
                            <Link to="/contato">Contato</Link>
                        </Button>
                        
                        <Button variant="#pricing">
                            <Link to="/usuario">Usuario</Link>
                        </Button>
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
    }
