export const profile = {
  name: 'Sai Kaja',
  role: 'Full-stack developer',
  email: 'saikaja99@gmail.com',
  github: 'https://github.com/saikaja',
  linkedin: 'https://www.linkedin.com/in/SAI-S-KAJA/',
  resume: '/Sai-Kaja-Resume.pdf',
  location: 'Toronto, ON',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

export const glance = [
  { label: 'Currently', value: 'Research Assistant, MindShield' },
  { label: 'Education', value: 'BSc, University of Toronto (2026) · Cognitive Science, Computer Science & Math' },
  { label: 'Core stack', value: 'React, Angular, TypeScript, .NET Core, C#, SQL Server, Azure' },
  { label: 'Location', value: 'Toronto, ON' },
]

export const experience = [
  {
    role: 'Research Assistant',
    org: 'MindShield',
    dates: 'Jul 2026 — Present',
    current: true,
    summary: 'Building cognitive-security assessments that measure how people recognise and respond to cyber threats.',
    points: [
      'Write cybersecurity scenarios, questions and system prompts on social engineering, unsafe instructions and risk recognition.',
      'Develop scoring logic and statistical models that classify outcomes and surface patterns tied to security risk.',
      'Review assessment outputs for accuracy and edge cases, and turn findings into technical reports with clear recommendations.',
    ],
    tags: ['Behavioural analysis', 'Statistics', 'Prompt design'],
  },
  {
    role: 'Full Stack Developer',
    org: 'Contract',
    dates: 'Apr 2025 — Sep 2025',
    summary: 'Built and ran the Import Wizard — an Excel-driven import workflow across Angular, .NET Core and Azure.',
    points: [
      'Owned the flow for importing, validating and logging operational data from Excel files.',
      'Improved error visibility with real-time exception reporting and tracking in Azure.',
      'Kept backend workflows reliable across .NET Core, SQL Server and Azure Service Bus under tight deadlines.',
    ],
    tags: ['Angular', '.NET Core', 'SQL Server', 'Azure Service Bus'],
    project: 'import-wizard',
  },
  {
    role: 'Full Stack Developer',
    org: 'PTSI.ca',
    dates: 'Jan 2025 — Apr 2026',
    summary: 'Owned the website and lead-generation workflows for an early-stage startup.',
    points: [
      'Delivered end-to-end frontend and backend work while priorities shifted week to week.',
      'Diagnosed and fixed issues across the stack to keep the user experience responsive.',
      'Worked across functions to ship updates tied to business outcomes.',
    ],
    tags: ['Full-stack', 'Startup', 'AI-assisted dev'],
  },
  {
    role: 'Math Tutor',
    org: 'Forest Hill Tutoring',
    dates: 'Jan 2024 — Apr 2026',
    summary: 'Tailored instruction in calculus, vectors, statistics and advanced functions.',
    points: ['Raised student test scores by 30% on average.'],
    tags: ['Teaching', 'Communication'],
  },
]

export const featured = [
  {
    id: 'import-wizard',
    title: 'Import Wizard',
    kicker: 'Contract work · 2025',
    blurb:
      'A five-step workflow for importing operational data from Excel. Users choose a category and fields, download a matching template, map columns and submit the file for queued processing, then review the results and full import history.',
    highlights: [
      'Guided 5-step flow: templates, column mapping, validation',
      'Queued processing on Azure Service Bus with status polling',
      'Filterable, paginated history with Excel export',
      'Live demo runs on sample data in the browser, with no client data',
    ],
    stack: ['Angular', 'TypeScript', '.NET Core', 'C#', 'SQL Server', 'Azure Service Bus'],
    images: [
      { src: '/projects/import-wizard-step1.png', alt: 'Import Wizard step 1: choosing an import category and user fields' },
      { src: '/projects/import-wizard-history.png', alt: 'Import Wizard history table with filters and statuses' },
    ],
    links: [
      { label: 'Live demo', href: 'https://import-wizard-ui.vercel.app' },
      { label: 'Frontend repo', href: 'https://github.com/saikaja/import-wizard-ui' },
      { label: 'API repo', href: 'https://github.com/saikaja/ImportWizardAPI' },
    ],
  },
  {
    id: 'caffeine',
    title: 'The Caffeine Decoy',
    kicker: 'Personal project · 3D web',
    blurb:
      'An interactive, scroll-driven 3D explainer that follows caffeine from a cup of coffee to a single adenosine receptor, showing how it blocks the brain’s fatigue signal.',
    highlights: [
      'Scroll-driven scenes from the cup to a single receptor',
      'Built with Three.js; runs in the browser',
      'Complex neuroscience presented visually for a general audience',
    ],
    stack: ['Three.js', 'JavaScript', 'WebGL'],
    images: [{ src: '/projects/caffeine-3d.png', alt: 'The Caffeine Decoy landing scene with a 3D caffeine molecule above a coffee cup' }],
    links: [
      { label: 'Live site', href: 'https://caffeine-3d.vercel.app' },
      { label: 'Repo', href: 'https://github.com/saikaja/caffeine-3d' },
    ],
  },
  {
    id: 'mycanadianuni',
    title: 'Canadian University Program Finder',
    kicker: 'mycanadianuni.ca',
    blurb:
      'A React platform for students exploring Canadian university programs, with dynamic filters to narrow down by university and course.',
    highlights: ['Dynamic, dependent filters', 'Styled-components UI', 'Live on a custom domain'],
    stack: ['React', 'JavaScript', 'styled-components'],
    images: [{ src: '/projects/mycanadianuni.png', alt: 'mycanadianuni.ca search form for universities and courses' }],
    links: [
      { label: 'Live site', href: 'https://mycanadianuni.ca' },
      { label: 'Repo', href: 'https://github.com/saikaja/mycanadianuni' },
    ],
  },
]

export const moreProjects = [
  {
    title: 'Meta Learning Program',
    meta: 'UofT · 2023',
    text: 'A Java study aid built on cognitive-science learning principles, with SQL Server persistence.',
    stack: ['Java', 'SQL Server'],
  },
  {
    title: 'Roadmap Optimization',
    meta: 'UofT · 2022–23',
    text: 'Traffic-flow analysis with Dijkstra’s algorithm and graph theory — cut simulated congestion by 25%.',
    stack: ['Python', 'Graphs'],
  },
  {
    title: 'Aim Trainer',
    meta: '2021',
    text: 'A reaction-speed game with custom game loop and event handling.',
    stack: ['Python', 'Pygame'],
  },
  {
    title: 'Employee Management System',
    meta: '2020',
    text: 'Salary and employment-type tracking with a Swing GUI over SQL Server.',
    stack: ['Java', 'Swing', 'SQL Server'],
  },
]

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['React', 'Angular', '.NET Core', 'ASP.NET', 'Entity Framework', 'REST APIs', 'Three.js'] },
  { group: 'Cloud & Data', items: ['Azure Service Bus', 'SQL Server', 'Power BI', 'Tableau', 'Data pipelines'] },
  { group: 'AI tooling', items: ['Claude', 'ChatGPT', 'GitHub Copilot', 'Cursor', 'Prompt engineering', 'Agentic workflows'] },
  { group: 'Practice', items: ['Git', 'Jira', 'Postman', 'UML', 'Agile', 'Technical writing'] },
]

export const coursework = [
  'Psychology of Decision-Making',
  'Human-Computer Interaction',
  'Learning & Memory',
  'Cognitive Neuroscience',
  'Research Methods & Statistics',
  'Data Structures',
  'Software Engineering',
  'Database Management',
]
