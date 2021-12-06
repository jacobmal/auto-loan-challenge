import { FunctionComponent } from "react";
import { FormControl, InputGroup, Button, Form, Container, Row, Col } from "react-bootstrap";

 
const Landing: FunctionComponent = () => {
    // TODO:    Refactor to reduce duplication
    //          Add field validation
    return (
        <Container>
            <Row className="mt-4">
                <h2>Loan Application</h2>
                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Dictum at tempor commodo ullamcorper. Tincidunt augue interdum velit euismod. Lacinia quis vel eros donec ac odio tempor orci. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. In eu mi bibendum neque egestas congue quisque. Malesuada nunc vel risus commodo viverra maecenas accumsan.</p>
                </Col>
                <Col lg="8">
                    <Form>
                        <Row>
                            <Form.Group as={Col} md="4" className="mb-3">
                                <Form.Label>Auto Purchase Price</Form.Label>
                                <InputGroup id="autoPurchasePrice">
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <FormControl aria-label="Amount" />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="autoMake">
                                <Form.Label>Auto Make</Form.Label>
                                <Form.Control type="text" placeholder="Example: Ford" />
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="autoModel">
                                <Form.Label>Auto Model</Form.Label>
                                <Form.Control type="text" placeholder="Example: Mustang" />
                            </Form.Group>
                        </Row>
                        
                        <Row>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <Form.Label>Estimated Yearly Income </Form.Label>
                                <InputGroup id="estimatedYearlyIncome">
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <FormControl aria-label="Amount" />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="estimatedCreditScore">
                                <Form.Label>Estimated Credit Score </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>
                        
                        <Button variant="primary">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Landing;