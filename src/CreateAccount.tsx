import { FunctionComponent } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

interface CreateAccountProps {
    
}
 
const CreateAccount: FunctionComponent<CreateAccountProps> = () => {
    // TODO:    Also remove duplicate code here
    return (
        <Container>
            <Row className="mt-4">
                <h2>Create Account</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="autoMake">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="autoMake">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Button variant="primary">Submit</Button>
                </Form>
            </Row>
        </Container>  
    );
}
 
export default CreateAccount;