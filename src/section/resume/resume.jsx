'use client';

import './resume.css';
import { motion } from 'framer-motion';

import {
  HiSparkles,
  HiStar,
} from 'react-icons/hi2';

const fadeUp = {
  hidden: { opacity: 0, y: 80 },

  visible: (i = 1) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.08,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Resume = () => {
  return (
    <section className="resume">

      {/* BACKGROUND */}

      <div className="resume__noise"></div>

      <div className="resume__bg"></div>

      <div className="resume__gradient gradient1"></div>
      <div className="resume__gradient gradient2"></div>

      {/* FLOATING ORBS */}

      <div className="resume__orb orb1"></div>
      <div className="resume__orb orb2"></div>

      <div className="container resume__container">

        {/* HERO */}

        <motion.div
          className="resume__hero"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >

          <div className="resume__top">

            <div className="resume__line"></div>

            <div className="resume__badge">
              <HiSparkles />
              Luxury Hospitality Portfolio
            </div>

          </div>

          <h1>
            Amirhasan
            <span> Kashani</span>
          </h1>

          <p>
            متخصص حرفه‌ای هاسپیتلیتی، تشریفات VIP و مدیریت
            ایونت‌های لوکس با سابقه همکاری در مجموعه‌های
            سطح بالا، هتل‌های لاکچری، سفارت‌ها و مراسم‌های
            اختصاصی ایران.
          </p>

        </motion.div>

        {/* STATS */}

        <div className="resume__stats">

          {[
            ['4.5+', 'Years Experience'],
            ['50+', 'VIP Events'],
            ['10+', 'Luxury Brands'],
            ['100%', 'Professionalism'],
          ].map((item, i) => (
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="stat__box"
              key={i}
            >

              <div className="stat__blur"></div>

              <HiStar className="stat__icon" />

              <h2>{item[0]}</h2>

              <span>{item[1]}</span>

            </motion.div>
          ))}

        </div>

        {/* GRID */}

        <div className="resume__grid">

          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`resume__card ${card.large ? 'large' : ''}`}
            >

              <div className="card__shine"></div>

              <div className="card__number">
                0{i + 1}
              </div>

              <span>{card.label}</span>

              <h2>{card.title}</h2>

              <div className="card__content">

                {card.texts.map((t, index) => (
                  <p key={index}>{t}</p>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

        {/* FOOTER */}

        <motion.div
          className="resume__footer"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <div className="footer__glow"></div>

          <h2>Amirhasan Kashani</h2>

          <p>
            Luxury Hospitality • VIP Events • Ceremony Management
          </p>

          <a href="/">
            Book Consultation
          </a>

        </motion.div>

      </div>

    </section>
  );
};

const cards = [
  {
    label: 'Beginning',

    title: 'شروع مسیر حرفه‌ای',

    large: true,

    texts: [
      'فعالیت حرفه‌ای خود را از کافه رستوران عمارت یار آغاز نمودم.',

      'سپس همکاری خود را با مجموعه‌های حرفه‌ای صنعت رستوران ادامه دادم.',

      'فعالیت تخصصی به عنوان کاپیتان اردر و هدویتر در مجموعه‌های مطرح.',
    ],
  },

  {
    label: 'VIP Hospitality',

    title: 'بانک سامان • آرمین پالگانه',

    texts: [
      'همکاری تخصصی در بخش هاسپیتلیتی و تشریفات VIP.',

      'حضور در رویدادهای رسمی و مراسم سفارت‌های معتبر.',
    ],
  },

  {
    label: 'Luxury Events',

    title: 'Ribbon Tower • Private Events',

    texts: [
      'همکاری در ایونت‌های خصوصی و لاکچری سطح بالا.',

      'هماهنگی با تیم‌های حرفه‌ای تشریفات ایران.',
    ],
  },

  {
    label: 'Hotel Experience',

    title: 'هتل آراز • رستوران کسپی',

    large: true,

    texts: [
      'همکاری تخصصی در افتتاحیه و مدیریت تشریفات.',

      'دستیار مدیریت تیم هاسپیتلیتی در دوران پیک هتل.',
    ],
  },

  {
    label: 'Leadership',

    title: 'مدیریت تیم تشریفات',

    texts: [
      'مدیریت، هماهنگی و هدایت نیروهای VIP و تشریفات حرفه‌ای.',
    ],
  },

  {
    label: 'Professional Collaborations',

    title: 'همکاری با شف‌ها و برندهای حرفه‌ای',

    large: true,

    texts: [
      'همکاری با شف‌های مطرح و تیم‌های تخصصی صنعت غذا و هاسپیتلیتی.',
    ],
  },
];

export default Resume;
