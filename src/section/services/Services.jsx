import './services.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardSlide from './CardSlide';
import { data } from './data';



import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




const Services = () => {


    return (
        <section>

            <Container>
                <div className="mytitle2">
                    <Row>
                        <Col>
                            <h1>Portfolio</h1>
                        </Col>
                    </Row>
                </div>
                <Tabs
                    defaultActiveKey="home"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="home" title="Photographer" tabClassName='colortab'>
                        <Row>
                            <Col xs={12} sm={4} md={8}>

                                <CardSlide data={data} key={data[0].id} image={data[0].image} title={data[0].title} />

                            </Col>
                            <Col xs={12} sm={4} md={4}>
                                <CardSlide data={data} key={data[1].id} image={data[1].image} title={data[1].title} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={4} md={4}>
                                <CardSlide data={data} key={data[2].id} image={data[2].image} title={data[2].title} />
                            </Col>
                            <Col xs={12} sm={4} md={4}>
                                <CardSlide data={data} key={data[3].id} image={data[3].image} title={data[3].title} />
                            </Col>
                            <Col xs={12} sm={4} md={4}>
                                <CardSlide data={data} key={data[4].id} image={data[4].image} title={data[4].title} />
                            </Col>
                            <Col xs={12} sm={4} md={6}>
                                <CardSlide data={data} key={data[7].id} image={data[5].image} title={data[7].title} />
                            </Col>
                            <Col xs={12} sm={4} md={6}>
                                <CardSlide data={data} key={data[7].id} image={data[6].image} title={data[7].title} />
                            </Col>
                        </Row>

                    </Tab>
                    <Tab eventKey="profile" title="Direct" tabClassName='colortab'>
                        <Row>
                            <Col xs={12} sm={4} md={4}>
                                <CardSlide data={data} key={data[6].id} image={data[6].image} title={data[6].title} />
                            </Col>
                            <Col xs={12} sm={4} md={4}>
                                <CardSlide data={data} key={data[7].id} image={data[7].image} title={data[7].title} />
                            </Col>
                            <Col xs={12} sm={4} md={4}>
                                <CardSlide data={data} key={data[8].id} image={data[8].image} title={data[8].title} />
                            </Col>


                        </Row>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Compilation" tabClassName='colortab'>
                        <Row>
                            <Col xs={12} sm={4} md={4}>
                                <CardSlide data={data} key={data[0].id} image={data[0].image} title={data[0].title} />
                            </Col>
                            <Col xs={12} sm={4} md={4}>
                                <CardSlide data={data} key={data[1].id} image={data[1].image} title={data[1].title} />

                            </Col>
                            <Col xs={12} sm={4} md={4}>
                                <CardSlide data={data} key={data[7].id} image={data[7].image} title={data[7].title} />

                            </Col>


                        </Row>
                    </Tab>
                </Tabs>


            </Container>
        </section>

    );
};

export default Services;