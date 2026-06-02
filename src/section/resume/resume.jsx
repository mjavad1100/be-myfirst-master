'use client';

import './resume.css';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

/* IMAGES */

import Img1 from '../../img/img1.jpg';
import Img2 from '../../img/img2.jpg';
import Img3 from '../../img/img3.jpg';
import Img4 from '../../img/img4.jpg';
import Img5 from '../../img/img5.jpg';
import Img6 from '../../img/img6.jpg';
import Img7 from '../../img/img7.jpg';
import Img8 from '../../img/img8.jpg';
import Img9 from '../../img/img9.jpg';
import Img10 from '../../img/img10.jpg';

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
  const [lang, setLang] = useState('fa');

  const [selectedImage, setSelectedImage] = useState(null);

  const [activeScroll, setActiveScroll] = useState(false);

  const resumeRef = useRef(null);

  const content =
    lang === 'en'
      ? englishParagraphs
      : persianParagraphs;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActiveScroll(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={resumeRef}
        className={`resume ${
          lang === 'fa'
            ? 'rtl'
            : ''
        }`}
        dir={
          lang === 'fa'
            ? 'rtl'
            : 'ltr'
        }
      >
        <div className="resume__noise"></div>
        <div className="resume__grid"></div>

        <div className="resume__gradient gradient1"></div>
        <div className="resume__gradient gradient2"></div>

        {/* LANGUAGE */}

        <motion.div
          className={`resume__langWrap ${
            activeScroll
              ? 'active'
              : ''
          }`}
          initial={{
            opacity: 0,
            y: -40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <div className="resume__lang">
            <button
              className={
                lang === 'en'
                  ? 'active'
                  : ''
              }
              onClick={() => setLang('en')}
            >
              English
            </button>

            <button
              className={
                lang === 'fa'
                  ? 'active'
                  : ''
              }
              onClick={() => setLang('fa')}
            >
              فارسی
            </button>
          </div>
        </motion.div>

        <div className="resume__container">

          {/* HERO */}

          <motion.div
            className="resume__hero"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span>
              Luxury Hospitality Resume
            </span>

            <h1>
              Resume
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

                <div className="resume__cardInner">

                  {/* IMAGE */}

                  <div
                    className="resume__imageWrap"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="resume__imageOverlay"></div>

                    <div className="resume__zoom">
                      ⤢
                    </div>
                  </div>

                  {/* TEXT */}

                  <div className="resume__text">

                    <div className="resume__line"></div>

                    <h2>
                      {item.title}
                    </h2>

                    <p>
                      {item.text}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* MODAL */}

      {selectedImage && (

        <div
          className="resume__modal"
          onClick={() => setSelectedImage(null)}
        >

          <button className="resume__close">
            ×
          </button>

          <img
            src={selectedImage}
            alt="preview"
          />

        </div>

      )}

    </>
  );
};

// ================== PERSIAN ==================

const persianParagraphs = [
  {
    title: 'سوابق حرفه‌ای',
    text:
      'اینجانب امیرحسن کاشانی متولد 1383 در تهران. شروع فعالیت حرفه‌ای از کافه رستوران عمارت یار واقع در تئاتر شهر خیابان رشت، سپس همکاری با کافه باغ بارمان. اولین همکاری به عنوان کاپیتان اردر با مجموعه رستوران همراه با راه‌اندازی نیما قاسمیان و شف عمران...',
    image: Img1,
  },

  {
    title: 'تجربه رستوران و تیم‌های حرفه‌ای (نیما تیم)',
    text:
      'همکاری زنجیره‌ای با تیم آقای قاسمیان در رستوران میدل با مدیریت محلا شریفی، سپس رستوران‌های زنجیره‌ای فودینو سروستان بخش بیکری به عنوان کاپیتان اردر و هد ویتر تایم صبح...',
    image: Img2,
  },

  {
    title: 'رستوران خصوصی بانک سامان',
    text:
      'شروع همکاری حرفه ای با تیم تشریفات و هاسپیتلیتی آقای آرمین پالگانه در رستوران خصوصی رده بالای پرسنل بانک سامان...',
    image: Img3,
  },

  {
    title: 'همکاری و برگزاری ایونت های سفارت',
    text:
      'شروع ایونت‌های سفارت نروژ، هند، ژاپن، اسلوونی و نیوزلند به سرپرستی آقای پالگانه و شف هومن الوندی...',
    image: Img4,
  },

  {
    title: 'رویدادهای لوکس و برج ریبون',
    text:
      'همکاری اختصاصی به عنوان نیروی تشریفات با برج ریبون مکان برگزاری رویداد های مهم تشریفات ایران...',
    image: Img5,
  },

  {
    title: 'تجربه هتل و رستوران (هتل پنج ستاره آراز)',
    text:
      'دعوت از جانب آقای بیژن الوندی مدیر اجرایی هتل آراز برای همکاری در نوروز 1404...',
    image: Img6,
  },

  {
    title: 'راندوو پوینت',
    text:
      'همکاری با رستوران راندوو پوینت و تیم آشپزخانه میلاد میدانی به عنوان هد شیفت...',
    image: Img7,
  },

  {
    title: 'افتخار همکاری با بزرگان صنعت هاسپیتلیتی',
    text:
      'همکاری با شف میلاد میدانی، شف هومن الوندی، شف تاشکیران، شف کفایت بیگی...',
    image: Img8,
  },

  {
    title: 'شرایط کاری حال بنده',
    text:
      'نقش گاردن: همکاری با آقای پالگانه به عنوان نفرات اصلی برای راه اندازی رستوران نقش گاردن...',
    image: Img9,
  },

  {
    title: 'توانایی‌های کلیدی',
    text:
      'یکی از مهم‌ترین توانایی‌های بنده در برگزاری ایونت‌ها، گردهم آوردن بهترین نیروهای تشریفات و هماهنگی اجرایی رویدادها است...',
    image: Img10,
  },

  {
    title: 'فعالیت‌های همزمان',
    text:
      'همزمان با فعالیت حرفه‌ای در حوزه کافه رستوران، در زمینه آرایشگری و زیبایی نیز فعالیت حرفه‌ای دارم.',
    image: Img10,
  },
];

// ================== ENGLISH ==================

const englishParagraphs = persianParagraphs.map((item, i) => ({
  title: [
    'Professional Background',
    'Restaurant & Professional Teams',
    'Saman Bank Business Lounge',
    'Embassy Events',
    'Luxury Events & Ribbon Tower',
    'Araz Five-Star Hotel',
    'Rendezvous Point',
    'Hospitality Industry Leaders',
    'Current Position',
    'Key Skills',
    'Additional Activities',
  ][i],

  text: [
    'Amirhasan Kashani born in Tehran in 2004. Started his professional career at Emarat Yar Café Restaurant...',
    
    'Collaborated with Nima Ghasemian’s hospitality teams including Middle Restaurant...',
    
    'Professional collaboration with Armin Palegane’s luxury hospitality team...',
    
    'Participated in embassy events for Norway, India, Japan, Slovenia and New Zealand...',
    
    'Worked with Ribbon Tower as luxury hospitality staff for high-end ceremonies...',
    
    'Invited by Bijan Alavandi executive manager of Araz Hotel during Nowruz 1404...',
    
    'Worked alongside Chef Milad Meydani as Head Shift Supervisor...',
    
    'Collaborated with major chefs including Chef Hooman Alavandi, Chef Omran...',
    
    'Collaborating in launching Naghsh Garden Restaurant under Armin Palegane...',
    
    'Strong ability in gathering elite hospitality staff and coordinating VIP events...',
    
    'Professional activity in beauty and hairstyling alongside hospitality career...',
  ][i],

  image: item.image,
}));

export default Resume;