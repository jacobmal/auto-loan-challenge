import { FunctionComponent } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { TextField, CurrencyField } from "./Forms";

 
const Landing: FunctionComponent = () => {
    // TODO:    Add field validation
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
                            <CurrencyField controlId="autoPurchasePrice" label="Auto Purchase Price" md={4} />
                            <TextField controlId="autoMake" placeholder="Example: Ford" label="Auto Make" md={4} />
                            <TextField controlId="autoModel" placeholder="Example: Mustang" label="Auto Model" md={4} />
                        </Row>
                        
                        <Row>
                            <CurrencyField controlId="estimatedYearlyIncome" label="Estimated Yearly Income" md={6} />
                            <TextField controlId="estimatedCreditScore" label="Estimated Credit Score" md={6} />
                        </Row>
                        
                        <Button variant="primary">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Landing;