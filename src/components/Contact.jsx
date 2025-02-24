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
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [hovered, setHovered] = useState(false); // State for hovering effect

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error for the current field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Abhishek Mittal',
          from_email: form.email,
          to_email: 'amittal1311@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setModalMessage('Thank you. I will get back to you as soon as possible.');
          setModalOpen(true);
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setModalMessage('Something went wrong. Please try again.');
          setModalOpen(true);
        }
      );
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact Me</h3>

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
            {errors.name && (
              <span className="text-red-500 text-sm mt-2">{errors.name}</span>
            )}
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
            {errors.email && (
              <span className="text-red-500 text-sm mt-2">{errors.email}</span>
            )}
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
            {errors.message && (
              <span className="text-red-500 text-sm mt-2">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={hovered ? sendHover : send}
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

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="modal-content bg-eerieBlack p-6 rounded-xl max-w-sm">
            <p className="text-timberWolf text-xl text-center">{modalMessage}</p>
            <button
              className="modal-close mt-4 w-full text-white text-lg bg-night py-2 rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
