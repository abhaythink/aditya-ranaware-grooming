import "./App.css";
import { Alert, Breadcrumb, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label >Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@gmail.com" />
                  <Form.Text className="text-white" style={{fontSize:16}}>
                    We'll never share your email Address,Trust Us!!!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="light">Login</Button>
          </Form>

          <Card className="mb-4" style={{ padding: 20 }}>
            <Card.Img src="https://picsum.photos/seed/picsum/200/100" />
            <Card.Body>
              <Card.Title>card Example</Card.Title>
              <Card.Text>This an Example of boostrap card</Card.Text>
            </Card.Body>
          </Card>

          <Breadcrumb>
            <Breadcrumb.Item>test1</Breadcrumb.Item>
            <Breadcrumb.Item>test2</Breadcrumb.Item>
            <Breadcrumb.Item active>test3</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant="secondary">Alert</Alert>
          <Button>test</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
