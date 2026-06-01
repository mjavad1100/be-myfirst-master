import About from './section/about/About';
import 'bootstrap/dist/css/bootstrap-grid.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Resume from './section/resume/resume';

const App = () => {
    return (
        <div>
            <main>
            <SpeedInsights />
            <Analytics/>
                <About />
                <Resume />
            </main>
        </div>
    );a
};

export default App;