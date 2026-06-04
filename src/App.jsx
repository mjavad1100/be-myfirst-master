import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';

import {
  FaHome,
  FaUser,
  FaFolderOpen,
} from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap-grid.css';

import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

const About = lazy(() => import('./section/about/About'));
const Resume = lazy(() => import('./section/resume/resume'));
const Services = lazy(() => import('./section/services/Services'));

const App = () => {
  return (
    <Router>

      <SpeedInsights />
      <Analytics />

      {/* PREMIUM FLOATING DOCK */}

      <nav className="global__menu">

        <div className="global__links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'global__link active'
                : 'global__link'
            }
          >
            <FaHome />
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? 'global__link active'
                : 'global__link'
            }
          >
            <FaUser />
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? 'global__link active'
                : 'global__link'
            }
          >
            <FaFolderOpen />
          </NavLink>

        </div>

      </nav>

      {/* ROUTES */}

      <Suspense fallback={<div />}>
        <Routes>

          <Route path="/" element={<About />} />

          <Route
            path="/resume"
            element={<Resume />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

        </Routes>
      </Suspense>

    </Router>
  );
};

export default App;