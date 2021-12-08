import { FunctionComponent, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Disqualified: FunctionComponent = () => {
    const {state} = useLocation();

    const navigate = useNavigate();
    useEffect(() => {
        if (!state) {
            navigate('/page-not-found');
        }
    }, [state, navigate])   

    return (
        <Container className="disqualified">
            <h2 className="my-4">Sorry you did not qualify</h2>  
            <p>{state?.message}</p>
            <p>For more information, please contact customer service: <a href="tel:5555555555"> (555) 555-5555 </a></p>
        </Container>
        
    );
}
 
export default Disqualified;