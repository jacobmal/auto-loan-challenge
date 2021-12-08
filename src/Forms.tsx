import { FunctionComponent } from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";

interface FieldProps {
    controlId: string,
    label: string,
    md?: number,
    className?: string,
    data: string | undefined,
    handleChange: any,
    touched?: boolean,
    errors?: string
}

interface TextFieldProps extends FieldProps {
    placeholder?: string,
    type?: string,
}
 
export const TextField: FunctionComponent<TextFieldProps> = (props) => {
    const {controlId, label, placeholder, md, className="mb-3", type="text", data, handleChange, touched, errors} = props;

    const isValid = touched && !errors;
    const isInvalid = touched && !!errors;
    const errorMessage = errors;

    console.log(errorMessage);

    return (  
        <Form.Group as={Col} md={md} className={className} controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control required type={type} placeholder={placeholder} value={data} onChange={handleChange} name={controlId} isValid={isValid} isInvalid={isInvalid} />
            <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
        </Form.Group>
    );
}

interface CurrencyFieldProps extends FieldProps {
}
 
export const CurrencyField: FunctionComponent<CurrencyFieldProps> = (props) => {
    const {controlId, label, md, className="mb-3", data, handleChange, touched, errors} = props;
    
    const isValid = touched && !errors;
    const isInvalid = touched && !!errors;
    const errorMessage = errors;

    return (
        <Form.Group as={Col} md={md} className={className}>
            <Form.Label>{label}</Form.Label>
            <InputGroup id={controlId}>
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl required aria-label="Amount" value={data} onChange={handleChange} isValid={isValid} name={controlId} isInvalid={isInvalid} />
                <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
            </InputGroup>
    </Form.Group>
    );
}