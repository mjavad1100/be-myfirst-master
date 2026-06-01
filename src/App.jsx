import About from './section/about/About';
import Footer from './section/footer/Footer';
import Portfolio from './section/portfolio/Portfolio';
import Servises from './section/services/Services';
import Testimonials from './section/testimonials/Testimonials';
import Contact from './section/contact/Contact';
import Burger from './section/navbar/Burger';
import 'bootstrap/dist/css/bootstrap-grid.css';
import Headertop from './section/headr-top/Headertop';
import UncontrolledExample from './section/headr-top/UncontrolledExample';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Resume from './section/resume/resume';

const App = () => {
    return (
        <div>
            <main>
            <SpeedInsights />
            <Analytics/>
                {/* <Headertop /> */}
                {/* <UncontrolledExample /> */}
                {/* <Burger /> */}
                <About />
                <Resume />
                <Portfolio />
                {/* <Servises /> */}
                {/* <Testimonials /> */}
                {/* <Contact /> */}
                {/* <Footer /> */}
            </main>
        </div>
    );
};

export default App;