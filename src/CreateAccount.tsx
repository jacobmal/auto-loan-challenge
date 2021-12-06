import { FunctionComponent, useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { TextField } from "./Forms";

interface CreateAccountProps {
    
}
 
const CreateAccount: FunctionComponent<CreateAccountProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Row className="mt-4">
                <h2>Create Account</h2>
                <Form>
                    <TextField controlId="emailAddress" label="Email Address" placeholder="Enter Email" type="email" setData={setEmail} data={email} />
                    <TextField controlId="password" label="Password" placeholder="Enter Password" type="password" setData={setPassword} data={password} />
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Row>
        </Container>  
    );
}
 
export default CreateAccount;