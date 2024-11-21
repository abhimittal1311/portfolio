import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // Import the Tilt component
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      {/* Wrap the card with Tilt */}
      <Tilt
        tiltMaxAngleX={25} // Maximum tilt angle on the X-axis
        tiltMaxAngleY={25} // Maximum tilt angle on the Y-axis
        scale={1.05}       // Slight scaling on hover
        transitionSpeed={450} // Speed of the tilt animation
        glareEnable={false} // Enable this for a glossy effect
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Since 2019, I’ve been on a mission to turn complex challenges into elegant, 
        efficient, and delightfully user-friendly solutions. When I’m not coding, 
        you’ll probably find me perfecting a new recipe in the kitchen, conquering 
        virtual worlds in my favorite games, or enjoying the tranquility of nature 
        on a park stroll. I’m always thrilled to team up with like-minded individuals 
        who share a passion for crafting exceptional and impactful digital experiences. 
        Oh, and here’s a fun fact: I can juggle four languages—because why not make 
        life a bit more multilingual?
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
