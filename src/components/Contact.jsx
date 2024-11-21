import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover, githubW, linkedin, instagram } from '../assets'; // Import the logos here.

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_u2t7adk',
        'template_6dr3ram',
        {
          from_name: form.name,
          to_name: 'Abhishek Mittal',
          from_email: form.email,
          to_email: 'amittal1311@gmail.com',
          message: form.message,
        },
        'lfnj56muLI_DhrXyU'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What should I call you?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Where can I reach you?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What should we talk about?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document.querySelector('.contact-btn').setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-10 text-right">
          <p className="text-timberWolf text-lg font-medium">Find Me On:</p>
          <div className="mt-4 flex justify-end gap-6">
            <a href="https://github.com/abhimittal1311" target="_blank" rel="noopener noreferrer">
              <img
                src={githubW}
                alt="GitHub"
                className="w-[40px] h-[40px] hover:scale-110 transition transform duration-200 ease-in-out"
              />
            </a>
            <a href="https://linkedin.com/in/iabhimittal" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-[40px] h-[40px] hover:scale-110 transition transform duration-200 ease-in-out"
              />
            </a>
            <a href="https://instagram.com/iabhimittal" target="_blank" rel="noopener noreferrer">
              <img
                src={instagram}
                alt="Instagram"
                className="w-[40px] h-[40px] hover:scale-110 transition transform duration-200 ease-in-out"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
