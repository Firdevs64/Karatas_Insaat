import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Sections/Hero';
import { About } from '../components/Sections/About';
import { Services } from '../components/Sections/Services';
import { Projects } from '../components/Sections/Projects';
import { Contact } from '../components/Sections/Contact';

export function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const id = location.state.scrollTo;
            const element = document.getElementById(id);
            if (element) {
                // Small delay to ensure render
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else if (id === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            // Clear state to prevent scroll on refresh
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <>
            <div id="top"></div>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
        </>
    );
}
