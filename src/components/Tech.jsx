import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div
            className="relative w-28 h-28 group" // Add "group" for hover effect
            key={technology.name}>
            {/* BallCanvas for icon */}
            <BallCanvas icon={technology.icon} />

            {/* Tooltip */}
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
              translate-y-full bg-black text-white text-sm 
              px-3 py-1 rounded opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 whitespace-nowrap">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'skills');
