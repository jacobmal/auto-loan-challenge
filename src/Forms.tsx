import { FunctionComponent } from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";

interface FieldProps {
    controlId: string,
    label: string,
    md?: number,
    className?: string
}

interface TextFieldProps extends FieldProps {
    placeholder?: string,
    type?: string
}
 
export const TextField: FunctionComponent<TextFieldProps> = (props) => {
    const {controlId, label, placeholder, md, className="mb-3", type="text"} = props;

    return (  
        <Form.Group as={Col} md={md} className={className} controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
    );
}

interface CurrencyFieldProps extends FieldProps {
    
}
 
export const CurrencyField: FunctionComponent<CurrencyFieldProps> = (props) => {
    const {controlId, label, md, className="mb-3"} = props;
    
    return (
        <Form.Group as={Col} md={md} className={className}>
            <Form.Label>{label}</Form.Label>
            <InputGroup id={controlId}>
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl aria-label="Amount" />
            </InputGroup>
    </Form.Group>
    );
}