import './portfolio.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFillCameraFill} from 'react-icons/bs';
import {MdLocalMovies} from 'react-icons/md';
import {AiFillPicture} from 'react-icons/ai';
import { AnimationOnScroll } from 'react-animation-on-scroll';




const Portfolio = () => {
    return (
        <section id='portfolio'>
                        <Container>
                <div className="mytitle">
                    <Row>
                        <Col>
                        <h1>Services</h1>
                        </Col>
                    </Row>
                </div>
                <Row className='myportfolio'>
                    <Col xs={12}  md={4}>
                    <AnimationOnScroll animateIn="animate__slideInRight">
                        <div className='myparent'>
                    <div className='myform'>
                    <a href='#portfolio'><BsFillCameraFill className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>Photographer
                    </h2>
                    <p>Photography of products and services of companies.</p>
                    </div>
                    </div>
                    </AnimationOnScroll>
                    </Col>
                    <Col xs={12} md={4}>
                    <AnimationOnScroll animateIn="animate__slideInUp">
                        <div className="myparent">
                    <div className='myform'>
                    <a href='#portfolio'><MdLocalMovies className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>Direct
                    </h2>
                    <p>Producing advertising and industrial teasers of products,</p>
                    </div>
                    </div>
                    </AnimationOnScroll>
                    </Col>
                    <Col xs={12}  md={4}>
                    <AnimationOnScroll animateIn="animate__slideInLeft">
                        <div className="myparent">
                    <div className='myform'>
                    <a href='#portfolio'><AiFillPicture className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>Compilation</h2>
                    <p>Design and printing of packaging, product labels, catalogues, </p>
                    </div>
                    </div>
                    </AnimationOnScroll>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;
