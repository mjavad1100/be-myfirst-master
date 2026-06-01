'use client';

import './resume.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 70,
  },

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

  const [lang, setLang] = useState('en');

  const content = lang === 'en'
    ? englishParagraphs
    : persianParagraphs;

  return (

    <section className={`resume ${lang === 'fa' ? 'rtl' : ''}`}>

      {/* BACKGROUND */}

      <div className="resume__noise"></div>

      <div className="resume__bg"></div>

      <div className="gradient gradient1"></div>
      <div className="gradient gradient2"></div>

      {/* LANGUAGE TOGGLE */}

      <motion.div
        className="resume__langWrap"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <div className="resume__lang">

          <button
            className={lang === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
          >
            English
          </button>

          <button
            className={lang === 'fa' ? 'active' : ''}
            onClick={() => setLang('fa')}
          >
            فارسی
          </button>

          <div
            className={`resume__langBg ${
              lang === 'fa' ? 'right' : ''
            }`}
          ></div>

        </div>

      </motion.div>

      {/* CONTAINER */}

      <div className="resume__container">

        {/* HERO */}

        <motion.div
          className="resume__hero"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >

          <span>
            Luxury Hospitality Portfolio
          </span>

          <h1>
            Amirhasan Kashani
          </h1>

          <p>
            Hospitality • VIP Events • Luxury Restaurants
          </p>

        </motion.div>

        {/* CONTENT */}

        <div className="resume__content">

          {content.map((item, i) => (

            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="resume__card"
            >

              <div className="resume__cardGlow"></div>

              <div className="resume__cardLine"></div>

              <h2>
                {item.title}
              </h2>

              <p>
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
};

const englishParagraphs = [

  {
    title: 'Professional Background',
    text:
      'Amirhasan Kashani, born in Tehran in 2004, is a hospitality professional specialized in luxury restaurants, VIP ceremonies, private events and premium guest experience management with more than four years of continuous professional experience.',
  },

  {
    title: 'Restaurant Industry Experience',
    text:
      'His journey began at Emarat Yar Café Restaurant near Tehran City Theater, followed by collaborations with Barman Garden Café and hospitality restaurant teams. He later worked as Captain Order and Head Waiter alongside Nima Ghasemian and Chef Omran during multiple restaurant launch projects including Middle Restaurant and Foodino Servestan Bakery.',
  },

  {
    title: 'VIP Hospitality & Embassy Events',
    text:
      'Amirhasan entered the professional hospitality and ceremony industry through collaboration with Armin Palegane’s hospitality team at the private restaurant of Saman Bank Tower. During this period he participated in luxury embassy ceremonies for Norway, India, Japan and Slovenia alongside Chef Hooman Alavandi and Chef Mahyar Amin Hessari.',
  },

  {
    title: 'Luxury Event Operations',
    text:
      'He continuously collaborated as one of the core members of Armin Palegane’s ceremony team and worked professionally at Ribbon Tower, one of Iran’s premium luxury event venues, participating in exclusive VIP ceremonies and high-level private gatherings.',
  },

  {
    title: 'Hotel & Fine Dining Experience',
    text:
      'He joined Araz Hotel during Nowruz 2025 under the invitation of executive manager Bijan Alavandi and collaborated in the launch and management of Caspi Restaurant on the 24th floor of the hotel. He later worked again with Araz Hotel as Assistant Hospitality Team Manager during the hotel’s peak operational season.',
  },

  {
    title: 'Current Activities',
    text:
      'Currently, Amirhasan Kashani is collaborating with Armin Palegane as part of the core launch team for Naghsh Negar Restaurant located at the Iranian Garden Museum under the management of Mr. Nikpour. He also remains actively involved in luxury private events and high-end hospitality projects.',
  },

  {
    title: 'Leadership & Coordination',
    text:
      'One of his strongest professional abilities is gathering and coordinating elite hospitality personnel for luxury ceremonies and private events. Alongside event operations, he is also responsible for coordination and executive supervision of hospitality teams.',
  },

  {
    title: 'Additional Professional Activity',
    text:
      'Alongside the restaurant and hospitality industry, Amirhasan is also professionally active in the beauty and hairstyling industry.',
  },

];

const persianParagraphs = [

  {
    title: 'سوابق حرفه‌ای',
    text:
      'اینجانب امیرحسن کاشانی متولد ۱۳۸۳ در تهران، دارای بیش از چهار سال فعالیت حرفه‌ای در حوزه رستوران، تشریفات، ایونت‌های خصوصی و مدیریت هاسپیتلیتی لوکس می‌باشم.',
  },

  {
    title: 'شروع فعالیت حرفه‌ای',
    text:
      'شروع فعالیت حرفه‌ای بنده از کافه رستوران عمارت یار واقع در تئاتر شهر تهران بود و سپس همکاری با کافه باغ بارمان و تیم‌های حرفه‌ای رستورانی ادامه پیدا کرد. در ادامه به عنوان کاپیتان اردر و هد ویتر در پروژه‌های راه‌اندازی رستوران همراه با نیما قاسمیان و شف عمران فعالیت داشتم.',
  },

  {
    title: 'تشریفات و سفارت‌ها',
    text:
      'ورود حرفه‌ای بنده به حوزه تشریفات و هاسپیتلیتی از طریق همکاری با تیم آقای آرمین پالگانه در رستوران خصوصی برج سامان شکل گرفت. در این دوره در ایونت‌ها و مراسم سفارت‌های نروژ، هند، ژاپن و اسلوانی حضور داشتم و با شف هومن الوندی و شف مهیار امین حصاری همکاری کردم.',
  },

  {
    title: 'ایونت‌های لاکچری',
    text:
      'به عنوان یکی از اعضای اصلی تیم تشریفات آقای پالگانه، در مراسم‌ها و ایونت‌های خصوصی سطح بالا و همچنین مجموعه ریبون که از مهم‌ترین لوکیشن‌های تشریفاتی ایران محسوب می‌شود، همکاری مستمر داشته‌ام.',
  },

  {
    title: 'هتل آراز و فاین داینینگ',
    text:
      'در نوروز ۱۴۰۴ به دعوت آقای بیژن الوندی به تیم هتل آراز پیوستم و در افتتاح و مدیریت رستوران کسپی طبقه ۲۴ هتل مشارکت داشتم. همچنین مجدداً به عنوان دستیار مدیریت تیم تشریفات در بازه پیک هتل با مدیریت مجموعه همکاری نمودم.',
  },

  {
    title: 'فعالیت‌های فعلی',
    text:
      'در حال حاضر به عنوان یکی از اعضای اصلی تیم راه‌اندازی رستوران نقش نگار در باغ موزه ایرانی با مدیریت آقای نیک‌پور و همکاری آقای پالگانه فعالیت می‌کنم و همزمان در برگزاری ایونت‌های خصوصی سطح بالا حضور دارم.',
  },

  {
    title: 'توانایی مدیریتی',
    text:
      'از مهم‌ترین توانایی‌های حرفه‌ای بنده، گردهم جمع کردن بهترین نیروهای تشریفات برای برگزاری ایونت‌ها و مدیریت هماهنگی تیم‌های هاسپیتلیتی در رویدادهای خصوصی و VIP می‌باشد.',
  },

  {
    title: 'فعالیت جانبی',
    text:
      'همزمان با فعالیت حرفه‌ای در صنعت رستوران و هاسپیتلیتی، در حوزه آرایشگری و زیبایی نیز به صورت حرفه‌ای فعالیت دارم.',
  },

];

export default Resume;