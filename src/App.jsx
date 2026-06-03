import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import { FaHome, FaUser, FaFolderOpen } from 'react-icons/fa';

import About from './section/about/About';
import Resume from './section/resume/resume';
import Services from './section/services/Services';

import 'bootstrap/dist/css/bootstrap-grid.css';

import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <Router>

      <SpeedInsights />
      <Analytics />

      {/* ULTRA ICON DOCK MENU */}

      <nav className="global__menu">

        <div className="global__links">

          <Link to="/" className="global__link">
            <FaHome />
          </Link>

          <Link to="/resume" className="global__link">
            <FaUser />
          </Link>

          <Link to="/services" className="global__link">
            <FaFolderOpen />
          </Link>

        </div>

      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
      </Routes>

    </Router>
  );
};

export default App;