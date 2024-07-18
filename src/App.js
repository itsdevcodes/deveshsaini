// import Banner from './components/banner/Banner';
import Header from './components/Header/Header';
import ContactUs from './components/contact/ContactUs';
import Skills from './components/skills/Skills';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
// import Resume from './components/resume/Resume';

function App() {
    return (
        <div className='w-full h-auto bg-bodyColor text-lighText'>
            <div className='max-w-screen-2xl mx-auto px-16'>
                <Navbar />
                <Header />
                <Skills />
                <Projects />
                <ContactUs />
            </div>
        </div>
    );
}

export default App;
