'use client';

import './resume.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiLanguage } from 'react-icons/hi2';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: (i = 1) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.05,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Resume = () => {
  const [lang, setLang] = useState('en');

  const content =
    lang === 'en'
      ? englishParagraphs
      : persianParagraphs;

  return (
    <section
      className={`resume ${
        lang === 'fa' ? 'rtl' : ''
      }`}
    >
      {/* BACKGROUND */}

      <div className="resume__noise"></div>

      <div className="resume__grid"></div>

      <div className="resume__gradient resume__gradient1"></div>
      <div className="resume__gradient resume__gradient2"></div>

      {/* LANGUAGE */}

      <motion.div
        className="resume__topbar"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="resume__langSwitcher">

          <button
            onClick={() => setLang('en')}
            className={lang === 'en' ? 'active' : ''}
          >
            <span>EN</span>
          </button>

          <button
            onClick={() => setLang('fa')}
            className={lang === 'fa' ? 'active' : ''}
          >
            <span>FA</span>
          </button>

          <div className="resume__langIcon">
            <HiLanguage />
          </div>

        </div>
      </motion.div>

      {/* HERO */}

      <div className="resume__container">

        <motion.div
          className="resume__hero"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >

          <motion.div
            className="resume__badge"
            variants={fadeUp}
          >
            Luxury Hospitality Portfolio
          </motion.div>

          <motion.h1
            variants={fadeUp}
          >
            Amirhasan
            <br />
            Kashani
          </motion.h1>

          <motion.p
            variants={fadeUp}
          >
            VIP Hospitality • Fine Dining •
            Luxury Events • Executive Service
          </motion.p>

        </motion.div>

        {/* CONTENT */}

        <div className="resume__content">

          <AnimatePresence mode="wait">

            {content.map((item, i) => (

              <motion.div
                key={`${lang}-${i}`}
                className="resume__card"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
              >

                <div className="resume__cardBlur"></div>

                <div className="resume__cardNumber">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.text}
                </p>

              </motion.div>

            ))}

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
};

export default Resume;

/* ========================= */
/* ENGLISH */
/* ========================= */

const englishParagraphs = [

  {
    title: 'Professional Background',
    text:
      'Amirhasan Kashani is a luxury hospitality professional with extensive experience in fine dining, VIP ceremonies, restaurant operations and luxury event management.',
  },

  {
    title: 'Restaurant Experience',
    text:
      'His journey began with professional restaurant collaborations in Tehran including Emarat Yar Café, Barman Garden Café and multiple hospitality projects alongside elite restaurant teams.',
  },

  {
    title: 'Luxury Hospitality',
    text:
      'He has worked within executive hospitality environments including Saman Bank private business lounge and multiple embassy ceremonies and diplomatic events.',
  },

  {
    title: 'Embassy Events',
    text:
      'Amirhasan participated in high-level events for Norway, India, Japan, Slovenia and New Zealand embassies alongside luxury hospitality teams.',
  },

  {
    title: 'Luxury Event Operations',
    text:
      'Professional collaborations with Ribbon Tower, Aston Showroom, Iran Mall and private luxury ceremonies became part of his executive hospitality background.',
  },

  {
    title: 'Araz Five-Star Hotel',
    text:
      'He joined Araz Hotel during the launch of Caspi Restaurant and later worked within the hospitality management team during peak hotel operations.',
  },

  {
    title: 'Leadership Skills',
    text:
      'One of his strongest abilities is organizing elite hospitality teams for luxury events and managing high-pressure executive operations.',
  },

  {
    title: 'Current Position',
    text:
      'Currently he is part of the launch and hospitality operations team for Naghsh Garden Restaurant located in the Iranian Garden Museum.',
  },

];

/* ========================= */
/* PERSIAN */
/* ========================= */

const persianParagraphs = [

  {
    title: 'سوابق حرفه‌ای',
    text:
      'امیرحسن کاشانی دارای سابقه حرفه‌ای در حوزه هاسپیتلیتی، فاین داینینگ، تشریفات VIP و مدیریت رویدادهای لاکچری می‌باشد.',
  },

  {
    title: 'تجربه رستورانی',
    text:
      'فعالیت حرفه‌ای ایشان از همکاری با مجموعه‌های رستورانی تهران از جمله عمارت یار، باغ بارمان و تیم‌های حرفه‌ای هاسپیتلیتی آغاز شد.',
  },

  {
    title: 'هاسپیتلیتی لوکس',
    text:
      'همکاری در لانژ اختصاصی بانک سامان و پروژه‌های تشریفاتی سطح بالا بخشی مهم از رزومه حرفه‌ای ایشان محسوب می‌شود.',
  },

  {
    title: 'ایونت‌های سفارت',
    text:
      'حضور در مراسم‌ها و ایونت‌های سفارت‌های نروژ، هند، ژاپن، اسلوونی و نیوزلند در کنار تیم‌های حرفه‌ای تشریفات از تجربیات مهم ایشان است.',
  },

  {
    title: 'رویدادهای لاکچری',
    text:
      'همکاری حرفه‌ای با برج ریبون، ایران مال، شوروم آستون و ایونت‌های خصوصی سطح بالا بخشی از فعالیت‌های اجرایی ایشان بوده است.',
  },

  {
    title: 'هتل پنج ستاره آراز',
    text:
      'همکاری در افتتاح رستوران کسپی و مدیریت تیم تشریفات هتل آراز در بازه پیک کاری از مهم‌ترین تجربیات ایشان می‌باشد.',
  },

  {
    title: 'مهارت‌های مدیریتی',
    text:
      'توانایی مدیریت تیم‌های تشریفات، هماهنگی اجرایی و کنترل رویدادهای VIP از نقاط قوت حرفه‌ای ایشان است.',
  },

  {
    title: 'فعالیت فعلی',
    text:
      'در حال حاضر در تیم راه‌اندازی و مدیریت تشریفات رستوران نقش گاردن در باغ موزه ایرانی فعالیت دارند.',
  },

];