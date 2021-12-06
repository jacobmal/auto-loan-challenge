import { FunctionComponent } from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";

interface FieldProps {
    controlId: string,
    label: string,
    md?: number,
    className?: string,
    setData: React.Dispatch<React.SetStateAction<string>>,
    data: string | undefined,
}

interface TextFieldProps extends FieldProps {
    placeholder?: string,
    type?: string,
}
 
export const TextField: FunctionComponent<TextFieldProps> = (props) => {
    const {controlId, label, placeholder, md, className="mb-3", type="text", setData, data} = props;

    return (  
        <Form.Group as={Col} md={md} className={className} controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control required type={type} placeholder={placeholder} value={data} onChange={(e) => setData(e.target.value)} />
        </Form.Group>
    );
}

interface CurrencyFieldProps extends FieldProps {
}
 
export const CurrencyField: FunctionComponent<CurrencyFieldProps> = (props) => {
    const {controlId, label, md, className="mb-3", setData, data} = props;
    
    return (
        <Form.Group as={Col} md={md} className={className}>
            <Form.Label>{label}</Form.Label>
            <InputGroup id={controlId}>
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl required aria-label="Amount" value={data} onChange={(e) => {
                    const value = e.target.value;
                    if (value && !Number(value)) {
                        return;
                    }
                    setData(value);
                }} />
            </InputGroup>
    </Form.Group>
    );
}