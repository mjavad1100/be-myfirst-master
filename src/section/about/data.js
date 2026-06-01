import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

import { FaTelegramPlane } from 'react-icons/fa';

const data = [
  {
    id: 1,
    link: 'https://instagram.com/YOUR_USERNAME',
    icon: <AiOutlineInstagram />,
  },

  {
    id: 2,
    link: 'https://t.me/YOUR_USERNAME',
    icon: <FaTelegramPlane />,
  },

  {
    id: 3,
    link: 'https://wa.me/989123456789',
    icon: <AiOutlineWhatsApp />,
  },

  {
    id: 4,
    link: 'https://twitter.com/YOUR_USERNAME',
    icon: <AiOutlineTwitter />,
  },
];

export default data;