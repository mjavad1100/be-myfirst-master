import HeaderImage from '../../img/hassan.jpg';
import './about.css';
import data from './data';

import 'animate.css';

import { AnimationOnScroll } from 'react-animation-on-scroll';

import {
  HiArrowLongRight,
  HiPlay,
  HiMiniStar,
} from 'react-icons/hi2';

const About = () => {
  return (

    <section id="about" className="hero">

      {/* BACKGROUND */}

      <div className="hero__noise"></div>

      <div className="hero__grid"></div>

      <div className="hero__blur hero__blur1"></div>
      <div className="hero__blur hero__blur2"></div>

      {/* SPOTLIGHT */}

      <div className="hero__spotlight"></div>

      {/* CONTAINER */}

      <div className="container hero__container">

        {/* LEFT */}

        <div className="hero__content">

          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce={true}
          >

            {/* TOP */}


            {/* TITLE */}

            <h1 className="hero__title">

              Amir   hassan

              <span>
                Kashani
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="hero__description">

              Hospitality professional specializing in luxury restaurants,
              VIP ceremonies, premium guest experiences, private events
              and fine dining management with years of professional
              activity in Iran’s luxury hospitality industry.

            </p>

            {/* INFO */}

            <div className="hero__info">

              <div>
                <HiMiniStar />
                <span>VIP Event Coordination</span>
              </div>

              <div>
                <HiMiniStar />
                <span>Luxury Hospitality</span>
              </div>

              <div>
                <HiMiniStar />
                <span>Fine Dining Experience</span>
              </div>

            </div>

            {/* BUTTONS */}

            <div className="hero__buttons">

              <a
                href="#contact"
                className="hero__btn primary"
              >

                Contact Me

                <HiArrowLongRight />

              </a>

              <a
                href="/resume"
                className="hero__btn secondary"
              >

                <HiPlay />

                View Resume

              </a>

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

          </AnimationOnScroll>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hero__image">

          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOnce={true}
          >

            <div className="image__wrapper floating">

              {/* GLOW */}


              {/* IMAGE */}

              <img
                src={HeaderImage}
                alt="Amirhasan Kashani"
              />

              {/* OVERLAY */}

              <div className="image__overlay"></div>

            </div>

          </AnimationOnScroll>

        </div>

      </div>

    </section>

  );
};

export default About;
