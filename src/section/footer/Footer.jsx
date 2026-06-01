import { Container, Row, Col } from 'react-bootstrap';
import data from './data';
import './footer.css';

const Footer = () => {
    return (
        <section id='footer'>
            <Container>
                <Row className='myparenttarget'>
                    <Col>
                        <div>
                            <h2>services</h2>
                            <ul className='myul'>
                                <li><a>Direct</a></li>
                                <li><a>Photofrapher</a></li>
                                <li><a>Compilation</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>about us</h2>
                            <ul className='myul'>
                                <li><a>Direct</a></li>
                                <li><a>Photofrapher</a></li>
                                <li><a>Compilation</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div>
                            <h2>contact us</h2>
                            <div className="footer__socialss">
                                {
                                    data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
                                }
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Footer;