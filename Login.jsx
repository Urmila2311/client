
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export function Login()
{
    return(
                    <Container className="mt-5">
                      <Row >
                        <Col className="mt-5">
                            <div className="mt-5" ><p> <b>Login</b></p></div>
                        
                         <FloatingLabel controlId="floatingInputEmail" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                         </FloatingLabel>
                         <FloatingLabel controlId="floatingInputPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                         </FloatingLabel>
                        
                        </Col>
                      </Row>
                    </Container>
            
        
    );
}