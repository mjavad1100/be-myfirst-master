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

<section
  className={`resume ${lang === 'fa' ? 'rtl' : ''}`}
  dir={lang === 'fa' ? 'rtl' : 'ltr'}
>

      <div className="resume__noise"></div>

      <div className="resume__bg"></div>

      <div className="gradient gradient1"></div>
      <div className="gradient gradient2"></div>

      {/* LANGUAGE SWITCH */}

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

      {/* MAIN */}

      <div className="resume__container">

        {/* HERO */}

        <motion.div
          className="resume__hero"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >

          <h1>
            Amirhasan Kashani
          </h1>

          <p>
            VIP Hospitality • Fine Dining • Luxury Events
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

const persianParagraphs = [

  {
    title: "سوابق حرفه‌ای",
    text:
      "اینجانب امیرحسن کاشانی متولد 1383 در تهران. شروع فعالیت حرفه‌ای از کافه رستوران عمارت یار واقع در تئاتر شهر خیابان رشت، سپس همکاری با کافه باغ بارمان. اولین همکاری به عنوان کاپیتان اردر با مجموعه رستوران همراه با راه‌اندازی نیما قاسمیان و شف عمران..."
  },

  {
    title:
      "تجربه رستوران و تیم‌های حرفه‌ای (نیما تیم)",

    text:
      "همکاری زنجیره‌ای با تیم آقای قاسمیان در رستوران میدل با مدیریت محلا شریفی، سپس رستوران‌های زنجیره‌ای فودینو سروستان بخش بیکری به عنوان کاپیتان اردر و هد ویتر تایم صبح..."
  },

  {
    title:
      "رستوران خصوصی بانک سامان",

    text:
      "شروع همکاری حرفه ای با تیم تشریفات و هاسپیتلیتی آقای آرمین پالگانه در رستوران خصوصی رده بالای پرسنل بانک سامان در برج اختصاصی بانک سامان کنار تیم حرفه ای آشپزخانه شف مهیار امین حصاری"
  },

  {
    title:
      "همکاری و برگزاری ایونت های سفارت",

    text:
      "شروع ایونت‌های سفارت نروژ، هند، ژاپن، اسلوونی و نیوزلند به سرپرستی آقای پالگانه و شف هومن الوندی..."
  },

  {
    title:
      "رویدادهای لوکس و برج ریبون",

    text:
      "همکاری اختصاصی به عنوان نیروی تشریفات با برج ریبون مکان برگزاری رویداد های مهم تشریفات ایران..."
  },

  {
    title:
      "تجربه هتل و رستوران",

    text:
      "دعوت از جانب آقای بیژن الوندی مدیر اجرایی هتل آراز برای همکاری در نوروز 1404..."
  },

  {
    title:
      "راندوو پوینت",

    text:
      "همکاری با رستوران راندوو پوینت و تیم آشپزخانه میلاد میدانی به عنوان هد شیفت..."
  },

  {
    title:
      "افتخار همکاری با بزرگان صنعت هاسپیتلیتی",

    text:
      "همکاری با شف میلاد میدانی، شف هومن الوندی، شف تاشکیران، شف کفایت بیگی..."
  },

  {
    title:
      "شرایط کاری حال بنده",

    text:
      "نقش گاردن: همکاری با آقای پالگانه به عنوان نفرات اصلی برای راه اندازی رستوران نقش گاردن..."
  },

  {
    title:
      "توانایی‌های کلیدی",

    text:
      "یکی از مهم‌ترین توانایی‌های بنده در برگزاری ایونت‌ها، گردهم آوردن بهترین نیروهای تشریفات..."
  },

  {
    title:
      "فعالیت‌های همزمان",

    text:
      "همزمان با فعالیت حرفه‌ای در حوزه کافه رستوران، در زمینه آرایشگری و زیبایی نیز فعالیت حرفه‌ای دارم."
  },

];

/* =========================
   ENGLISH
========================= */

const englishParagraphs = [

  {
    title:
      "Professional Background",

    text:
      "Amirhasan Kashani born in Tehran in 2004. Started his professional career at Emarat Yar Café Restaurant..."
  },

  {
    title:
      "Restaurant & Professional Teams",

    text:
      "Collaborated with Nima Ghasemian’s hospitality teams including Middle Restaurant..."
  },

  {
    title:
      "Saman Bank Business Lounge",

    text:
      "Professional collaboration with Armin Palegane’s luxury hospitality team..."
  },

  {
    title:
      "Embassy Events",

    text:
      "Participated in embassy events for Norway, India, Japan, Slovenia and New Zealand..."
  },

  {
    title:
      "Luxury Events & Ribbon Tower",

    text:
      "Worked with Ribbon Tower as luxury hospitality staff for high-end ceremonies..."
  },

  {
    title:
      "Araz Five-Star Hotel",

    text:
      "Invited by Bijan Alavandi executive manager of Araz Hotel during Nowruz 1404..."
  },

  {
    title:
      "Rendezvous Point",

    text:
      "Worked alongside Chef Milad Meydani as Head Shift Supervisor..."
  },

  {
    title:
      "Hospitality Industry Leaders",

    text:
      "Collaborated with major chefs including Chef Hooman Alavandi, Chef Omran..."
  },

  {
    title:
      "Current Position",

    text:
      "Collaborating in launching Naghsh Garden Restaurant under Armin Palegane..."
  },

  {
    title:
      "Key Skills",

    text:
      "Strong ability in gathering elite hospitality staff and coordinating VIP events..."
  },

  {
    title:
      "Additional Activities",

    text:
      "Professional activity in beauty and hairstyling alongside hospitality career..."
  },

];

export default Resume;
