
import HeaderImage from '../../img/hassan.jpg';
import './about.css';
import data from './data';
import 'animate.css';

import { AnimationOnScroll } from 'react-animation-on-scroll';

import {
  HiArrowLongRight,
  HiSparkles,
  HiPlay,
} from 'react-icons/hi2';

const About = () => {
  return (
    <section id="about" className="hero">

      {/* BACKGROUND */}

      <div className="hero__grid"></div>

      <div className="hero__blur hero__blur1"></div>
      <div className="hero__blur hero__blur2"></div>
      <div className="hero__blur hero__blur3"></div>

      {/* CONTAINER */}

      <div className="container hero__container">

        {/* LEFT CONTENT */}

        <div className="hero__content">

          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
          >

            {/* TOP */}

            <div className="hero__top">

              <div className="hero__topLeft">

                <div className="hero__badge">
                  <HiSparkles />
                  Luxury Ceremony Designer
                </div>

                <div className="hero__line"></div>

              </div>

              {/* SOCIALS */}

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

            </div>

            {/* TITLE */}

            <h1 className="hero__title">
              Amir Hasan
              <span> Kochak </span>
              Kashani
            </h1>

            {/* DESCRIPTION */}

            <p className="hero__description">
              Creating unforgettable luxury weddings,
              royal celebrations, cinematic ceremonies,
              exclusive VIP experiences and elegant modern
              atmospheres with artistic vision and premium execution.
            </p>

            {/* STATS */}

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

            {/* BUTTONS */}

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
                <HiPlay />
                View Portfolio
              </a>

            </div>

          </AnimationOnScroll>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hero__image">

          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce
          >

            <div className="image__wrapper">

              <div className="image__overlay"></div>

              <div className="image__shine"></div>

              <img
                src={HeaderImage}
                alt="Amir Hasan Kochak Kashani"
              />

              {/* FLOATING CARDS */}

              <div className="floating__card card1">
                ✨ Wedding Design
              </div>

              <div className="floating__card card2">
                🥂 VIP Events
              </div>

              <div className="floating__card card3">
                👑 Royal Style
              </div>

            </div>

          </AnimationOnScroll>

        </div>

      </div>

    </section>
  );
};

export default About;

