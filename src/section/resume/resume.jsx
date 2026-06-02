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

const englishParagraphs = [

  {
    title: 'Professional Background',
    text:
      'Amirhasan Kashani, born in Tehran in 2004, is a luxury hospitality professional with more than four years and eight months of experience in restaurants, fine dining services, VIP hospitality and private event management.',
  },

  {
    title: 'Early Career & Restaurant Experience',
    text:
      'His professional journey began at Emarat Yar Café Restaurant near Tehran City Theater, followed by collaborations with Barman Garden Café and several hospitality teams. He later worked as Captain Order and Head Waiter alongside Nima Ghasemian and Chef Omran during restaurant launch projects and operational management.',
  },

  {
    title: 'Middle Restaurant & Foodino Team',
    text:
      'Amirhasan collaborated continuously with Nima Ghasemian’s restaurant teams including Middle Restaurant under the management of Mahla Sharifi. He later joined the Foodino Servestan chain restaurants in the bakery division as Captain Order and Morning Shift Head Waiter.',
  },

  {
    title: 'Saman Bank Private Business Lounge',
    text:
      'A major stage in his hospitality career began with joining Armin Palegane’s hospitality and ceremony team at the private luxury restaurant and business lounge of Saman Bank Tower. During this collaboration he worked closely with professional kitchen teams including Chef Mahyar Amin Hessari.',
  },

  {
    title: 'Embassy Events & International Ceremonies',
    text:
      'He participated in luxury embassy events and diplomatic ceremonies for the embassies of Norway, India, Japan, Slovenia and New Zealand under the supervision of Armin Palegane and Chef Hooman Alavandi, becoming one of the core members of the hospitality team.',
  },

  {
    title: 'Ribbon Tower & Luxury Event Operations',
    text:
      'Amirhasan worked professionally with Ribbon Tower, one of Iran’s important luxury event venues, participating in high-level ceremonies and exclusive private gatherings. He also collaborated in luxury events with teams and brands such as Hanna Darvish, Hello Chef, Aston Showroom and Iran Mall.',
  },

  {
    title: 'Araz Five-Star Hotel Experience',
    text:
      'In Nowruz 1404, he was invited by Bijan Alavandi, Executive Manager of Araz Hotel, to join the hotel team. He participated in the launch of Caspi Restaurant on the 24th floor of the hotel and later returned as Assistant Hospitality Team Manager during the hotel’s peak operational season under the supervision of the hotel management and F&B department.',
  },

  {
    title: 'Rendezvous Point Restaurant',
    text:
      'He collaborated with Rendezvous Point Restaurant alongside Chef Milad Meydani and restaurant manager Amin Reza Beik as Head Shift Supervisor. This project became recognized as one of Tehran’s first private mansion-style restaurants.',
  },

  {
    title: 'Collaboration with Renowned Chefs',
    text:
      'Throughout his hospitality career, Amirhasan has collaborated with prominent figures in Iran’s hospitality and culinary industry including Chef Milad Meydani, Chef Hooman Alavandi, Chef Tashkiran, Chef Kefayat Beigi, Chef Mahyar Amin Hessari, Chef Omran and Hadi Zakaei.',
  },

  {
    title: 'Current Position & Naghsh Garden',
    text:
      'Currently, Amirhasan Kashani is working as part of the core launch and hospitality team for Naghsh Garden Restaurant located at the Iranian Garden Museum under the management of Mr. Nikpour in collaboration with Armin Palegane.',
  },

  {
    title: 'Leadership & Coordination Skills',
    text:
      'One of his strongest professional abilities is gathering and coordinating elite hospitality staff for VIP ceremonies and luxury events. He is highly experienced in executive coordination, team management and high-pressure hospitality operations.',
  },

  {
    title: 'Additional Professional Activity',
    text:
      'Alongside his professional hospitality career, Amirhasan is also active in the beauty and hairstyling industry as a professional specialist.',
  },

];

const persianParagraphs = [

  {
    title: 'سوابق حرفه‌ای',
    text:
      'اینجانب امیرحسن کاشانی متولد ۱۳۸۳ در تهران، دارای بیش از چهار سال و هشت ماه سابقه حرفه‌ای در حوزه رستوران، فاین داینینگ، تشریفات VIP و مدیریت هاسپیتلیتی می‌باشم.',
  },

  {
    title: 'شروع فعالیت حرفه‌ای',
    text:
      'شروع فعالیت حرفه‌ای بنده از کافه رستوران عمارت یار واقع در محدوده تئاتر شهر تهران بود و سپس همکاری با کافه باغ بارمان و مجموعه‌های حرفه‌ای رستورانی ادامه پیدا کرد. در ادامه به عنوان کاپیتان اردر و هد ویتر در پروژه‌های راه‌اندازی رستوران کنار نیما قاسمیان و شف عمران فعالیت داشتم.',
  },

  {
    title: 'تجربه رستوران و تیم‌های حرفه‌ای',
    text:
      'همکاری زنجیره‌ای با تیم آقای قاسمیان در رستوران میدل با مدیریت محلا شریفی و سپس حضور در رستوران‌های زنجیره‌ای فودینو سروستان در بخش بیکری به عنوان کاپیتان اردر و هد ویتر تایم صبح از مهم‌ترین تجربیات حرفه‌ای بنده بوده است.',
  },

  {
    title: 'رستوران خصوصی بانک سامان',
    text:
      'شروع همکاری حرفه‌ای بنده با تیم تشریفات و هاسپیتلیتی آقای آرمین پالگانه در رستوران خصوصی و بیزینس لانژ برج اختصاصی بانک سامان شکل گرفت. در این مجموعه در کنار تیم حرفه‌ای آشپزخانه و شف مهیار امین حصاری فعالیت داشتم.',
  },

  {
    title: 'همکاری با سفارت‌ها و ایونت‌های بین‌المللی',
    text:
      'آغاز همکاری در ایونت‌های سفارت نروژ، هند، ژاپن، اسلوونی و نیوزلند تحت مدیریت آقای پالگانه و شف هومن الوندی، بخشی مهم از رزومه حرفه‌ای بنده محسوب می‌شود و به عنوان یکی از اعضای اصلی تیم تشریفات در این پروژه‌ها حضور مستمر داشته‌ام.',
  },

  {
    title: 'رویدادهای لوکس و برج ریبون',
    text:
      'همکاری اختصاصی به عنوان نیروی تشریفات با برج ریبون، یکی از مهم‌ترین لوکیشن‌های برگزاری رویدادهای تشریفاتی ایران، و حضور در ایونت‌های خصوصی سطح بالا همراه با تیم‌هایی همچون حنا درویش، هلو شف، شوروم آستین و ایران مال از دیگر فعالیت‌های حرفه‌ای بنده است.',
  },

  {
    title: 'هتل پنج ستاره آراز',
    text:
      'در نوروز ۱۴۰۴ به دعوت آقای بیژن الوندی مدیر اجرایی هتل آراز، همکاری خود را با این مجموعه آغاز کردم و در افتتاح رستوران کسپی طبقه ۲۴ هتل حضور داشتم. همچنین در بازه پیک هتل به عنوان دستیار مدیریت تیم تشریفات تحت نظارت مدیریت غذا و نوشابه و مدیریت اصلی هتل فعالیت نمودم.',
  },

  {
    title: 'رستوران راندوو پوینت',
    text:
      'همکاری با رستوران راندوو پوینت در کنار تیم آشپزخانه شف میلاد میدانی و مدیریت آقای امین رضا بیک به عنوان هد شیفت، از دیگر تجربیات مهم حرفه‌ای بنده است. این مجموعه به عنوان یکی از اولین رستوران‌ها و عمارت‌های خصوصی تهران شناخته شد.',
  },

  {
    title: 'افتخار همکاری با بزرگان صنعت هاسپیتلیتی',
    text:
      'در طول فعالیت حرفه‌ای خود افتخار همکاری با چهره‌های برجسته صنعت آشپزی و هاسپیتلیتی ایران از جمله شف میلاد میدانی، شف هومن الوندی، شف تاشکیران، شف کفایت بیگی، شف مهیار امین حصاری، شف عمران و هادی ذکایی را داشته‌ام.',
  },

  {
    title: 'فعالیت فعلی و نقش گاردن',
    text:
      'در حال حاضر به عنوان یکی از اعضای اصلی تیم راه‌اندازی رستوران نقش گاردن در باغ موزه ایرانی با مدیریت آقای نیک‌پور و همکاری آقای پالگانه فعالیت دارم و همزمان در هماهنگی ایونت‌های تشریفاتی و سفارت‌ها نیز حضور مستمر دارم.',
  },

  {
    title: 'توانایی‌های کلیدی',
    text:
      'یکی از مهم‌ترین توانایی‌های حرفه‌ای بنده، گردهم آوردن نیروهای حرفه‌ای تشریفات و هماهنگی اجرایی تیم‌ها در برگزاری رویدادهای VIP و لاکچری می‌باشد.',
  },

  {
    title: 'فعالیت‌های همزمان',
    text:
      'همزمان با فعالیت حرفه‌ای در صنعت رستوران و هاسپیتلیتی، در زمینه آرایشگری و زیبایی نیز به صورت حرفه‌ای فعالیت دارم.',
  },

];

export default Resume;
