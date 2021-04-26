import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import NavigationBar from './NavigationBar';

const Layout = ({ children }) => (
  <Container fluid={true}>
    <Row>
      <Col md={2} className="nav-container">
        <NavigationBar />
      </Col>
      <Col md={10} className="main-container">
        {children}
      </Col>
    </Row>
  </Container>
);

export default Layout;
