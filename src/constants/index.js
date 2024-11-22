import { spring } from 'framer-motion';
import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  reactjs,
  nodejs,
  git,
  docker,
  postgresql,
  indemand,
  concordia,
  rubiq,
  kabera,
  chitkara,
  java,
  aws,
  mongo,
  kubernetes,
  springboot,
  rest,
  kafka,
  python,
  connects,
  portfolio,
  plagiarism,
  facemask,
  college,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work_exp',
    title: 'Education & Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  
];

const services = [
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Testing & Prototyping',
    icon: prototyping,
  },
  
];

const technologies = [

  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Spring Boot',
    icon: springboot,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Kubernetes',
    icon: kubernetes,
  },
  
  {
    name: 'REST API',
    icon: rest,
  },
  
  {
    name: 'Apache Kafka',
    icon: kafka,
  },
  {
    name: 'MongoDB',
    icon: mongo,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  
];

const experiences = [
  {
    title: 'Software Developer Intern',
    company_name: 'Indemand Care Healthy Inc',
    icon: indemand,
    iconBg: '#ffffff',
    date: 'Aug 2023 - Dec 2023',
  },
  {
    title: 'Master of Science in Applied Computer Science',
    company_name: 'Concordia University',
    icon: concordia,
    iconBg: '#ffffff',
    date: 'Sept 2021 - Aug 2023',
  },
  {
    title: 'Software Engineer',
    company_name: 'Rubiq Solutions Pvt Ltd',
    icon: rubiq,
    iconBg: '#ffffff',
    date: 'Mar 2020 - Jul 2021',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Rubiq Solutions Pvt Ltd',
    icon: rubiq,
    iconBg: '#ffffff',
    date: 'Sept 2019 - Feb 2020',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Kabera Global Technologies Pvt Ltd',
    icon: kabera,
    iconBg: '#333333',
    date: 'May 2019 - Aug 2019',
  },
  {
    title: 'Bachelor of Engineering in Computer Science',
    company_name: 'Chitkara University',
    icon: chitkara,
    iconBg: '#333333',
    date: 'Aug 2016 - Jul 2020',
  },
  
];

const projects = [
  {
    id: 'project-1',
    name: 'Plagiarism Detector',
    description:
      'A program that detects if two source codes or text files are plagiarised.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: plagiarism,
    repo: 'https://github.com/abhimittal1311/java_plagiarism_detector.git',
    demo: '',
  },

  {
    id: 'project-2',
    name: 'Connects.',
    description: 'A career services platform that allows users to browse through and apply to job postings.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: connects,
    repo: 'https://github.com/Farheen-J/new-originals-Soen6011summer2023.git',
    demo: '',
  },
  
  
  {
    id: 'project-3',
    name: 'AI Mask Detector',
    description: 'An AI model trained to detect if a person is wearing a face mask, are they wearing it correctly, and what type of mask are they wearing.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: facemask,
    repo: 'https://github.com/abhimittal1311/face_mask_detection.git',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Appliquer',
    description: `A WebApp that allows students to submit a variety of applications like admissions and leaves, and allows teachers to review applications and submit responses.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: college,
    repo: 'https://github.com/abhimittal1311/College-Application-Approval-System.git',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Portfolio',
    description:
      'A dynamic and visually engaging developer portfolio showcasing my skills, projects, and experience.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    repo: 'https://github.com/abhimittal1311/portfolio.git',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
