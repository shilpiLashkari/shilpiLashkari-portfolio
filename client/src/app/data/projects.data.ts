export interface Project {
    name: string;
    type: string;
    summary: string;
    problem: string;
    solution: string;
    architecture: {
        visual: string;
        decisions: string[];
        rejected: string[];
    };
    details: {
        constraints: string[];
        tradeoffs: string[];
        performance: string[];
        security: string[];
    };
    tech: {
        fe: string[];
        be: string[];
        db: string[];
    };
    outcome: string;
    conclusions: string[];
    future: string;
    isOpen: boolean;
    images: string[];
    currentImgIndex: number;
    videoUrl?: string;
    liveUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        name: "Human-in-the-Loop Response Orchestrator",
        type: "SRE • Infrastructure",
        summary: "An enterprise-grade SRE platform designed to transform infrastructure chaos into secure, intelligent action. It orchestrates the entire incident lifecycle by clustering thousands of noisy alerts into manageable situations while keeping a human at the center of every critical remediation action. Built with a high-performance polyglot stack of Node.js and Python to ensure zero-latency response during production outages.",
        problem: "Modern infrastructure generates thousands of 'noisy' alerts, leading to alert fatigue and risky automated fixes.",
        solution: "Built a polyglot system (Node.js/Python) that clusters alerts and requires explicit human approval before execution.",
        tech: {
            db: ['Django ORM'],
            be: ['Node.js', 'Python', 'Django', 'Socket.io'],
            fe: ['Angular', 'React', 'Vite', 'RxJS']
        },
        outcome: "Successfully bridges the gap between raw data and safe remediation with zero-latency response times.",
        conclusions: [
            "Implemented smart alert clustering to prevent noisy notification storms.",
            "Designed a fail-safe execution layer where no action occurs without human validation.",
            "Leveraged a polyglot stack to combine Node's concurrency with Python's data intelligence.",
            "Developed specialized UIs: a React analytics hub and a secure Angular command center.",
            "Integrated Socket.io for real-time bidirectional communication across the ecosystem."
        ],
        future: "AI-driven predictive scaling.",
        isOpen: false,
        images: [
            'assets/projects/human-in-the-loop.png'
        ],
        currentImgIndex: 0,
        videoUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ5Z3U4aDducjR5Z3U4aDducjR5Z3U4aDducjR5Z3U4aDducjR5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1TVThqceHgOYrFz/giphy.gif',
        liveUrl: 'https://secure-command-center.netlify.app/',
        architecture: {
            visual: `[Alert Ingestion] -> [Incident Orchestrator] -> [Human Approval Logic] -> [Execution Node]`,
            decisions: ["Node.js for high-concurrency ingestion", "Python/Django for pattern matching"],
            rejected: ["Pure Automation (Too risky for production)", "Monolithic UI (Divided by persona)"]
        },
        details: {
            constraints: ["Critical production uptime", "Complex event clustering"],
            tradeoffs: ["Extra human step vs full automation", "Polyglot complexity"],
            performance: ["Low-latency WebSockets", "D3.js rendering at 60fps"],
            security: ["Role-based click approval", "Secure script execution"]
        }
    },
    {
        name: "Nexura CRM Platform",
        type: "Enterprise • AI",
        summary: "A sophisticated, enterprise-ready Customer Relationship Management platform built for modern business scalability. It features an interactive Kanban deal pipeline, global search capabilities, and a context-aware AI assistant powered by Google Gemini that understands live business metrics. The application leverages a robust React and Node.js monorepo architecture with Prisma for seamless data orchestration and top-tier security.",
        problem: "Businesses struggle with fragmented sales data and lack real-time intelligence for growth forecasting.",
        solution: "Developed a scalable monorepo using React and Node.js with Google Gemini AI for context-aware assistance.",
        tech: {
            db: ['PostgreSQL', 'Prisma'],
            be: ['Node.js', 'Express', 'Google Gemini AI'],
            fe: ['React 18', 'TypeScript', 'Tailwind CSS', 'Recharts']
        },
        outcome: "Delivered a unified dashboard tracking revenue and deals with enterprise-ready security and AI insights.",
        conclusions: [
            "Architected a real-time dashboard with multi-currency (INR) support for global tracking.",
            "Integrated Google Gemini AI for context-aware assistance based on live business stats.",
            "Visualized sales workflows using a Kanban-style pipeline for efficient deal management.",
            "Implemented global search interface querying accounts and contacts with sub-second latency.",
            "Secured the platform with JWT, role-based access, and robust Helmet security headers."
        ],
        future: "Predictive lead scoring.",
        isOpen: false,
        images: [
            'assets/projects/nexura-crm-app.png'
        ],
        currentImgIndex: 0,
        videoUrl: 'https://media.giphy.com/media/l2Je6m6JQhZ8ebyJq/giphy.gif',
        liveUrl: 'https://nexura-crm-app.netlify.app/login',
        architecture: {
            visual: `[React UI] -> [Express API] -> [Prisma ORM] -> [PostgreSQL]`,
            decisions: ["Prisma for type-safe DB access", "Gemini for context-aware AI"],
            rejected: ["Next.js (Preferred client-side weight control)", "NoSQL (Relational data needs)"]
        },
        details: {
            constraints: ["Financial data accuracy", "Scalable user management"],
            tradeoffs: ["Server-side weight vs client interactivity", "Relational schema complexity"],
            performance: ["Optimized Prisma queries", "Memoized UI components"],
            security: ["JWT auth", "Environment variable protection"]
        }
    },
    {
        name: "Production Outage Time-Machine",
        type: "SRE • Observability",
        summary: "A revolutionary observability 'Time-Machine' that allows SREs to rewind system states and pinpoint the exact cause of production failures. By overlaying deployment events and configuration changes directly onto live D3.js metric waves, it eliminates the guesswork during high-pressure outages. The system utilizes real-time WebSockets to synchronize multiple micro-frontends into a unified visual war room.",
        problem: "Correlating code or config changes with latency spikes during high-pressure outages is difficult.",
        solution: "Built a micro-frontend system recording every event, allowing SREs to 'time-travel' through system states.",
        tech: {
            db: ['Telemetry Logs'],
            be: ['Node.js', 'Socket.io'],
            fe: ['Angular 17', 'React 18', 'D3.js', 'RxJS']
        },
        outcome: "Enables 'debugging like a scientist' with a visual war room and AI-driven diagnostic suggestions.",
        conclusions: [
            "Created a custom D3.js 'Live Latency Wave' for 60fps system stability monitoring.",
            "Developed a unique 'Time-Travel Scrubbing' feature to inspect historical logs visually.",
            "Synchronized separate Angular and React apps via a central Node.js WebSocket hub.",
            "Added AI-driven diagnostic alerts that suggest likely causes like config mismatches.",
            "Leveraged RxJS for complex event handling and timeline interaction without lag."
        ],
        future: "Automated rollback triggers.",
        isOpen: false,
        images: [
            'assets/projects/production-outage-time-machine.png'
        ],
        currentImgIndex: 0,
        videoUrl: 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif',
        liveUrl: 'https://time-machine-analytics.onrender.com/',
        architecture: {
            visual: `[Micro-Frontend Shell] -> [WebSocket Hub] -> [SRE Cockpits]`,
            decisions: ["Angular for type-safe Admin", "React/D3 for performance visuals"],
            rejected: ["Monolith UI (Scaling issues)", "HTTP Polling (Too slow for live outages)"]
        },
        details: {
            constraints: ["High frequency telemetry", "Cross-app state sync"],
            tradeoffs: ["Visual complexity vs raw logs", "Browser memory usage"],
            performance: ["GPU-accelerated D3.js", "Efficient Socket broadcasting"],
            security: ["Protected admin commands", "Telemetry data masking"]
        }
    },
    {
        name: "Flux Browser",
        type: "AI • Experimental",
        summary: "An experimental 'Generative Web' simulation that explores a future where websites are hallucinated on the fly rather than retrieved from static servers. Using a custom heuristic 'Flux Engine' and OpenAI's GPT-4, it generates unique, production-ready HTML and Tailwind CSS for any prompt or URL. It features a complete browser shell with history, tabs, and state persistence, blurring the line between dreams and reality.",
        problem: "The static nature of the web limits creative exploration and spontaneous content generation.",
        solution: "A React prototype with a custom 'Flux Engine' integrating GPT-4 to output HTML for any prompt.",
        tech: {
            db: ['localStorage'],
            be: ['OpenAI GPT-4', 'Heuristic Engine'],
            fe: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS']
        },
        outcome: "Explores the future of generative interactivity where no website exists until a user asks for it.",
        conclusions: [
            "Built a custom 'Flux Engine' generating dynamic content and fake search for any URL.",
            "Integrated OpenAI API to output production-ready HTML and Tailwind in real-time.",
            "Designed a dream-like UI with glitch animations using Framer Motion and CSS filters.",
            "Implemented a functional browser shell with tabs, history, and state persistence.",
            "Developed 'Flux Search' generating plausible results for fictional concepts."
        ],
        future: "DALL-E image hydration.",
        isOpen: false,
        images: [
            'assets/projects/flux-browser.png'
        ],
        currentImgIndex: 0,
        videoUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ5Z3U4aDducjR5Z3U4aDducjR5Z3U4aDducjR5Z3U4aDducjR5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1TVThqceHgOYrFz/giphy.gif',
        liveUrl: 'https://flux-browser.netlify.app/',
        architecture: {
            visual: `[User Input] -> [Heuristic Engine / LLM] -> [Dynamic HTML Injection]`,
            decisions: ["Framer Motion for transitions", "OpenAI for high-fidelity hallucinations"],
            rejected: ["Static Templates (Lacked 'dream' feel)", "Full Backend (Client-side focus)"]
        },
        details: {
            constraints: ["LLM response latency", "CSS Glitch performance"],
            tradeoffs: ["Safety vs infinite creativity", "Client-side state complexity"],
            performance: ["Lazy loading hallucinations", "Optimized Framer blob rendering"],
            security: ["Safe HTML parsing", "API key protection via local storage"]
        }
    },
    {
        name: "Smart String Analyzer",
        type: "JavaScript • Project",
        summary: "A logic-driven, high-performance text analysis engine built to demonstrate core JavaScript engineering principles and interview-ready problem-solving. It handles complex real-time processing tasks like palindrome detection and character frequency mapping while maintaining a focus on performance-aware frontend development. The project emphasizes clean code, pure functions, and efficient DOM manipulation without the overhead of heavy frameworks.",
        problem: "Real-time analysis often suffers from lag or fails to handle symbols and multi-case edge cases.",
        solution: "A vanilla JavaScript application using debouncing and frequency mapping to analyze text efficiently.",
        tech: {
            db: ['N/A'],
            be: ['Pure JavaScript'],
            fe: ['HTML5', 'Bootstrap 5', 'CSS3']
        },
        outcome: "Provides a lean, logic-first demonstration of core web engineering principles and clean code.",
        conclusions: [
            "Optimized performance using debounced input handling for smooth real-time analysis.",
            "Built robust frequency mapping logic ignoring whitespace and special symbols.",
            "Implemented strict palindrome detection handling mixed-case and symbols.",
            "Focused on logic-first architecture using pure functions for predictable updates.",
            "Utilized semantic HTML5 and Bootstrap for a professional and responsive UI."
        ],
        future: "Regex custom patterns.",
        isOpen: false,
        images: [
            'assets/projects/smart-string-analyser.png'
        ],
        currentImgIndex: 0,
        videoUrl: 'https://media.giphy.com/media/l2Je6m6JQhZ8ebyJq/giphy.gif',
        liveUrl: 'https://smart-string-analyser-f13mmtu9u-shilpis-projects-8f29f6ea.vercel.app/',
        architecture: {
            visual: `[User Input] -> [Debounce Manager] -> [Analysis Logic] -> [DOM Renderer]`,
            decisions: ["Vanilla JS for core proficiency", "Bootstrap for rapid UI layout"],
            rejected: ["Framework (Overkill for the logic scope)", "Polling (Inefficient for input events)"]
        },
        details: {
            constraints: ["Zero-lag UI updates", "Large text block processing"],
            tradeoffs: ["Logic-first vs high visual complexity", "Direct DOM vs Virtual DOM"],
            performance: ["O(N) frequency counting", "Minimal script footprint"],
            security: ["XSS safe text injection", "Input sanitization"]
        }
    }
];

