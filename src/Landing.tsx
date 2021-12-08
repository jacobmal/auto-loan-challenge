import { FunctionComponent } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { TextField, CurrencyField } from "./Fields";
import { Formik } from 'formik'; 
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { SubmitApplicationResponse } from "./server";

const Landing: FunctionComponent = () => {
    const navigate = useNavigate();
    
    // The validation schema used in the form
    const schema = Yup.object().shape({
        autoPurchasePrice: Yup.number()
            .typeError("Must be numeric")
            .positive("Must be positive")
            .required('Required'),
        autoMake: Yup.string()
            .required('Required'),
        autoModel: Yup.string()
            .required('Required'),
        estimatedYearlyIncome: Yup.number()
            .typeError("Must be numeric")
            .positive("Must be positive")
            .required('Required'),
        estimatedCreditScore: Yup.number()
            .required('Required')
            .typeError("Must be numeric")
            .min(300, "Must be greater than 300")
            .max(850, "Must be less than 850")
      });
    
    return (
        <Container>
            <Row className="mt-4">
                <h2>Loan Application</h2>
                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Dictum at tempor commodo ullamcorper. Tincidunt augue interdum velit euismod. Lacinia quis vel eros donec ac odio tempor orci. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. In eu mi bibendum neque egestas congue quisque. Malesuada nunc vel risus commodo viverra maecenas accumsan.</p>
                </Col>
                <Col lg="8">
                    <Formik
                        validationSchema={schema}
                        onSubmit={(values) => {
                            fetch('/api/submit-application', {
                            method: 'POST',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(values)})
                                .then(response => {
                                    if (response.status >= 400 && response.status < 600) {
                                        throw new Error("Bad response from server");
                                    }
                                    return response.json()
                                })
                                .then((data: SubmitApplicationResponse) => {
                                    if (data.qualified) {
                                        console.log("Qualified");
                                        navigate("/create-account");
                                    }
                                    else {
                                        console.log("Disqualified");
                                        navigate("/disqualified", { state: { message: data.message } });
                                    }
                                })
                                .catch((error) => alert(error)) // Further error handling would be added in production 
                        }}
                        initialValues={{
                            autoPurchasePrice: '',
                            autoMake: '',
                            autoModel: '',
                            estimatedYearlyIncome: '',
                            estimatedCreditScore: ''
                        }}
                    >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row>
                                <CurrencyField controlId="autoPurchasePrice" label="Auto Purchase Price" md={4} data={values.autoPurchasePrice} handleChange={handleChange} touched={touched.autoPurchasePrice} errors={errors.autoPurchasePrice} />
                                <TextField controlId="autoMake" placeholder="Example: Ford" label="Auto Make" md={4} data={values.autoMake} handleChange={handleChange} touched={touched.autoMake} errors={errors.autoMake} />
                                <TextField controlId="autoModel" placeholder="Example: Mustang" label="Auto Model" md={4} data={values.autoModel} handleChange={handleChange} touched={touched.autoModel} errors={errors.autoModel} />
                            </Row>
                            
                            <Row>
                                <CurrencyField controlId="estimatedYearlyIncome" label="Estimated Yearly Income" md={6} data={values.estimatedYearlyIncome} handleChange={handleChange} touched={touched.estimatedYearlyIncome} errors={errors.estimatedYearlyIncome} />
                                <TextField controlId="estimatedCreditScore" label="Estimated Credit Score" md={6} data={values.estimatedCreditScore} handleChange={handleChange} touched={touched.estimatedCreditScore} errors={errors.estimatedCreditScore} />
                            </Row>
                            
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Landing;