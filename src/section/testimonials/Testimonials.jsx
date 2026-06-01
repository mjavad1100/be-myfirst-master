import './testimonials.css';
import 'swiper/css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Myteam from '../../components/myteam/Myteam';
import myteam1 from '../../img/eris.jpg'
import myteam2 from '../../img/team2.jpg'
import myteam3 from '../../img/team3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

const Testimonials = () => {
    // Create an array of image imports

    return (
        <section id='testimonials'>
            <Container>
                <div className="mytitle1">
                    <Row>
                        <Col>
                            <h1>Our Team</h1>
                        </Col>
                    </Row>
                </div>
                    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
                    <SwiperSlide><Myteam image={myteam1} Name={"Mohammad Ebrahimi"} Job={"Group Manager"} /></SwiperSlide>
                    <SwiperSlide><Myteam image={myteam2} Name={"Tina Ghorbanian"} Job={"Editor"} /></SwiperSlide>
                    <SwiperSlide><Myteam image={myteam3} Name={"Abbas Boazar"} Job={"Director"} /></SwiperSlide>
                    {/* Map over the array and pass each image as a prop
                {teamImages.map(image => (
                    <Col><Myteam image={image} Name={"محمدرضا ابراهیمی"} Job={"مدیر گروه"}/></Col>
                ))} */}
                 </Swiper>


            </Container>
        </section>
    );
};

export default Testimonials;
