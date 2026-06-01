import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data';
import './headertop.css';
function Headertop() {
  return (
    <div className='background'>
    <Container>
      <Row>
        {/* <Col className='contact__dor'>
       <a className='themecolor'><IoIosColorPalette/></a>
        </Col> */}
        <Col>
        <div className="header__socialss">
              {
                data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a> )
              }
            </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Headertop;