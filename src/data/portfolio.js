// ─────────────────────────────────────────────────────────────────────────
//  Single source of truth for the whole site.
//  Everything (home + every role page) is rendered from this file.
//  Edit here and every page updates.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Chethana Benny',
  location: 'Boston, MA, USA',
  relocate: 'Open to relocating',
  phone: '857 395 0964',
  email: 'chethana.enchackal@gmail.com',
  links: {
    github: 'https://github.com/bennychethana',
    linkedin: 'https://www.linkedin.com/in/chethana-benny',
    leetcode: 'https://leetcode.com/u/user3697jg/',
  },
  // A warm, human intro shown on the main landing page.
  intro:
    "Hi, I'm Chethana — an engineer who likes building things that hold up under real traffic. " +
    "Over the last five-plus years I've shipped cloud-native backends, real-time robotics systems, " +
    "LLM-powered products, and the polished frontends people actually click through. I move comfortably " +
    "across the stack, and I care a lot about the small details that make software feel solid.",
}

// ─── Roles ──────────────────────────────────────────────────────────────────
// Each role gets its own URL, accent color, tailored summary, and a curated
// ordering of projects + skills. Share the matching URL for the matching job.
export const roles = {
  fullstack: {
    slug: 'fullstack',
    label: 'Full-Stack Engineer',
    short: 'Backend / Full-Stack',
    accent: '#c4623f', // terracotta
    accentSoft: '#f3d9cb',
    tagline: 'Cloud-native systems, end to end.',
    summary:
      'Full-stack engineer building scalable cloud-native systems across supply chain intelligence, ' +
      'robotics automation, and financial services. Hands-on expertise in Python, JavaScript/TypeScript, ' +
      'and C++, with production experience spanning backend microservices, modern frontends, and the ' +
      'infrastructure underneath them.',
    // Project ids in the order they should appear (most relevant first).
    featuredProjects: ['confide-connect', 'nl2sql-fiscal', 'genai-trading'],
    skillGroups: ['languages', 'backend', 'frontend', 'cloud', 'databases', 'testing'],
  },
  ai: {
    slug: 'ai',
    label: 'AI / ML Engineer',
    short: 'AI / ML',
    accent: '#7b5ea7', // warm violet
    accentSoft: '#e4dcf0',
    tagline: 'RAG, agents, and evals that you can trust.',
    summary:
      'AI/ML software engineer building LLM-powered applications on a strong production-backend foundation. ' +
      'Hands-on with RAG pipelines, agentic systems, and rigorous LLM evaluation — backed by a systems ' +
      'background in C++, Python, and distributed systems from robotics and supply chain domains.',
    featuredProjects: ['nl2sql-fiscal', 'genai-trading', 'confide-connect'],
    skillGroups: ['ai', 'languages', 'backend', 'cloud', 'databases', 'testing'],
  },
  cpp: {
    slug: 'cpp',
    label: 'C++ / Systems Engineer',
    short: 'C++ / Systems',
    accent: '#b07d2b', // amber
    accentSoft: '#efe0c2',
    tagline: 'Real-time systems, memory-aware, built for concurrency.',
    summary:
      "Computer Software Engineering master's grad with a strong foundation in data structures, algorithms, " +
      'and object-oriented C++. Hands-on experience building real-time systems and simulation infrastructure ' +
      'for autonomous robotics — performance-sensitive C++ services, concurrent pipeline architecture, and ' +
      'production debugging on Linux.',
    featuredProjects: ['tower-defense', 'ros2-sim', 'genai-trading'],
    skillGroups: ['languages', 'systems', 'robotics', 'backend', 'cloud'],
  },
  frontend: {
    slug: 'frontend',
    label: 'Frontend Engineer',
    short: 'Frontend',
    accent: '#bf5a76', // warm rose
    accentSoft: '#f1d6de',
    tagline: 'Fast, accessible, pixel-perfect interfaces.',
    summary:
      'Frontend engineer with 5+ years designing scalable React and Next.js applications, with a strong ' +
      'emphasis on performance, accessibility, data visualization, and user experience. I build reusable ' +
      'component systems, optimize rendering pipelines, and partner closely with product and design — with ' +
      'a backend and cloud foundation that lets me own features end to end.',
    featuredProjects: ['confide-connect', 'ux-design', 'nl2sql-fiscal'],
    skillGroups: ['frontend', 'design', 'perfTesting', 'backend', 'languages'],
  },
}

export const roleOrder = ['fullstack', 'ai', 'cpp', 'frontend']

// ─── Experience ───────────────────────────────────────────────────────────────
// Each job carries role-specific bullet sets. `bullets[role]` falls back to
// `bullets.default` when a role has no tailored list.
export const experience = [
  {
    id: 'supply-trace',
    company: 'Supply Trace',
    title: 'Platform Engineer',
    location: 'Boston, MA',
    period: 'Jan 2025 – Dec 2025',
    website: 'https://supplytrace.org',
    bullets: {
      fullstack: [
        'Architected a cloud-native microservices backend (Python OOP, FastAPI, SQLAlchemy, PostgreSQL) serving 6,000+ active users at 99.9% uptime.',
        'Built full-stack features wiring React.js + TypeScript frontends to REST APIs for supply-chain graph visualization and user audit workflows.',
        'Engineered Firebase + Google OAuth auth with JWT validation and Redis-based rate limiting, protecting 1,000+ daily API requests.',
        'Designed an async data pipeline (SNS, SQS, Lambda) to ingest bulk trade data into PostgreSQL, decoupled from the API layer.',
        'Added Redis distributed caching and ETag conditional GETs, cutting redundant database reads by 30%.',
        'Provisioned AWS infrastructure with Terraform — VPC, ALB, Auto Scaling Group, RDS, SNS, SQS, Lambda.',
        'Built a full CI/CD pipeline with GitHub Actions — tests, lint, Docker builds on every push; Packer AMI baking and ASG rolling updates on merge to main.',
        'Integrated an agentic AI assistant via a RAG pipeline with vector embeddings and LLM retrieval for supply-chain risk analysis.',
      ],
      ai: [
        'Prototyped a supply-chain risk intelligence pipeline: fuzzy entity clustering (rapidfuzz) to resolve variant company names across border records, hybrid keyword + semantic search over violation documents via ChromaDB, and cross-encoder reranking.',
        'Evaluated retrieval quality with RAGAS against a naive dense-retrieval baseline.',
        'Integrated an agentic AI assistant using a RAG pipeline with vector embeddings and LLM-based retrieval.',
        'Designed an async data pipeline (SNS, SQS, Lambda) to process bulk trade data into PostgreSQL, decoupled from the API layer.',
        'Architected the cloud-native microservices backend (FastAPI, SQLAlchemy, PostgreSQL) serving 6,000+ users at 99.9% uptime.',
      ],
      cpp: [
        'Architected a cloud-native microservices backend (FastAPI, SQLAlchemy, PostgreSQL) serving 6,000+ users at 99.9% uptime.',
        'Engineered authentication and API protection with Google OAuth and Redis-based rate limiting for 1,000+ daily requests.',
        'Containerized services with Docker and deployed across AWS via automated CI/CD (GitHub Actions), achieving 99.9% uptime.',
        'Provisioned AWS infrastructure with Terraform — VPC, ALB, Auto Scaling Group, RDS, SNS, SQS, Lambda.',
      ],
      frontend: [
        'Led frontend architecture with Next.js 15 (App Router), TypeScript, TailwindCSS, Shadcn, and Storybook — 100+ reusable components supporting 6,000+ users.',
        'Built and maintained an accessibility-first design system (WCAG-compliant, ARIA, keyboard nav), translating Figma wireframes into responsive, pixel-perfect interfaces.',
        'Implemented high-performance geospatial and large-volume visualizations with Mapbox GL and Apache ECharts, improving first contentful paint by 40% via SSR and lazy loading.',
        'Established frontend testing and performance auditing with Jest, Playwright, Lighthouse, and Chrome/React DevTools, reducing UI regressions by 30%.',
        'Partnered with product and design to refine interaction flows, accessibility standards, and responsive behavior across complex workflows.',
        'Did wireframing, mockups, and high-fidelity prototyping in Figma and Framer before implementation.',
      ],
    },
  },
  {
    id: 'northeastern',
    company: 'Northeastern University',
    title: 'Graduate Research Assistant',
    location: 'Boston, MA',
    period: 'Aug 2024 – Dec 2024',
    bullets: {
      default: [
        'Founding frontend engineer at an early-stage startup, leading architecture with Next.js 15, TypeScript, TailwindCSS, and Shadcn UI.',
        'Built 100+ reusable components with Firebase Auth and Redux state management, supporting 6,000+ active users.',
        'Built and maintained a scalable design system, working with designers to translate Figma wireframes into pixel-perfect, accessible UI.',
        'Implemented geospatial and large-volume data visualization with Mapbox GL and Apache ECharts, improving first contentful paint by 40% via SSR and lazy loading.',
        'Established frontend testing standards (Jest, Playwright, ESLint, Prettier, Husky pre-commit hooks), reducing regressions by 30%.',
        'Led internal teach-ins on React and Next.js performance optimization; mentored engineers through code reviews.',
      ],
      ai: [
        'Built scalable React, Redux, and TypeScript frontend workflows integrating REST and GraphQL APIs for 6,000+ active users.',
        'Integrated AI-driven interface components leveraging vector search and LLM-based response streaming to enhance analytical decision-making.',
        'Designed secure authentication flows integrating Google OAuth with backend rate-limiting.',
        'Implemented geospatial and large-volume visualization with Mapbox GL and Apache ECharts, improving FCP by 40% via SSR and lazy loading.',
      ],
    },
  },
  {
    id: 'greyorange',
    company: 'GreyOrange Robotics',
    title: 'Software Engineer',
    location: 'Gurugram, India',
    period: 'Jul 2021 – Oct 2023',
    bullets: {
      fullstack: [
        'Developed a Django conveyor microservice (PostgreSQL, MQTT) integrating C++ modules for real-time bot communication, improving warehouse simulation accuracy by 30%.',
        'Built a Node.js/Express microservice implementing BFS and Dijkstra routing, reducing order-allocation latency across 100+ concurrent bots.',
        'Led an AWS-to-GCP migration — refactored the Python codebase to GCP equivalents and reconfigured Jenkins CI/CD, cutting compute costs by 10% using Preemptible VMs.',
        'Implemented event-driven pub/sub between warehouse services with Celery and Redis for real-time state sync across 100+ concurrent bots.',
        'Built a multi-page warehouse configuration platform (React, Redux, MUI) integrating with 10+ production microservices.',
        'Migrated a legacy JavaScript platform to a Vue.js SPA (+50% onboarding efficiency); designed drag-and-drop workflows with React DnD, cutting configuration time from 60 to 20 minutes.',
        'Served as frontend SME — reviewing architecture decisions and mentoring 5+ engineers on scalable UI patterns.',
      ],
      ai: [
        'Engineered C++ and Python backend services for an autonomous warehouse coordination system managing 100+ concurrent robots.',
        'Diagnosed production memory leaks in C++ services with Valgrind; resolved concurrent race conditions via gdb thread inspection and mutex synchronization.',
        'Designed an MQTT pub/sub architecture synchronizing 100+ concurrent robots at 1,000+ messages/sec.',
        'Built a Node.js microservice implementing BFS and Dijkstra for congestion-aware bot path planning.',
      ],
      cpp: [
        'Engineered C++ and Python backend services for an autonomous warehouse coordination system managing 100+ concurrent robots in large-scale fulfillment centers.',
        'Built a conveyor simulation service (Django/PostgreSQL) as primary test infrastructure for four engineering teams; integrated real-time MQTT via a C++ Paho publisher module replicating robot firmware behavior, improving simulation accuracy by 30%.',
        'Diagnosed production memory leaks in C++ services with Valgrind and resolved concurrent bot-state race conditions via gdb thread inspection and mutex synchronization.',
        'Designed an MQTT pub/sub architecture synchronizing 100+ concurrent robots at 1,000+ messages/sec using topic hierarchy and QoS configuration.',
        'Built a Node.js microservice implementing BFS and Dijkstra graph algorithms for congestion-aware bot path planning.',
        'Deployed a multi-service architecture on Linux using Docker, Kubernetes, and CMake; managed GCP CI/CD pipelines via GitHub Actions.',
        'Used InfluxDB for metrics collection and built Grafana dashboards to monitor warehouse traffic and bot performance.',
      ],
      frontend: [
        'Delivered a multi-page warehouse configuration platform (React, Redux, MUI, Keycloak, Konva) with role-based access control, integrating with 10+ production microservices.',
        'Migrated class-based React components with Context API to functional components with hooks and Redux, reducing technical debt by 50%.',
        'Designed intuitive drag-and-drop UX with React DnD, cutting configuration time from 60 to 20 minutes.',
        'Ported a legacy vanilla-JS/jQuery app to Vue.js, improving maintainability and reducing frontend bugs by 40% post-migration.',
        'Served as frontend SME, mentoring 5+ engineers and reviewing scalable UI architecture decisions.',
      ],
    },
  },
  {
    id: 'synchrony',
    company: 'Synchrony Financial',
    title: 'Software Developer Intern',
    location: 'Hyderabad, India',
    period: 'Jan 2021 – Jun 2021',
    bullets: {
      default: [
        'Built a data analytics platform (Flask + SQL) aggregating tool-usage data for 1,000+ employees, with automated Python pipelines that optimized software license allocation.',
      ],
    },
  },
  {
    id: 'zebra',
    company: 'Zebra Technologies',
    title: 'Software Developer Intern',
    location: 'Pune, India',
    period: 'Aug 2020 – Dec 2020',
    bullets: {
      default: [
        'Automated cross-browser and API testing with Selenium (Java), building integration and unit test suites that raised platform test coverage to 70% across production builds.',
      ],
    },
  },
  {
    id: 'grasim',
    company: 'Grasim Industries',
    title: 'Software Engineer Intern',
    location: 'Nagda, India',
    period: 'May 2019 – Jul 2019',
    bullets: {
      default: [
        'Delivered an internal ticket-booking application used by 500+ employees, implementing user authentication, booking workflows, and transactional state management.',
      ],
    },
  },
]

// ─── Projects ───────────────────────────────────────────────────────────────
// Every project is shown in full detail on every page; role pages just reorder
// so the most relevant ones lead.
export const projects = [
  {
    id: 'confide-connect',
    name: 'Confide Connect',
    tagline: 'A production MERN platform for HIV/AIDS healthcare coordination.',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'Material-UI'],
    roles: ['fullstack', 'frontend'],
    repo: profile_repo('confide-connect'),
    details: [
      'Built a production-ready MERN platform coordinating care between patients, doctors, and labs, with JWT-based role-based access control across every role and workflow.',
      'Real-time group chat over Socket.io / WebSockets, Stripe payments, geolocation and maps (Leaflet.js + OpenCage API), weather integration (AccuWeather API), and multilingual support (i18next).',
      'Responsive UI with React + Material-UI plus PWA offline caching for low-connectivity use.',
      'CI/CD with GitHub Actions and Docker, with 100% Jest unit-test coverage validating real-time UI workflows.',
    ],
  },
  {
    id: 'nl2sql-fiscal',
    name: 'nl2sql-fiscal',
    tagline: 'Ask 900k rows of state fiscal data a question in plain English.',
    stack: ['Next.js', 'TypeScript', 'SQLite', 'Anthropic Claude API', 'Chart.js'],
    roles: ['ai', 'fullstack', 'frontend'],
    repo: profile_repo('nl2sql-fiscal'),
    details: [
      'Natural-language query interface over 900k rows of Washington State fiscal data using a two-step Text-to-SQL architecture.',
      'Claude generates the SQL, SQLite executes it against the real data, and a second Claude call writes a plain-English answer with an auto-rendered Chart.js visualization.',
      'Built an AI governance logger capturing a full audit trail of every model input, output, and token-usage figure per request.',
    ],
  },
  {
    id: 'genai-trading',
    name: 'GenAI Trading Assistant & Strategy Backtester',
    tagline: 'A multi-agent RAG system benchmarked against a from-scratch Transformer.',
    stack: ['PyTorch', 'LangGraph', 'LangChain', 'ChromaDB', 'OpenAI', 'LangSmith', 'RAGAS'],
    roles: ['ai', 'cpp', 'fullstack'],
    repo: profile_repo('genai-trading'),
    details: [
      'Multi-agent financial analysis system built on a LangGraph StateGraph — agents ingest a Jesse Livermore corpus, retrieve relevant passages via hybrid RAG, and generate trading-strategy answers.',
      'Implemented a custom Transformer from scratch in PyTorch (multi-head attention, positional encoding, encoder-decoder) as an alternative answer-generation backend.',
      'Evaluated both backends with RAGAS — GPT-4 scored 0.87 faithfulness / 0.82 answer relevance vs the custom Transformer at 0.41 / 0.38, with the gap attributed to pretraining scale and the absence of instruction tuning.',
      'Full observability via LangSmith tracing for per-agent token cost and latency.',
    ],
  },
  {
    id: 'tower-defense',
    name: 'Tower Defense Game in C++',
    tagline: 'Systems-level game loop with memory pooling and lock-free-ish logging.',
    stack: ['C++', 'Concurrency', 'Memory Pooling', 'CMake'],
    roles: ['cpp'],
    repo: profile_repo('tower-defense-cpp'),
    details: [
      'Producer-consumer logging using a mutex and condition variable: the logging thread sleeps on cv.wait() and wakes on notify_one(), eliminating CPU spin-waiting between the game loop and the I/O thread.',
      'Fixed-size enemy object memory pool eliminating runtime heap allocation — a contiguous pre-allocated array gives O(1) acquire/release with cache-friendly spatial locality over scattered heap objects.',
    ],
  },
  {
    id: 'ros2-sim',
    name: 'ROS2 Robotics Simulation',
    tagline: 'Obstacle-avoidance simulation with a decoupled perception/control pipeline.',
    stack: ['ROS2', 'Gazebo', 'RViz', 'C++', 'catkin', 'CMake'],
    roles: ['cpp'],
    repo: profile_repo('ros2-simulation'),
    details: [
      'Built a ROS2 obstacle-avoidance simulation in Gazebo with RViz visualization, using a decoupled publisher-subscriber node architecture that processes LaserScan sensor input and publishes Twist velocity commands for real-time robot control.',
      'Developed ROS packages with catkin workspaces and the CMake build system, implementing typed pub-sub communication between perception and control pipeline stages.',
    ],
  },
  {
    id: 'ux-design',
    name: 'UX Engineering & Product Design',
    tagline: 'Research-driven prototyping that maps cleanly onto real frontend architecture.',
    stack: ['Figma', 'Framer', 'User Research', 'AI-Assisted Prototyping'],
    roles: ['frontend'],
    repo: null,
    details: [
      'Designed and prototyped web applications using user research, persona mapping, and high-fidelity Figma prototypes aligned with real-world frontend architecture.',
      'Used AI-assisted prototyping to move quickly from research insight to interactive, testable mockups.',
    ],
  },
]

// Helper so repo URLs stay consistent and easy to update in one place.
function profile_repo(name) {
  return `https://github.com/bennychethana/${name}`
}

// ─── Skills ─────────────────────────────────────────────────────────────────
export const skillGroups = {
  languages: {
    label: 'Languages',
    items: ['C++', 'Python', 'TypeScript', 'JavaScript', 'C', 'Java', 'Bash'],
  },
  ai: {
    label: 'AI / ML',
    items: [
      'RAG pipelines', 'Agentic systems', 'Text-to-SQL', 'Hybrid search',
      'Vector embeddings', 'Prompt engineering', 'LLM APIs (Anthropic, OpenAI)',
      'ChromaDB', 'RAGAS evals', 'PyTorch', 'Transformer architecture',
      'LangChain', 'LangGraph', 'LangSmith', 'HuggingFace',
    ],
  },
  frontend: {
    label: 'Frontend',
    items: [
      'React', 'Next.js', 'Vue', 'Redux', 'TypeScript', 'TailwindCSS',
      'Shadcn', 'Material-UI', 'Mapbox GL', 'Apache ECharts', 'Storybook',
    ],
  },
  design: {
    label: 'UI / UX & Design',
    items: [
      'Figma', 'Framer', 'Design Systems', 'Accessibility (WCAG / ARIA)',
      'Responsive Design', 'Wireframing & Prototyping',
    ],
  },
  perfTesting: {
    label: 'Performance & Testing',
    items: [
      'Jest', 'React Testing Library', 'Playwright', 'Lighthouse',
      'React DevTools', 'Chrome DevTools', 'ESLint', 'Prettier', 'Husky',
    ],
  },
  backend: {
    label: 'Backend',
    items: [
      'FastAPI', 'Django', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL',
      'Redis', 'Celery', 'MQTT', 'SQLAlchemy',
    ],
  },
  systems: {
    label: 'Systems & Concurrency',
    items: [
      'Linux', 'Multithreading', 'mutex / condition variables', 'Memory management',
      'Memory pooling', 'CMake', 'gdb', 'Valgrind',
    ],
  },
  robotics: {
    label: 'Robotics & Real-time',
    items: ['ROS2', 'Gazebo', 'RViz', 'MQTT pub/sub', 'Paho C++', 'catkin', 'Real-time pipeline design'],
  },
  cloud: {
    label: 'Cloud & DevOps',
    items: [
      'AWS (EC2, RDS, ALB, ASG, Lambda, SNS, SQS, Route 53, KMS)', 'GCP',
      'Terraform', 'Packer', 'Docker', 'Kubernetes', 'GitHub Actions',
      'Jenkins', 'Nginx', 'Cloudflare', 'Vercel',
    ],
  },
  databases: {
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'ChromaDB', 'InfluxDB'],
  },
  testing: {
    label: 'Testing',
    items: ['Jest', 'React Testing Library', 'Playwright', 'Pytest', 'RAGAS', 'Lighthouse'],
  },
}

// ─── Education, awards, extras ────────────────────────────────────────────────
export const education = [
  {
    school: 'Northeastern University',
    location: 'Boston, MA, US',
    degree: 'M.S. in Computer Software Engineering',
    detail: 'CGPA 3.96 / 4.0',
    period: 'Jan 2024 – Dec 2025',
  },
  {
    school: 'BITS Pilani',
    location: 'Goa, India',
    degree: 'B.E. Computer Engineering + M.Sc. Chemistry',
    detail: 'Dual degree',
    period: 'Aug 2016 – Jul 2021',
  },
]

export const awards = [
  'Spirit Award (2×), GreyOrange Robotics — 2022, 2023',
  'ROS Development & Robotics Simulation — The Construct',
  'Data Analysis with Python — Jovian.ai, 2020',
  'Certificate of Appreciation, Grasim Industries — 2019',
  'Data Structures & Algorithms in C++, Coding Blocks — 2019',
]

export const algorithms = {
  blurb: '350+ algorithmic problems solved in C++ across graph algorithms, dynamic programming, and data structures.',
  leetcode: profile.links.leetcode,
}
