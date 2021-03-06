import { FunctionComponent, useEffect } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { TextField } from "./Fields";
import { Formik } from 'formik'; 
import * as Yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom";

interface CreateAccountProps {
    
}
 
const CreateAccount: FunctionComponent<CreateAccountProps> = () => {
    const {state} = useLocation();

    // Navigate away if directly accessing the path
    const navigate = useNavigate();
    useEffect(() => {
        if (!state) {
            navigate('/page-not-found');
        }
    }, [state, navigate]) 

    // The validation schema used in the form
    const schema = Yup.object().shape({
        email: Yup.string()
            .required('Required')
            .email('Invalid email'),
        password: Yup.string()
            .required('Required')
            .min(8, 'Too Short!')
            .matches(
                /[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 
                'Need one special character or number'),
      });

    return (
        <Container>
            <Row className="mt-4">
                <h2>Create Account</h2>
                <Formik
                    validationSchema={schema}
                    onSubmit={() => alert("Account created!")}
                    initialValues={{
                        email: '',
                        password: ''
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
                        <TextField controlId="email" label="Email Address" placeholder="Enter Email" type="email" data={values.email} handleChange={handleChange} touched={touched.email} errors={errors.email} />
                        <TextField controlId="password" label="Password" placeholder="Enter Password" type="password" data={values.password} handleChange={handleChange} touched={touched.password} errors={errors.password}/>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                )}
                </Formik>
            </Row>
        </Container>  
    );
}
 
export default CreateAccount;