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
// ================== PERSIAN ==================

const persianParagraphs = [
  {
    title: 'سوابق حرفه‌ای',
    text:
      'اینجانب امیرحسن کاشانی متولد سال ۱۳۸۳ در تهران هستم. فعالیت حرفه‌ای خود را در حوزه کافه و رستوران از مجموعه کافه رستوران عمارت یار واقع در محدوده تئاتر شهر و خیابان رشت آغاز کردم. پس از کسب تجربه در زمینه سرویس‌دهی، ارتباط با مشتری و اصول هاسپیتلیتی، همکاری خود را با کافه باغ بارمان ادامه دادم. اولین فعالیت جدی و حرفه‌ای بنده به عنوان کاپیتان اردر در کنار تیم‌های حرفه‌ای آقای نیما قاسمیان و شف عمران شکل گرفت. این دوره نقطه شروع یادگیری اصول سرویس لاکچری، مدیریت سالن، برخورد حرفه‌ای با مهمانان VIP و هماهنگی تیمی در فضای حرفه‌ای رستوران بود.',
    image: Img1,
  },

  {
    title: 'تجربه رستوران و تیم‌های حرفه‌ای (نیما تیم)',
    text:
      'همکاری مستمر بنده با تیم‌های حرفه‌ای آقای نیما قاسمیان در چندین پروژه و مجموعه رستورانی شکل گرفت. یکی از مهم‌ترین این تجربیات، فعالیت در رستوران میدل با مدیریت خانم محلا شریفی بود. پس از آن در مجموعه رستوران‌های زنجیره‌ای فودینو سروستان، در بخش بیکری به عنوان کاپیتان اردر و هد ویتر شیفت صبح فعالیت داشتم. این تجربه‌ها باعث تقویت مهارت‌های بنده در مدیریت نیرو، ارتباط با مشتری، هماهنگی سرویس و حفظ کیفیت خدمات در شرایط شلوغ و حرفه‌ای شد.',
    image: Img2,
  },

  {
    title: 'رستوران خصوصی بانک سامان',
    text:
      'شروع همکاری حرفه‌ای بنده با تیم تشریفات و هاسپیتلیتی آقای آرمین پالگانه در رستوران خصوصی ویژه مدیران و پرسنل ارشد بانک سامان، یکی از مهم‌ترین مراحل مسیر حرفه‌ای من بود. فضای کاری این مجموعه در سطح بسیار حرفه‌ای و لوکس قرار داشت و استانداردهای بالایی در زمینه تشریفات، پذیرایی رسمی و مدیریت مهمانان VIP رعایت می‌شد. حضور در این مجموعه باعث شد تجربه ارزشمندی در زمینه سرویس رسمی، رفتار سازمانی، نظم کاری و مدیریت مهمانان سطح بالا کسب کنم.',
    image: Img3,
  },

  {
    title: 'همکاری و برگزاری ایونت‌های سفارت',
    text:
      'بنده در برگزاری و اجرای ایونت‌ها و مراسم‌های رسمی سفارت‌های نروژ، هند، ژاپن، اسلوونی و نیوزلند همکاری داشتم. این رویدادها تحت سرپرستی آقای پالگانه و شف هومن الوندی برگزار می‌شد و نیازمند دقت بالا، رفتار حرفه‌ای، هماهنگی تیمی و رعایت کامل اصول تشریفات بین‌المللی بود. تجربه حضور در چنین مراسم‌هایی باعث شد مهارت بنده در مدیریت مهمانان خارجی، رعایت استانداردهای جهانی سرویس و فعالیت در محیط‌های دیپلماتیک تقویت شود.',
    image: Img4,
  },

  {
    title: 'رویدادهای لوکس و برج ریبون',
    text:
      'همکاری اختصاصی بنده با برج ریبون به عنوان نیروی تشریفات و هاسپیتلیتی در رویدادها و مراسم‌های سطح بالای ایران انجام شد. برج ریبون یکی از مهم‌ترین مکان‌های برگزاری ایونت‌های لوکس، مراسم‌های رسمی و گردهمایی‌های VIP به شمار می‌رود. در این مجموعه مسئولیت‌هایی مانند پذیرایی رسمی، مدیریت مهمانان ویژه، هماهنگی اجرایی و حفظ کیفیت سرویس بر عهده بنده بود. این تجربه نقش مهمی در افزایش توانایی بنده برای فعالیت در فضاهای لوکس و پر فشار داشت.',
    image: Img5,
  },

  {
    title: 'تجربه هتل و رستوران (هتل پنج ستاره آراز)',
    text:
      'در نوروز ۱۴۰۴ به دعوت آقای بیژن الوندی مدیر اجرایی هتل پنج ستاره آراز، همکاری خود را با این مجموعه آغاز کردم. فعالیت در فضای یک هتل پنج ستاره تجربه‌ای ارزشمند در زمینه هتلداری، سرویس حرفه‌ای، مدیریت رضایت مهمانان و همکاری تیمی در سطح بین‌المللی برای بنده ایجاد کرد. این همکاری باعث شد آشنایی بیشتری با استانداردهای جهانی هاسپیتلیتی و نحوه ارائه خدمات در مجموعه‌های لوکس هتل و رستوران پیدا کنم.',
    image: Img6,
  },

  {
    title: 'راندوو پوینت',
    text:
      'همکاری بنده با رستوران راندوو پوینت و تیم آشپزخانه شف میلاد میدانی به عنوان هد شیفت انجام شد. در این مجموعه مسئولیت‌هایی مانند مدیریت نیروها، هماهنگی میان سالن و آشپزخانه، کنترل کیفیت سرویس، پیگیری رضایت مشتریان و مدیریت روند اجرایی شیفت بر عهده بنده بود. این تجربه باعث شد توانایی بنده در مدیریت بحران، تصمیم‌گیری سریع و حفظ نظم در شرایط شلوغ و حرفه‌ای تقویت شود.',
    image: Img7,
  },

  {
    title: 'افتخار همکاری با بزرگان صنعت هاسپیتلیتی',
    text:
      'در طول مسیر حرفه‌ای خود افتخار همکاری با افراد و شف‌های مطرح حوزه هاسپیتلیتی و رستوران را داشته‌ام؛ از جمله شف میلاد میدانی، شف هومن الوندی، شف تاشکیران، شف کفایت بیگی، شف عمران و دیگر افراد حرفه‌ای این صنعت. همکاری در کنار این افراد باعث شد تجربه‌های ارزشمندی در زمینه سرویس حرفه‌ای، مدیریت رستوران، برگزاری ایونت‌های لوکس، استانداردهای جهانی پذیرایی و هماهنگی تیمی کسب کنم.',
    image: Img8,
  },

  {
    title: 'شرایط کاری حال بنده',
    text:
      'در حال حاضر همکاری بنده با آقای آرمین پالگانه به عنوان یکی از اعضای اصلی راه‌اندازی و توسعه رستوران نقش گاردن ادامه دارد. مسئولیت‌های بنده شامل هماهنگی نیروها، مشارکت در طراحی روند سرویس، برنامه‌ریزی تشریفات و کمک به ایجاد استانداردهای حرفه‌ای در مجموعه است. این پروژه یکی از مهم‌ترین مراحل رشد حرفه‌ای بنده در صنعت رستوران و هاسپیتلیتی محسوب می‌شود.',
    image: Img9,
  },

  {
    title: 'توانایی‌های کلیدی',
    text:
      'یکی از مهم‌ترین توانایی‌های بنده در حوزه هاسپیتلیتی و برگزاری رویدادها، توانایی جمع‌آوری و هماهنگ کردن نیروهای حرفه‌ای تشریفات برای اجرای ایونت‌های لوکس است. تجربه بالایی در مدیریت مهمانان VIP، سرویس فاین داینینگ، هماهنگی تیمی، مدیریت سالن، ارتباط با مشتری و اجرای رویدادهای رسمی دارم. همچنین توانایی بالایی در سازگاری با شرایط پر فشار، دقت در جزئیات و حفظ کیفیت خدمات در سطح حرفه‌ای دارم.',
    image: Img10,
  },

  {
    title: 'فعالیت‌های همزمان',
    text:
      'همزمان با فعالیت حرفه‌ای در حوزه کافه، رستوران و هاسپیتلیتی، در زمینه آرایشگری و زیبایی نیز به صورت حرفه‌ای فعالیت دارم. فعالیت در این حوزه باعث تقویت خلاقیت، دقت، مهارت ارتباط با مشتری، توجه به جزئیات و درک بهتر رضایت مشتری در بنده شده است. این تجربیات به شکل مستقیم در بهبود کیفیت عملکرد حرفه‌ای من در صنعت هاسپیتلیتی نیز تأثیر مثبت داشته‌اند.',
    image: Img10,
  },
];
// ================== ENGLISH ==================

const englishParagraphs = [
  {
    title: 'Professional Background',
    text:
      'My name is Amirhasan Kashani, born in Tehran in 2004. I started my professional career in the hospitality industry at Emarat Yar Café Restaurant located near City Theater on Rasht Street. After gaining valuable experience in customer service and luxury hospitality, I continued my journey with Barman Garden Café. My first major professional role as an Order Captain began through collaboration with hospitality teams led by Nima Ghasemian and Chef Omran, where I developed advanced skills in VIP guest management, fine dining service, team coordination, and high-standard restaurant operations.',
    image: Img1,
  },

  {
    title: 'Restaurant Experience & Professional Teams',
    text:
      'I collaborated continuously with Mr. Nima Ghasemian’s hospitality teams across several high-level restaurant projects. One of the important experiences was working at Middle Restaurant under the management of Mahla Sharifi. Later, I joined the Foodino Servestan chain restaurants in the bakery section, serving as Order Captain and Morning Shift Head Waiter. These experiences strengthened my abilities in leadership, guest communication, service management, and maintaining luxury hospitality standards during busy operations.',
    image: Img2,
  },

  {
    title: 'Saman Bank Private Restaurant',
    text:
      'I began a professional collaboration with Mr. Armin Palegane’s hospitality and ceremonial team at the exclusive private restaurant dedicated to senior personnel and executives of Saman Bank. This environment introduced me to elite-level hospitality services, business-class etiquette, formal VIP hosting, and highly professional event management standards. Working in such a prestigious environment significantly improved my precision, discipline, and understanding of luxury guest experiences.',
    image: Img3,
  },

  {
    title: 'Embassy Events & International Ceremonies',
    text:
      'I participated in organizing and managing embassy events and diplomatic ceremonies for the embassies of Norway, India, Japan, Slovenia, and New Zealand under the supervision of Mr. Palegane and Chef Hooman Alavandi. These international events required exceptional professionalism, attention to detail, teamwork, and the ability to provide premium hospitality services for diplomats, ambassadors, and distinguished international guests.',
    image: Img4,
  },

  {
    title: 'Luxury Events & Ribbon Tower',
    text:
      'I worked as part of the exclusive ceremonial hospitality staff at Ribbon Tower, one of the important venues for luxury and high-profile events in Iran. This role involved managing VIP guests, formal receptions, event coordination, and maintaining exceptional hospitality standards during prestigious ceremonies and gatherings. The experience enhanced my ability to work efficiently under pressure while preserving elegance and professionalism.',
    image: Img5,
  },

  {
    title: 'Hotel & Fine Dining Experience – Araz Five-Star Hotel',
    text:
      'I was invited by Mr. Bijan Alavandi, Executive Manager of Araz Five-Star Hotel, to collaborate during the Nowruz 1404 holiday season. Working in a luxury five-star hotel environment provided me with valuable experience in high-end hotel hospitality, guest satisfaction management, professional teamwork, and international service standards. This opportunity further strengthened my understanding of luxury hospitality operations and premium customer experiences.',
    image: Img6,
  },

  {
    title: 'Rendezvous Point Restaurant',
    text:
      'I collaborated with Rendezvous Point Restaurant alongside Chef Milad Meydani’s kitchen team as a Head Shift Supervisor. My responsibilities included team management, service coordination, maintaining operational quality, handling guest satisfaction, and ensuring smooth communication between kitchen and service staff. This role helped me improve my leadership abilities and operational decision-making skills in fast-paced restaurant environments.',
    image: Img7,
  },

  {
    title: 'Collaboration with Hospitality Industry Leaders',
    text:
      'Throughout my career, I have had the honor of collaborating with respected professionals and chefs in the hospitality industry, including Chef Milad Meydani, Chef Hooman Alavandi, Chef Tashkiran, Chef Kefayat Beigi, Chef Omran, and other experienced hospitality experts. Working alongside these professionals allowed me to learn advanced hospitality techniques, luxury service standards, event management strategies, and professional team coordination at the highest level.',
    image: Img8,
  },

  {
    title: 'Current Professional Position',
    text:
      'Currently, I am collaborating with Mr. Armin Palegane as one of the core members involved in launching and developing Naghsh Garden Restaurant. My role includes participation in hospitality planning, team coordination, service development, and establishing luxury operational standards. This project represents an important step in my professional growth within the hospitality and restaurant industry.',
    image: Img9,
  },

  {
    title: 'Key Skills & Strengths',
    text:
      'One of my strongest abilities in hospitality and event management is gathering highly professional ceremonial staff and coordinating luxury events with precision and discipline. I have strong experience in VIP guest management, fine dining service, event operations, teamwork leadership, customer relations, and maintaining high-quality hospitality standards. I am highly adaptable, detail-oriented, and capable of performing efficiently in fast-paced luxury environments.',
    image: Img10,
  },

  {
    title: 'Additional Professional Activities',
    text:
      'Alongside my professional career in cafés, restaurants, and luxury hospitality, I am also professionally active in the beauty and hairstyling industry. This parallel experience has strengthened my creativity, communication skills, attention to detail, personal presentation, and understanding of customer satisfaction, all of which contribute positively to my hospitality career and professional growth.',
    image: Img10,
  },
];
export default Resume;