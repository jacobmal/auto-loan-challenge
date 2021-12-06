import { FunctionComponent } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { TextField } from "./Forms";

interface CreateAccountProps {
    
}
 
const CreateAccount: FunctionComponent<CreateAccountProps> = () => {
    // TODO:    Also remove duplicate code here
    return (
        <Container>
            <Row className="mt-4">
                <h2>Create Account</h2>
                <Form>
                    <TextField controlId="emailAddress" label="Email Address" placeholder="Enter Email" type="email" />
                    <TextField controlId="password" label="Password" placeholder="Enter Password" type="password" />
                    <Button variant="primary">Submit</Button>
                </Form>
            </Row>
        </Container>  
    );
}
 
export default CreateAccount;