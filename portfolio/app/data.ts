export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API Design', 'Authentication', 'System Design Basics'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'Query Optimization'],
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'Docker', 'CI/CD', 'Vercel', 'Postman'],
  },
];

export const projects = [
  {
    title: 'BikeWithMe Marketplace',
    description:
      'A modern bike discovery platform focused on product browsing, filtering, and conversion-ready UI flows with responsive performance.',
    stack: ['Next.js', 'Tailwind', 'TypeScript', 'Vercel'],
    live: 'https://bikewithme.vercel.app',
    github: 'https://github.com/aspati1/Aditya-s-Portfolio',
    image: '/projects/bikewithme-1.png',
  },
  {
    title: 'Portfolio Redesign System',
    description:
      'A recruiter-first portfolio architecture with reusable components, animated sections, and semantic structure for professional storytelling.',
    stack: ['Next.js', 'Framer Motion', 'Design System'],
    live: '#hero',
    github: 'https://github.com/aspati1/Aditya-s-Portfolio',
    image: '/projects/bikewithme-2.png',
  },
  {
    title: 'Interactive Product Showcase',
    description:
      'A card-focused showcase interface with media-rich project presentations, smooth hover interactions, and mobile-first behavior.',
    stack: ['React', 'Tailwind CSS', 'Performance'],
    live: '#projects',
    github: 'https://github.com/aspati1/Aditya-s-Portfolio',
    image: '/projects/bikewithme-3.png',
  },
];

export const experience = [
  {
    role: 'Technical Recruiter',
    company: 'Aptino Technologies',
    period: 'Jan 2025 — Present',
    points: [
      'Drive full-cycle hiring for US engineering teams across W2, C2C, and 1099 models.',
      'Partner with hiring managers to map role scorecards and reduce mismatched submissions.',
      'Use data-led sourcing strategies to improve funnel quality and time-to-fill.',
    ],
  },
  {
    role: 'Investment Research Analyst',
    company: 'Gramdev Tech',
    period: 'Jun 2024 — Dec 2024',
    points: [
      'Prepared financial models and market research decks for investment decisions.',
      'Collaborated with cross-functional teams to evaluate business viability and growth potential.',
    ],
  },
  {
    role: 'HR & Recruitment Intern',
    company: 'FirstCry',
    period: 'Dec 2023 — Jan 2024',
    points: [
      'Supported hiring operations, candidate coordination, and role-specific sourcing.',
      'Contributed to reporting and process improvements for recruitment efficiency.',
    ],
  },
];
