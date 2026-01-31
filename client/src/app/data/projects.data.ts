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
    future: string;
    isOpen: boolean;
    images: string[];
    currentImgIndex: number;
    videoUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        name: "ICEGATE E-Governance Portal",
        type: "Government • High Scale",
        summary: "Scalable trade operations portal for Indian Customs.",
        problem: "The existing legacy system struggled with performance, accessibility, and high data loads, affecting trade operations.",
        solution: "Designed and developed a scalable web application using Angular 17. Integrated with Spring Boot APIs for secure data handling and MySQL for efficient storage.",
        tech: {
            db: ['MySQL'],
            be: ['Spring Boot', 'Java'],
            fe: ['Angular 17', 'TypeScript', 'HTML5/CSS']
        },
        outcome: "Improved data efficiency by 30% and delivered production-grade modules integrated with national-level trade systems.",
        future: "Continued optimization for high traffic load.",
        isOpen: false,
        images: [
            'assets/projects/icegate-portal.png',
            'assets/projects/icegate-dashboard.png'
        ],
        currentImgIndex: 0,
        videoUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ5Z3U4aDducjR5Z3U4aDducjR5Z3U4aDducjR5Z3U4aDducjR5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1TVThqceHgOYrFz/giphy.gif', // Placeholder
        architecture: {
            visual: `[Angular Client] -> [API Gateway] -> [Spring Boot Services] -> [MySQL]`,
            decisions: ["Angular 17 for signals performance", "Spring Boot for enterprise security"],
            rejected: ["React (Client preference for Angular)", "NoSQL (Relational data needs)"]
        },
        details: {
            constraints: ["Government security compliance", "High availability"],
            tradeoffs: ["Strict schema vs flexibility", "Initial setup time"],
            performance: ["Lazy loading modules", "API caching"],
            security: ["Role-based access", "Data encryption"]
        }
    },
    {
        name: "Cloud Software Group Modernization",
        type: "Enterprise • Cloud",
        summary: "Enterprise-grade cloud application transformation.",
        problem: "Legacy systems faced performance bottlenecks and lacked scalability for cloud environments.",
        solution: "Engineered responsive UIs and RESTful microservices. Automated CI/CD pipelines using Jenkins to streamline deployments.",
        tech: {
            db: ['MySQL'],
            be: ['Node.js', '.NET', 'PHP'],
            fe: ['Angular', 'TIBCO']
        },
        outcome: "Improved performance and deployment speed by up to 45%. Enabled scalable cloud migrations.",
        future: "Further microservices decomposition.",
        isOpen: false,
        images: [
            'assets/projects/csg-services.png'
        ],
        currentImgIndex: 0,
        videoUrl: 'https://media.giphy.com/media/l2Je6m6JQhZ8ebyJq/giphy.gif', // Placeholder (Tech Cloud)
        architecture: {
            visual: `[Client] -> [Load Balancer] -> [Microservices] -> [DB Cluster]`,
            decisions: ["Microservices for independent scaling", "Jenkins for automation"],
            rejected: ["Monolith (Scaling issues)", "Manual deployment"]
        },
        details: {
            constraints: ["Legacy integrity", "Zero downtime migration"],
            tradeoffs: ["Complexity of distributed systems", "Service discovery overhead"],
            performance: ["Database indexing", "Asset optimization"],
            security: ["Cloud security groups", "API Gateway"]
        }
    },
    {
        name: "Althea.ai Intelligence Platform",
        type: "AI • Dashboard",
        summary: "AI-powered internal dashboard and official website.",
        problem: "Manual data workflows and lack of a unified dashboard slowed down operations.",
        solution: "Built dynamic web forms and dashboards using Angular. Integrated Python-based RESTful APIs (Django) for backend functionality.",
        tech: {
            db: ['SQL'],
            be: ['Python', 'Django', 'REST APIs'],
            fe: ['Angular', 'AWS']
        },
        outcome: "Reduced manual data processes by 40% and launched the official company website.",
        future: "Enhanced AI model integration.",
        isOpen: false,
        images: [
            'assets/projects/althea-dashboard.png',
            'assets/projects/althea-expertise.png'
        ],
        currentImgIndex: 0,
        videoUrl: 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif', // Placeholder (AI/Matrix)
        architecture: {
            visual: `[Angular UI] -> [Django API] -> [SQL DB]`,
            decisions: ["Django for rapid backend dev", "Angular for robust frontend"],
            rejected: ["PHP (Need for Python AI libs)", "Vue (Team expertise in Angular)"]
        },
        details: {
            constraints: ["Startup budget code", "Rapid iteration"],
            tradeoffs: ["Monolithic backend initially", "Simple deployment"],
            performance: ["Django caching", "Optimized queries"],
            security: ["Django Middleware", "SSL/TLS"]
        }
    }
];
