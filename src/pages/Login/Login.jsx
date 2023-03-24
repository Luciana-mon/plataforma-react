import { Button, Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import '../Login/Login.css'

export function Login() {
    return (
        <Card style={{ width: '18rem' }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Password" /> </Form.Group>

                <Button variant="primary" type="submit" > 
                Enviar
                </Button>
                <Button variant="primary" type="submit">
                Facebook
                </Button>

            </Form>
        </Card>
    );
}






