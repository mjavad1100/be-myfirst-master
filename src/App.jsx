import About from './section/about/About';
import 'bootstrap/dist/css/bootstrap-grid.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Resume from './section/resume/resume';
import Services from './section/services/Services';


const App = () => {
    return (
        <div>
            <main>
            <SpeedInsights />
            <Analytics/>
                <About />
                <Resume />
                <Services/>
            </main>
        </div>
    );
};

export default App;