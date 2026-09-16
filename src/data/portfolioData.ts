import {
  NavItem,
  CompactStat,
  SkillItem,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Shubham Anand',
  role: 'Frontend Developer (React.js)',
  tagline: 'Software Engineer | Frontend • Full Stack • AI',
  experience: '2+ Years Experience',
  status: 'Immediate Joiner',
  location: 'Navi Mumbai, India',
  email: 'anand.shubham81@gmail.com',
  phones: ['+91 8454971508'],
  linkedin: 'https://linkedin.com/in/shubhamAnand17',
  linkedinDisplay: 'linkedin.com/in/shubhamAnand17',
  github: 'https://github.com/shubhamAnand17',
  githubDisplay: 'github.com/shubhamAnand17',
  shortBio: 'Building scalable web applications, intelligent AI solutions, and high-performance user experiences with modern technologies.',
  fullBio: 'Frontend Developer with 2+ years of hands-on experience at Nanoprecise Sci Corp as a Jr. UI/UX Engineer. Dedicated to bridging complex data architectures and human-centric design through performant React workflows, responsive components, and accessible digital products.',
  currentCompany: 'Nanoprecise Sci Corp',
  currentRole: 'Jr. UI/UX Engineer',
  companyType: 'Product-based company',
  defaultAvatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQHRvZ1kO_wKrA/profile-displayphoto-scale_400_400/B4DZ1L56uyGgAg-/0/1775094969271?e=1790812800&v=beta&t=6qxR_kUH7rIM2bkO4TzAUEkW2_GEmOP8L9kUqF9HIKA', // high quality professional portrait
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const COMPACT_STATS: CompactStat[] = [
  {
    label: 'Experience',
    value: '2+ Years',
    sublabel: 'Product-based engineering',
  },
  {
    label: 'Specialization',
    value: 'Frontend / Full Stack',
    sublabel: 'Modern hooks & architecture',
  },
  {
    label: 'Focus Area',
    value: 'Interactive Dashboards',
    sublabel: 'Plotly.js & Telemetry flows',
  },
  {
    label: 'Availability',
    value: 'Immediate Joiner',
    sublabel: 'Ready for full-time roles',
  },
];

export const ABOUT_HIGHLIGHTS = [
  {
    title: 'Responsive React Applications',
    description: 'Engineering fluid, high-performing single page applications structured with clean component hierarchies and modern React paradigms.',
  },
  {
    title: 'Pixel-Perfect UI Implementation',
    description: 'Translating design specifications into meticulous, high-fidelity interfaces with strict optical balance and typography.',
  },
  {
    title: 'Accessible Interfaces',
    description: 'Adhering to WCAG guidelines, semantic HTML5, keyboard navigation, and aria labeling to ensure inclusive digital experiences.',
  },
  {
    title: 'Data-Heavy Application Flows',
    description: 'Managing complex asynchronous states, large datasets, data tables, and high-frequency IoT streaming telemetry without performance bottlenecks.',
  },
  {
    title: 'Interactive Dashboards & Visualizations',
    description: 'Building analytical chart systems, sensor anomaly graphs, and real-time visualization widgets powered by Plotly.js and responsive SVG.',
  },
  {
    title: 'REST API Integration',
    description: 'Connecting enterprise backend microservices, structuring fault-tolerant HTTP clients, and synchronizing client caches.',
  },
  {
    title: 'Third-Party Integrations',
    description: 'Seamlessly embedding analytics, customer tracking, and telemetry tools including HubSpot, Segment, and external SDKs.',
  },
  {
    title: 'AI-Assisted Development',
    description: 'Leveraging GitHub Copilot, Cursor IDE, and prompt engineering practices to accelerate code scaffolding, refactoring, and test coverage.',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    experienceYears: '2+ yrs',
    tag: 'Core Framework',
    description: 'Component architecture, lifecycle hooks, rendering optimizations, custom hooks, and modular UI patterns.',
    highlight: true,
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    experienceYears: '2+ yrs',
    tag: 'Core Language',
    description: 'Async/await, closures, prototypes, destructuring, modules, array transformations, and event-driven patterns.',
    highlight: true,
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    experienceYears: '2+ yrs',
    tag: 'Web Standards',
    description: 'Semantic markup, Flexbox, CSS Grid, animations, accessibility (WCAG), and responsive layouts.',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    experienceYears: '2+ yrs',
    tag: 'Styling',
    description: 'Utility-first styling, design system tokens, responsive variants, and dark-mode tokenization.',
    highlight: true,
  },
  {
    name: 'Plotly.js',
    category: 'frontend',
    experienceYears: '2+ yrs',
    tag: 'Data Visualization',
    description: 'Interactive industrial dashboards, 2D/3D sensor plots, dynamic time-series charts, and telemetry graphs.',
    highlight: true,
  },

  // State Management
  {
    name: 'React Hooks',
    category: 'state',
    experienceYears: '2+ yrs',
    tag: 'State & Logic',
    description: 'useState, useEffect, useMemo, useCallback, useRef, and custom reusable hook abstraction.',
    highlight: true,
  },
  {
    name: 'Context API',
    category: 'state',
    experienceYears: '2+ yrs',
    tag: 'Global State',
    description: 'Centralized state sharing, theme toggling, auth provider patterns, and scoped context providers.',
  },
  {
    name: 'Redux / Toolkit',
    category: 'state',
    experienceYears: '2+ yrs',
    tag: 'State Management',
    description: 'Predictable state containers, immutable state updates, slices, actions, and asynchronous thunk flows.',
    highlight: true,
  },

  // Tools & Workflow
  {
    name: 'Git & GitHub',
    category: 'tools',
    experienceYears: '2+ yrs',
    tag: 'Version Control',
    description: 'Branching workflows, pull requests, semantic versioning, interactive rebase, and code review governance.',
    highlight: true,
  },
  {
    name: 'VS Code & Cursor IDE',
    category: 'tools',
    experienceYears: '2+ yrs',
    tag: 'Editor & IDE',
    description: 'AI-augmented workflow, advanced debugging, linting, snippet configuration, and terminal integration.',
  },
  {
    name: 'GitHub Copilot',
    category: 'tools',
    experienceYears: '1+ yrs',
    tag: 'AI Assistance',
    description: 'Pair programming, pattern recognition, code generation, refactoring, and automated test scaffolding.',
  },
  {
    name: 'Vite',
    category: 'tools',
    experienceYears: '2+ yrs',
    tag: 'Build Tooling',
    description: 'Fast HMR, optimized bundle splitting, Rollup config, plugin ecosystems, and modern asset processing.',
  },

  // Additional Technologies
  {
    name: 'Node.js & Express.js',
    category: 'additional',
    tag: 'Backend Runtime',
    description: 'RESTful API endpoints, middleware pipelines, routing, and JSON request/response handling.',
  },
  {
    name: 'Python',
    category: 'additional',
    tag: 'Scripting & ML',
    description: 'Exploratory data analysis, Flask microservices, automated scripts, and scientific data manipulation.',
  },
  {
    name: 'PostgreSQL & MySQL',
    category: 'additional',
    tag: 'Relational DB',
    description: 'Relational schema modeling, complex SQL queries, indexes, joins, and database transactions.',
  },
  {
    name: 'MongoDB',
    category: 'additional',
    tag: 'NoSQL DB',
    description: 'Document-oriented collections, aggregation pipelines, schema validation, and CRUD operations.',
  },
  {
    name: 'Docker',
    category: 'additional',
    tag: 'Containerization',
    description: 'Dockerfile creation, multi-container orchestration with Docker Compose, and environment isolation.',
  },
  {
    name: 'AWS',
    category: 'additional',
    tag: 'Cloud Services',
    description: 'Cloud deployment concepts, S3 asset storage, EC2 instances, and hosting fundamentals.',
  },
  {
    name: 'Ethereum & Blockchain',
    category: 'additional',
    tag: 'Web3 & Distributed',
    description: 'Private node initialization, custom genesis block creation, account handling, and transaction verification.',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Nanoprecise Sci Corp',
    role: 'Jr. UI/UX Engineer',
    type: 'Product-based company',
    period: '2+ Years',
    location: 'Remote, India',
    overview:
      'Frontend Developer working in the role of Jr. UI/UX Engineer, engineering responsive web applications and interactive data visualization flows for an enterprise AI-driven predictive maintenance and IoT monitoring platform. Partnered closely with UI/UX designers and backend teams to deliver high-performance, accessible, and scalable digital products.',
    achievements: [
      'Built and maintained responsive web applications using React.js, JavaScript (ES6+), HTML5, and CSS3, Tailwind CSS, supporting core product features used across multiple client accounts.',
      'Partnered with UI/UX designers to translate mock-ups into pixel-perfect, accessible interfaces, reducing design-to-development handoff friction.',
      'Implemented state management using React Hooks, Context API, and Redux to support complex, data-heavy application flows.',
      'Built interactive dashboards and time-series data visualizations using Plotly.js, enabling users to analyze analytical data more effectively.',
      'Integrated REST APIs in collaboration with backend teams to connect frontend features to live product data.',
      'Integrated third-party services including HubSpot (chat, forms, user identification) and Segment for analytics and event tracking.',
      'Delivered ongoing bug fixes and hotfixes while writing maintainable, scalable code, and contributed to code reviews and team knowledge-sharing sessions.',
      'Adopted AI-assisted development tools (Cursor IDE, GitHub Copilot) to speed up development, debugging, and code optimization.',
      'Ensured cross-browser compatibility and consistent responsive behaviour across devices.',
    ],
    technologies: [
      'React.js',
      'JavaScript ES6+',
      'Redux',
      'Context API',
      'Plotly.js',
      'Tailwind CSS',
      'REST APIs',
      'HubSpot',
      'Segment',
      'Git / GitHub',
      'GitHub Copilot',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
   {
  id: 'ecommerce-app',

  title: 'E-Commerce App',

  subtitle: 'Full-Stack Commerce Platform with Real-Time Features',

  year: '2026',
   
   category: 'fullstack',

  featured: true,

  description:
    'Built a modern full-stack e-commerce application using React.js and Node.js with secure authentication, real-time customer interactions, optimized image delivery, PostgreSQL data management, and production-grade error monitoring.',

  longDescription:
    'A production-oriented e-commerce platform showcasing full-stack development patterns across frontend, backend, authentication, database management, real-time communication, media optimization, and application monitoring. The application uses React.js for a responsive shopping experience, Node.js for scalable backend APIs, Clerk for authentication and user management, Neon PostgreSQL for cloud database infrastructure, GetStream.io for real-time chat and activity features, ImageKit for optimized product image delivery, and Sentry for application performance and error monitoring.',

  keyHighlights: [
    'Responsive React.js storefront with reusable product, cart, checkout, and order management components.',

    'Node.js backend with REST APIs for products, users, carts, orders, payments, and inventory management.',

    'Secure authentication and user management implemented with Clerk.',

    'Neon PostgreSQL database for scalable product, customer, order, and inventory data management.',

    'Real-time customer communication and activity features powered by GetStream.io.',

    'ImageKit integration for optimized product image delivery, transformations, resizing, and responsive media.',

    'Sentry integration for production error tracking, performance monitoring, and debugging.',

    'Modern responsive UI focused on accessibility, performance, smooth interactions, and scalable component architecture.',
  ],

  tags: [
    'React.js',
    'Node.js',
    'Sentry',
    'GetStream.io',
    'Neon',
    'Clerk',
    'ImageKit',
    'PostgreSQL',
    'REST API',
    'Full Stack'
  ],

  metrics: 'Production E-Commerce Platform',

  githubUrl: 'https://github.com/shubhamAnand17',

  imageFallbackGradient:
    'from-indigo-950 via-slate-900 to-purple-950',

  previewType: 'ecommerce',
},
  {
    id: 'industrial-telemetry-dashboard',
    title: 'IoT Sensor Analytics & Predictive Maintenance Dashboard',
    subtitle: 'High-Frequency Time-Series Visualization & State Architecture',
    year: '2026',
    category: 'frontend',
    featured: true,
    description:
      'Architected a production-grade React dashboard interface for real-time vibration, acoustic, and temperature sensor streams with dynamic Plotly charts, asset hierarchies, and responsive alert thresholds.',
    longDescription:
      'A showcase of production frontend engineering patterns implemented for industrial IoT environments. Features virtualized data grids for thousands of machinery telemetry points, interactive Plotly.js spectrum and time-domain analysis graphs, custom Redux state management for active alerts, and dark-mode optimized high-contrast monitoring interfaces.',
    keyHighlights: [
      'High-throughput interactive charts built with Plotly.js and optimized React canvas elements.',
      'Normalized Redux store architecture managing multi-facility asset trees and alarm thresholds.',
      'Accessible WCAG-compliant design with high-contrast colorways for harsh industrial plant lighting.',
      'Integrated REST mock endpoints simulating live WebSocket streaming and threshold violations.',
    ],
    tags: ['React.js', 'Plotly.js', 'Redux', 'Tailwind CSS', 'TypeScript', 'Data Visualization'],
    metrics: 'Production Dashboard Concept',
    githubUrl: 'https://github.com/shubhamAnand17',
    imageFallbackGradient: 'from-cyan-900/40 via-blue-950/40 to-slate-900',
    previewType: 'dashboard',
  },
  {
    id: 'wildfire-ml',
    title: 'Wildfire Prediction & Early Detection Using Machine Learning',
    subtitle: 'Research Publication & Predictive Environmental Analytics',
    year: '2023',
    category: 'machine-learning',
    featured: true,
    description:
      'Developed an end-to-end Machine Learning prediction model and interactive visualization platform using historical environmental data, meteorological factors, and exploratory data analysis to detect wildfire risks early.',
    longDescription:
      'This research-backed project addresses early wildfire mitigation through data intelligence. Leveraging multi-year historical environmental datasets, the system applies data pre-processing, exploratory data analysis (EDA), and machine learning regression and classification models to predict high-risk fire zones. A Flask-powered web dashboard provides environmental telemetry visualization, geospatial risk indices, and early-warning alerts for disaster response coordinators.',
    keyHighlights: [
      'Engineered predictive ML pipeline analyzing temperature, humidity, wind velocity, and drought indices.',
      'Conducted rigorous Exploratory Data Analysis (EDA) to isolate key environmental risk indicators.',
      'Created interactive Flask web visualization allowing operators to query weather parameters and view risk probability scores.',
      'Authored and published academic research paper documenting model architecture and statistical findings.',
    ],
    tags: ['Python', 'Machine Learning', 'Flask', 'Data Analysis', 'Plotly', 'Research Publication'],
    metrics: 'Published Research Paper (2023)',
    githubUrl: 'https://ijcrt.org/papers/IJCRT2304098.pdf',
    imageFallbackGradient: 'from-amber-900/40 via-red-950/40 to-slate-900',
    previewType: 'telemetry',
  },
  {
    id: 'ethereum-docker',
    title: 'Ethereum Blockchain in Docker — TCS ION',
    subtitle: 'Private Distributed Ledger & Containerized Node Network',
    year: '2023',
    category: 'blockchain',
    featured: true,
    description:
      'Architected a fully containerized private Ethereum blockchain testnet environment using Docker, featuring custom genesis block configuration, private node synchronization, account creation, and simulated ether mining operations.',
    longDescription:
      'Undertaken under the TCS ION technical program, this project simulates a sovereign enterprise blockchain ecosystem. The setup packages Ethereum Go-Ethereum (Geth) clients inside Docker containers, establishing a multi-node peer-to-peer network. Designed custom genesis configurations with specific difficulty levels, managed encrypted account creation, executed peer-to-peer Ether transactions, and monitored real-time block generation and mining telemetry.',
    keyHighlights: [
      'Constructed reproducible Docker container environment isolating Geth nodes and RPC endpoints.',
      'Crafted custom Genesis JSON block defining network ID, consensus parameters, and initial allocations.',
      'Demonstrated account generation, secure keystore storage, and encrypted transaction signing.',
      'Simulated proof-of-work mining cycles, block validation, gas fee estimation, and ledger state verification.',
    ],
    tags: ['Ethereum', 'Docker', 'Blockchain', 'Geth', 'TCS ION', 'Linux / Bash'],
    metrics: 'TCS ION Industry Project',
    githubUrl: 'https://github.com/shubhamAnand17',
    imageFallbackGradient: 'from-blue-900/40 via-indigo-950/40 to-slate-900',
    previewType: 'terminal',
  },
 
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'Smt. Indira Gandhi College of Engineering (SIGCE), Ghansoli',
    location: 'Navi Mumbai, India',
    score: '8.17 CGPA (71.98%)',
    highlights: [
      'Graduated with First Class with Distinction in Computer Engineering.',
      'Core focus: Data Structures & Algorithms, Object-Oriented Software Design, Database Systems, Computer Networks, and Machine Learning.',
      'Led final-year capstone research project on predictive environmental machine learning resulting in an academic publication.',
    ],
  },
  {
    degree: '12th Science (Computer Science)',
    institution: 'JVM Jr. College, Airoli',
    location: 'Navi Mumbai, India',
    highlights: [
      'Specialized in Computer Science, Mathematics, and Physical Sciences.',
      'Built strong foundational programming principles in C++ and computer fundamentals.',
    ],
  },
  {
    degree: '10th Secondary School Examination',
    institution: 'Kendriya Vidyalaya, AFS Thane',
    location: 'Thane, Maharashtra, India',
    highlights: [
      'Exemplary academic track record with strong analytical and scientific curriculum.',
      'Active participant in science exhibitions, technical quizzes, and computer club activities.',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [

  {
  title: 'Generative AI Masters 2026: From Python to Gen AI',
  issuer: 'Udemy',
  year: 'In Progress',
  skills: [
    'Python',
    'NLP',
    'Generative AI',
    'LLMs',
    'Prompt Engineering',
    'RAG',
    'Embeddings',
    'Vector Databases',
    'Deep Learning and Transformers',
    'Prompt Engineering for LLMs',
    'AI Application Development'
  ],
  iconType: 'ai',
},
{
  title: 'the ultimate React.js & Next.js Bootcamp',
  issuer: 'Udemy',
  year: 'In Progress',
  skills: [
    'React.js Hooks advanced patterns',
    'Next.js',
    'Redux advanced state management',
    'React Query',
    'Context API',
    'Tailwind CSS advanced theming',
    'Advanced React Patterns',
    'Scalable UI Architecture'
  ],
  iconType: 'Award',
},

  {
    title: 'GitHub Copilot: Beginner to Pro',
    issuer: 'Udemy',
    year: '2026',
    skills: ['AI-Assisted Coding', 'Prompt Design', 'Unit Test Generation', 'Refactoring Workflows'],
    iconType: 'copilot',
  },
  {
    title: 'Prompt Engineering for AI Bootcamp',
    issuer: 'Udemy',
    year: '2026',
    skills: ['LLM Architectures', 'Few-Shot Prompting', 'Chain-of-Thought', 'Context Window Optimization'],
    iconType: 'ai',
  },
  {
    title: 'Python Bootcamp (2025)',
    issuer: 'Udemy',
    year: '2025',
    skills: ['Modern Python 3', 'Object-Oriented Architecture', 'Flask REST APIs', 'Data Handling with Pandas'],
    iconType: 'python',
  },
  {
  title: "Market Research: Dekker's Complete Marketing Research",
  issuer: 'Udemy',
    year: '2024',
    skills: [
      'Market Research',
      'Consumer Research',
      'Competitive Analysis',
      'Data Analysis',
      'Market Segmentation',
      'Research Methodology'
    ],
    iconType: 'Award',
  },
  {
    title: 'The Complete SQL Masterclass 2023',
    issuer: 'Udemy',
    year: '2023',
    skills: ['SQL Queries', 'PostgreSQL', 'Database Design', 'Joins & Subqueries', 'Performance Indexing'],
    iconType: 'sql',
  },
  {
  title: 'Cyber Security: From Beginner to Expert',
  issuer: 'Udemy',
  year: '2023',
  skills: [
    'Cybersecurity Fundamentals',
    'Network Security',
    'Ethical Hacking',
    'Web Security',
    'Vulnerability Assessment',
    'Threat Detection'
  ],
  iconType: 'Award',
},
];
