import HeaderImage from '../../img/hassan.jpg';
import './about.css';
import data from './data';

import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
  return (
    <section id="about" className="hero">

      {/* BACKGROUND FX */}
      <div className="hero__noise"></div>
      <div className="hero__grid"></div>
      <div className="hero__blur hero__blur1"></div>
      <div className="hero__blur hero__blur2"></div>
      <div className="hero__spotlight"></div>

      {/* CONTAINER */}
      <div className="container hero__container">

        {/* LEFT CONTENT */}
        <div className="hero__content">

          <h1 className="hero__title">
            Amir Hassan
            <span>Kashani</span>
          </h1>

          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce={true}
          >

            <p className="hero__description">
              Hospitality professional specializing in luxury restaurants,
              VIP ceremonies, premium guest experiences, private events
              and fine dining management with years of professional
              experience in Iran’s luxury hospitality industry.
            </p>

            {/* STATS */}
            <div className="hero__stats">

              <div>
                <strong>4+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Luxury Events</span>
              </div>

              <div>
                <strong>VIP</strong>
                <span>Guest Experience</span>
              </div>

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

              {/* PREMIUM EFFECTS */}
              <div className="image__border"></div>
              <div className="image__shine"></div>

              {/* FLOATING BADGES */}
              <div className="floating__badge badge1">
                Luxury Hospitality
              </div>

              <div className="floating__badge badge2">
                VIP Events
              </div>

              <img
                src={HeaderImage}
                alt="Amir Hassan Kashani"
              />

              <div className="image__overlay"></div>

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

          </AnimationOnScroll>

        </div>

      </div>

    </section>
  );
};

export default About;