import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import Experience from './components/Experience';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]); // whenever we change the theme it will invoke this func

    const handleThemeSwitch = () => {
        setTheme(theme == 'dark' ? 'light' : 'dark');
    }

    return (
        <>
            <button
                type='button'
                onClick={handleThemeSwitch}
                className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
            >
                {theme === 'dark' ? 'MOON' : 'SUN'}
                Button</button>
            <div className='font-inter bg:white dark:bg-slate-900'>
                <div className='max-w-5xl mx-auto w-11/12'>
                    <HeroSection></HeroSection>
                    <Experience></Experience>
                    <Projects></Projects>
                    <AboutMe></AboutMe>
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default App