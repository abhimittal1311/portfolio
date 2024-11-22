import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import resume from './assets/documents/Abhishek_Mittal_Resume.pdf';
import resumeIcon from './assets/icons/resume.png';

const App = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>

        {/* Footer */}
        <footer className="bg-black text-white text-center py-4 mt-10">
          <p className="text-sm">
            Created by <strong>Abhishek Mittal</strong> | &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>

        {/* Resume Download Button */}
        <a
          href={resume}
          download="Abhishek_Mittal_Resume.pdf"
          className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-lg 
                     hover:bg-gray-900 transition-all group 
                     shadow-[0_10px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.5)] 
                     transform hover:translate-y-[-2px]">
          {/* Tooltip */}
          <span
            className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 
                       bg-black text-white text-xs py-1 px-2 rounded opacity-0 
                       group-hover:opacity-100 transition-opacity">
            Download My Resume!
          </span>
          {/* Icon */}
          <img
            src={resumeIcon}
            alt="Resume Icon"
            className="w-8 h-8 object-contain"
          />
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
