import HeaderImage from '../../img/hassan.jpg';
import './about.css';
import data from './data';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  HiArrowLongRight,
  HiSparkles,
} from 'react-icons/hi2';

const About = () => {
  return (
    <section id="about" className="hero">

      <div className="hero__grid"></div>

      <div className="hero__blur hero__blur1"></div>
      <div className="hero__blur hero__blur2"></div>
      <div className="hero__blur hero__blur3"></div>

      <div className="container hero__container">

        {/* IMAGE TOP */}

        <div className="hero__imageTop">

          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce
          >

            <div className="image__wrapper">

              <div className="image__ring"></div>
              <div className="image__ring ring2"></div>
              <div className="image__ring ring3"></div>

              <div className="image__gradient"></div>

              <img
                src={HeaderImage}
                alt="Amir Hasan Kochak Kashani"
              />

              <div className="floating__card card1">
                <span>✨</span>
                Wedding Design
              </div>

              <div className="floating__card card2">
                <span>🥂</span>
                VIP Events
              </div>

              <div className="floating__card card3">
                <span>👑</span>
                Royal Style
              </div>

            </div>

          </AnimationOnScroll>

        </div>

        {/* CONTENT */}

        <div className="hero__content">

          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
          >

            <div className="hero__top">

              <div className="hero__badge">
                <HiSparkles />
                Luxury Ceremony Designer
              </div>

              <div className="hero__line"></div>

            </div>

            <h1 className="hero__title">
              Amir Hasan
              <span> Kochak </span>
              Kashani
            </h1>

            <p className="hero__description">
              Creating unforgettable luxury weddings,
              royal celebrations, premium event experiences
              and elegant atmospheres with a modern artistic
              vision and cinematic execution.
            </p>

            <div className="hero__stats">

              <div className="hero__stat">
                <h3>120+</h3>
                <p>Luxury Events</p>
              </div>

              <div className="hero__stat">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="hero__stat">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>

            </div>

            <div className="hero__buttons">

              <a
                href="#contact"
                className="hero__btn primary"
              >
                Book Consultation
                <HiArrowLongRight />
              </a>

              <a
                href="/resume"
                className="hero__btn secondary"
              >
                View Portfolio
              </a>

            </div>

            <div className="hero__socials">

              {data.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}

            </div>

          </AnimationOnScroll>

        </div>

      </div>

    </section>
  );
};

export default About;