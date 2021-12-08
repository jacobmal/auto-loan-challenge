import { FunctionComponent } from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";

interface FieldProps {
    /** The field's control id. Also used as the name for formik */
    controlId: string,
    /** The label shown for the field */
    label: string,
    /** Column size for medium screens (out of 12) */
    md?: number,
    /** Class name  for the field */
    className?: string,
    /** Field data */
    data: string | undefined,
    /** Change handler */
    handleChange: any,
    /** True the field has been touched */
    touched?: boolean,
    /** Error message associated with the field */
    errors?: string
}

interface TextFieldProps extends FieldProps {
    /** Placeholder text shown in field*/
    placeholder?: string,
    /** The type of the field */
    type?: string,
}

/**
 * Field for text input
 */
export const TextField: FunctionComponent<TextFieldProps> = (props) => {
    const {controlId, label, placeholder, md, className="mb-3", type="text", data, handleChange, touched, errors} = props;

    const isValid = touched && !errors;
    const isInvalid = touched && !!errors;
    const errorMessage = errors;

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

/**
 * Field for currency input
 */
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